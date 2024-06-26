import React from 'react';

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
        <p className="text-gray-500 text-center">No image loaded</p>
      </div>
    )}
  </div>
);

export default ImageSection;
