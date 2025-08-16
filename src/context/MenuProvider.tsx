import React, { createContext, useState } from "react";

const initial: { open: boolean; setOpen: (v: boolean) => void } = {
  open: false,
  setOpen: (v: boolean) => v,
};
export const MobileContext = createContext(initial);

const MobileProvider = ({children}:{children:React.ReactNode}) => {
  const [open, setOpen] = useState(false);

  return (
    <MobileContext.Provider value={{ open, setOpen }}>{children}</MobileContext.Provider>
  );
};


export default MobileProvider