import React, { createContext, useContext, useState } from 'react';

const FontContext = createContext({
  font: 'Quicksand-Regular',
  setFont: (font: string) => {},
});

export const FontProvider = ({ children }:any) => {
  const [font, setFont] = useState('Quicksand-Regular');
  return (
    <FontContext.Provider value={{ font, setFont }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => useContext(FontContext); 