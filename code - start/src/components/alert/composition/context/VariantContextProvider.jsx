import { contextFactory } from "@/context/contextFactory";

const [useVariantContext, VariantContext] = contextFactory();

export { useVariantContext };

const VariantContextProvider = props => {
  return (
    <VariantContext.Provider value={props.variant || ""}>
      {props.children}
    </VariantContext.Provider>
  );
};

export default VariantContextProvider;
