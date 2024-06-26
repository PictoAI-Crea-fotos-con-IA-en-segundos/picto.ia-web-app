import React from 'react';

interface Props {
  prompt: string;
  setPrompt: (prompt: string) => void;
  handleGenerateImage: () => void;
  loading: boolean;
}

const TextSection: React.FC<Props> = ({ prompt, setPrompt, handleGenerateImage, loading }) => (
  <div className="flex flex-1 flex-col p-5 bg-gray-800 rounded-lg shadow">
    <h3 className="text-lg font-semibold text-white mb-4">Escribe tu prompt:</h3>
    <div className="flex-grow">
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Escribe aquí lo que deseas..."
        className="w-full h-40 p-4 text-sm text-gray-300 bg-gray-900 rounded-lg border border-gray-700 focus:outline-none focus:border-purple-500 resize-none"
      />
    </div>
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
