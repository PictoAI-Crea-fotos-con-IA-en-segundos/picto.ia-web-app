import React from 'react';

interface Props {
  onUploadClick: () => void;
}

const Header: React.FC<Props> = ({ onUploadClick }) => (
  <div className="flex justify-between items-center p-5 border-b border-gray-800">
    <h2 className="text-2xl font-bold text-white m-0">Arrastra 8 fotos tuyas y deja que la magia ocurra</h2>
    <button className="flex items-center px-5 py-2.5 border border-purple-500 text-purple-500 font-bold rounded cursor-pointer" onClick={onUploadClick}>
      <span className="text-2xl mr-2">+</span> Importar fotos
    </button>
  </div>
);

export default Header;
