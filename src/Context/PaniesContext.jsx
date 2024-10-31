import { createContext } from "react";
import { useState } from "react";

export const PaniesContext = createContext();
export default function PaniesProvider({ children }) {
  const [ProductsPanies, setProductsPanies] = useState([]);
  return (
    <PaniesContext.Provider value={{ ProductsPanies, setProductsPanies }}>
      {children}
    </PaniesContext.Provider>
  );
}
