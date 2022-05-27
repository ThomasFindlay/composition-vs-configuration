import clsx from "clsx";
import style from "../../alert.module.scss";
import { useVariantContext } from "../context/VariantContextProvider";

const AlertHeader = props => {
  const { children, className, ...alertHeaderProps } = props;
  const variant = useVariantContext();
  return (
    <div
      className={clsx(style.alertHeader, style[variant], className)}
      {...alertHeaderProps}
    >
      {children}
    </div>
  );
};
export default AlertHeader;
