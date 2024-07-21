import { File, X } from "lucide-react";

function FilePreview({ file,removeFile }) {
  return (
    <div className="flex items-center gap-2 justify-between mt-5 border rounded-md p-2 border-blue-200">
      <div className="flex items-center gap-2 p-2 justify-between">
        <File className="w-10 h-10" />
        <div className="text-left">
          <h2>{file.name}</h2>
          <p>
            {file.type} - {(file.size / 1024 / 1024).toFixed(2)}MB
          </p>
        </div>
      </div>
      <X className="text-red-600 cursor-pointer "
      onClick={()=>removeFile()}
      />
    </div>
  );
}

export default FilePreview;
