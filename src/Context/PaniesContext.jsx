import { createContext } from "react";
import { useState } from "react";

export const Panies = createContext();
export default function PaniesProvider({ children }) {
  const [ProductsPanies, setProductsPanies] = useState([]);
  return (
    <Panies.Provider setting={{ ProductsPanies, setProductsPanies }}>
      {children}
    </Panies.Provider>
  );
}
