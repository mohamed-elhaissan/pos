import { createContext, useState } from 'react';

const PaniesContext = createContext();

export const PaniesProvider = ({ children }) => {
  const [ProductsPanies, setProductsPanies] = useState([]);

  return (
      <PaniesContext.Provider value={{ ProductsPanies, setProductsPanies }}>
        {children}
      </PaniesContext.Provider>
  );
};

export default PaniesContext;