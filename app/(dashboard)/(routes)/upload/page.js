"use client";
import React from 'react'
import {getStorage, uploadBytesResumable} from 'firebase/storage';
import UploadForm from './_components/UploadForm';
import { app } from '@/firebaseConfig';


function Upload() {

  const FirebaseStorage = getStorage(app);
  const FileUploader=(file)=>{

    const metaData = {
      contentType: file.type,
    }
    const spaceRef = ref(storage, 'file-uploads/'+file?.name);
    const uploadTask = uploadBytesResumable(spaceRef, file,metaData);
    uploadTask.on('state_changed',(snapshot)=>{
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      // network fault would be added later 
    })



  }
  return (
    <div className='p-5 px-8 md:px-28'>
      <h2 className='text-[20px] text-center m-5'>Start  
        <strong className='text-primary'> Uploading </strong>
        
        Files and <strong className='text-primary'>Share </strong> it.</h2>
      <UploadForm fileUploadBtn={(file)=>FileUploader(file)}/>
    </div>
  )
}

export default Upload;
