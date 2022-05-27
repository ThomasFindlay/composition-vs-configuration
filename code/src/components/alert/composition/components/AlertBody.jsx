import clsx from "clsx";
import style from "../../alert.module.scss";
import { useVariantContext } from "../context/VariantContextProvider";

const AlertBody = props => {
  const { className, ...alertBodyProps } = props;
  const variant = useVariantContext();
  return (
    <div
      className={clsx(style.alertBody, style[variant], className)}
      {...alertBodyProps}
    >
      {props.children}
    </div>
  );
};
export default AlertBody;
