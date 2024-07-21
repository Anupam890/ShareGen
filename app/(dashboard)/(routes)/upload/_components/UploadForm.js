import React, { useState } from "react";
import toast,{Toaster } from "react-hot-toast";
import FilePreview from "./FilePreview";


function UploadForm({fileUploadBtn}) {
  const [file, setFile] = useState();

  const onSelectFile = (file) => {
    if(file && file.size>2000000)
    {
     toast.error("File size should be less than 2MB")
     return;
    }
    setFile(file);
    toast.success("File uploaded successfully")
        
  }


  return (
    <div className="text-center">
      <div className="flex items-center mb-3 justify-center w-full">
        <label
          for="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-primary border-dashed rounded-lg cursor-pointer bg-blue-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-12 h-12 mb-4 text-primary dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-primary dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 2MB)
            </p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" 
          onChange={(e) => onSelectFile(e.target.files[0])}
          />
        </label>
      </div>
      {file? <FilePreview file={file} removeFile={()=>setFile(null)} /> : null}
      <button
        disabled={!file}
        onClick={()=>fileUploadBtn(file)}
        className="mt-5 w-[30%] bg-primary p-2 text-white rounded-full disabled:bg-gray-400"
      >
        Upload
      </button>
      <Toaster />
    </div>
  );
}

export default UploadForm;
