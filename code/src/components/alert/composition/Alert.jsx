import clsx from "clsx";
import VariantContextProvider from "./context/VariantContextProvider";
import style from "../alert.module.scss";
export * from "./components";

const Alert = props => {
  const { variant, children, className, ...alertProps } = props;
  return (
    <VariantContextProvider variant={variant}>
      <div
        className={clsx(style.alert, style[variant], className)}
        {...alertProps}
      >
        {children}
      </div>
    </VariantContextProvider>
  );
};

Alert.Success = props => {
  return <Alert variant="success" {...props} />;
};
Alert.Danger = props => {
  return <Alert variant="danger" {...props} />;
};
Alert.Warning = props => {
  return <Alert variant="warning" {...props} />;
};
Alert.Info = props => {
  return <Alert variant="info" {...props} />;
};

export default Alert;
