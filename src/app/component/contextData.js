"use client";

import { useContext, useState, useEffect, createContext } from "react";

const BrandContext = createContext();

export const BrandProvider = ({ children }) => {
  const [brand, setBrand] = useState("MBUDev");

  useEffect(() => {
    const currentURL = window.location.href;

    if (currentURL.includes("bizzdevs.com")) {
      setBrand("BizzDev");
    } else if (currentURL.includes("mbudevs.com")) {
      setBrand("MBUDev");
    } else {
      setBrand("MBUDev");
    }
  }, []);

  return (
    <BrandContext.Provider value={{ brand }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => useContext(BrandContext);
