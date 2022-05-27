import clsx from "clsx";
import Success from "@/assets/success.svg";
import Danger from "@/assets/danger.svg";
import Warning from "@/assets/warning.svg";
import Info from "@/assets/info.svg";
import style from "@/components/alert/alert.module.scss";
import { useVariantContext } from "../context/VariantContextProvider";

const Icons = {
  success: Success,
  danger: Danger,
  warning: Warning,
  info: Info,
};

const AlertIcon = props => {
  const { className, containerClass } = props;
  const variant = useVariantContext();
  const Icon = Icons[variant];
  return Icon ? (
    <div className={clsx(style.alertIconBox, containerClass)}>
      <img
        src={Icon}
        alt={`Alert ${variant} icon`}
        className={clsx(style.alertIcon, style[variant], className)}
      />
    </div>
  ) : null;
};
export default AlertIcon;
