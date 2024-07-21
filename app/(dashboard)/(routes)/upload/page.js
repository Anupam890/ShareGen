"use client";
import React, { useState } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import UploadForm from "./_components/UploadForm";
import { app } from "@/firebaseConfig";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { useUser } from "@clerk/nextjs";
import { RandomString } from "@/app/utils/GenerateRandom";
import { useRouter } from "next/navigation";

function Upload() {
  const { user } = useUser();
  const storage = getStorage(app);
  const db = getFirestore();
  const router = useRouter();
  const [docId, setDocId] = useState(null);

  const FileUploader = (file) => {
    const metaData = {
      contentType: file.type,
    };
    const spaceRef = ref(storage, "/file-uploads/" + file.name);
    const uploadTask = uploadBytesResumable(spaceRef, file, metaData);

    const loadingToastId = toast.loading("Upload is 0% done");

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        toast.loading(`Upload is ${progress}% done`, {
          id: loadingToastId,
        });

        if (progress === 100) {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadUrl) => {
              console.log("File downloaded at:", downloadUrl);
              toast.remove(loadingToastId);
              saveFileInfo(file, downloadUrl);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
              toast.error("Failed to get download URL");
            });
        }
      },
      (error) => {
        toast.remove(loadingToastId);
        console.error("Upload error:", error);
        toast.error("Failed to upload");
      },
      () => {
        toast.remove(loadingToastId);
        toast.success("Uploaded successfully");
      }
    );
  };

  const saveFileInfo = async (file, fileUrl) => {
    const newDocId = Date.now().toString();
    const fileInfo = {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      fileUrl: fileUrl,
      id: newDocId,
      userEmail: user?.primaryEmailAddress?.emailAddress || "unknown",
      userName: user?.fullName || "unknown",
      password: '',
      shortUrl: process.env.NEXT_PUBLIC_BASE_URL + RandomString(),
    };

    console.log("Saving file info:", fileInfo);

    try {
      await setDoc(doc(db, "uploadedFiles", newDocId), fileInfo);
      setDocId(newDocId);
      console.log("Document written with ID: ", newDocId);

      // Ensure docId is set before navigating
      setTimeout(() => {
        router.push('/filepreview/' + newDocId);
      }, 2000);
    } catch (error) {
      console.error("Error writing document:", error);
      toast.error("Error saving file info");
    }
  };

  return (
    <div className="p-5 px-8 md:px-28">
      <h2 className="text-[20px] text-center m-5">
        Start
        <strong className="text-primary"> Uploading</strong>
        Files and <strong className="text-primary">Share </strong> it.
      </h2>
      <UploadForm fileUploadBtn={(file) => FileUploader(file)} />
    </div>
  );
}

export default Upload;