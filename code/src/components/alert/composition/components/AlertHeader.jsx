import clsx from "clsx";
import style from "../../alert.module.scss";
import { useVariantContext } from "../context/VariantContextProvider";

const AlertHeading = props => {
  const { children, className } = props;
  const variant = useVariantContext();
  return (
    <div className={clsx(style.alertHeader, style[variant], className)}>
      {children}
    </div>
  );
};
export default AlertHeading;
