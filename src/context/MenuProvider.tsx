import React, { createContext, useState } from "react";
import type { file } from "../type";

interface Projet {
  title1: string;
  title2: string;
  img: string[];
  desc1: string;
  path?: file;
  location: string;
  duration: string;
}

const initial: {
  open: boolean;
  setOpen: (v: boolean) => void;
  projet: Projet;
  setProjet: (v: Projet) => void;
} = {
  open: false,
  setOpen: (v: boolean) => v,
  projet: {
    title1: "",
    title2: "",
    img: [],
    desc1: "",
    location: "",
    duration: "",
  },
  setProjet: (v) => v,
};
export const MobileContext = createContext(initial);

const MobileProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const [projet, setProjet] = useState<Projet>(initial.projet);

  return (
    <MobileContext.Provider value={{ open, setOpen, projet, setProjet }}>
      {children}
    </MobileContext.Provider>
  );
};

export default MobileProvider;
