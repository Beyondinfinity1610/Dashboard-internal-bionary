import React from 'react';

function Card({ children, className = '', hover = true }) {
  return (
    <div className={`bg-[#1A2332] border border-[#2A3441] rounded-xl p-6 ${
      hover ? 'hover:bg-[#1E2A3A] transition-all duration-200' : ''
    } ${className}`}>
      {children}
    </div>
  );
}

export default Card;