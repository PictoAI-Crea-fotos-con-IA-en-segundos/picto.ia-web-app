import React from 'react';
import { BsStars } from "react-icons/bs";

interface Props {
  onInspirationClick: () => void;
  onCommunityClick: () => void;
}

const Footer: React.FC<Props> = ({ onInspirationClick, onCommunityClick }) => (
  <div className="flex justify-between items-center px-5 py-3 border-t border-gray-700">
    <button
    onClick={onInspirationClick}
    className="relative inline-flex items-center justify-center py-2 px-8 text-white text-base  rounded-full overflow-hidden bg-purple-600 transition-all duration-300 ease-in-out shadow-md hover:scale-105 hover:shadow-lg active:scale-95 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r from-purple-500 to-purple-700 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
  >
    <span className="bg-white p-1 rounded-full mr-2">
      <BsStars className="text-lg text-purple-600"/> {/* Color changed to match the button theme */}
    </span>
    Necesito inspiración
  </button>
    <a
      href="https://civitai.com/models?tag=buildings"
      target="_blank"
      className="relative inline-block py-2 px-8 text-white text-base  rounded-full overflow-hidden bg-purple-600 transition-all duration-300 ease-in-out shadow-md hover:scale-105 hover:shadow-lg active:scale-95 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r from-purple-500 to-purple-700 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
      onClick={onCommunityClick}
    >
      Revisa la galería de nuestra comunidad
    </a>
  </div>
);

export default Footer;
