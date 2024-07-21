"use client";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react"
import { app } from "@/firebaseConfig";

function filepreview({params}) {
    const [fileInfo,setFilleInfo] = useState();
    const db = getFirestore(app);
    useEffect(()=>{
        params?.fileId && getFileInfo();
    },[])

    const getFileInfo = async()=>{
        const docRef = doc(db,"uploadedFiles",params?.fileId)
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            setFilleInfo(docSnap.data());
            console.log('file data:', docSnap.data())
        }else{
            console.log('file not found')
        }
    }
  return (
    <div className="container">
      
    </div>
  )
}

export default filepreview
