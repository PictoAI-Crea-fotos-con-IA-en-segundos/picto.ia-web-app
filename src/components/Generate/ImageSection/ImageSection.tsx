import React from 'react';
import { FaRegImage } from "react-icons/fa6";

interface Props {
  imageUrl: string | null;
  error: string | null;
}

const ImageSection: React.FC<Props> = ({ imageUrl, error }) => (
  <div className="flex flex-1 justify-center items-center p-4 bg-white shadow-lg rounded overflow-hidden max-w-sm max-h-[400px] mx-auto">
    {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
    {imageUrl ? (
      <img src={imageUrl} alt="Generated Image" className="max-w-full max-h-full object-contain" />
    ) : (
      <div className="w-full h-full flex justify-center items-center bg-gray-200">
        <p className="text-gray-500 text-center p-2">No tiene Ningua Imagen </p><FaRegImage className='text-lg text-slate-900' />

      </div>
    )}
  </div>
);

export default ImageSection;
