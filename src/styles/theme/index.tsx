import React, { createContext, Dispatch, useState } from "react";

type Props = {
  children: React.ReactNode;
};

interface ShapeContext {
  hasOverflow: boolean;
  setContext: Dispatch<React.SetStateAction<ShapeContext>>;
}

const initialContext: ShapeContext = {
  hasOverflow: false,
  setContext: (): void => {
    throw new Error("setContext function must be overridden");
  },
};

const ThemeContext = createContext<ShapeContext>(initialContext);

const ThemeProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [contextState, setContext] = useState<ShapeContext>(initialContext);

  return (
    <ThemeContext.Provider value={{ ...contextState, setContext }}>
      {children}
    </ThemeContext.Provider>
  );
};
export { ThemeContext, ThemeProvider };
