import { createContext, useContext } from "react";
export const contextFactory = () => {
  const context = createContext(undefined);
  const useCtx = () => {
    const ctx = useContext(context);
    if (ctx === undefined) {
      throw new Error(
        "useContext must be used inside of a Provider with a value."
      );
    }
    return ctx;
  };
  return [useCtx, context];
};
