import React from 'react';
import { Progress } from "@nextui-org/react";

interface Props {
  prompt: string;
  setPrompt: (prompt: string) => void;
  handleGenerateImage: () => void;
  loading: boolean;
  progress?: number;  // Optional, provides a way to show actual progress
}

const TextSection: React.FC<Props> = ({ prompt, setPrompt, handleGenerateImage, loading, progress }) => (
  <div className="flex flex-1 flex-col p-5 bg-gray-800 rounded-lg shadow">
    <h3 className="text-lg font-semibold text-white mb-4">Escribe tu prompt:</h3>
    <div className="flex-grow">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}  // Corrected this line by adding a closing parenthesis
        placeholder="Escribe aquí lo que deseas..."
        className="w-full h-40 p-4 text-sm text-gray-300 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500 resize-none"
      />
    </div>
    {loading && (
      <Progress
        value={progress || 0}  // Use the actual progress if available, or default to 0
        color="primary"  // Color of the progress bar
        className="w-full mt-2"  // Full width and margin top for spacing
      />
    )}
    <button
      onClick={handleGenerateImage}
      disabled={loading}
      className={`mt-4 w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${loading ? "cursor-not-allowed" : "cursor-pointer"}`}
    >
      {loading ? 'Generando...' : 'Generar'}
    </button>
  </div>
);

export default TextSection;
