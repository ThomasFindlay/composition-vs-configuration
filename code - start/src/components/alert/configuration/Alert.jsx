import clsx from "clsx";
import Success from "@/assets/success.svg";
import Danger from "@/assets/danger.svg";
import Warning from "@/assets/warning.svg";
import Info from "@/assets/info.svg";
import style from "@/components/alert/alert.module.scss";

const Icons = {
  success: Success,
  danger: Danger,
  warning: Warning,
  info: Info,
};

const Alert = props => {
  const {
    text,
    children,
    header,
    variant,
    icon,
    iconPosition = "left",
  } = props;

  const Icon = Icons[icon];

  return (
    <div
      className={clsx(
        style.alert,
        style[variant],
        iconPosition === "right" && "flex flex-row-reverse justify-between pr-5"
      )}
    >
      {Icon ? (
        <div className={clsx(style.alertIconBox)}>
          <img
            src={Icon}
            className={clsx(style.alertIcon)}
            alt={`${variant} alert icon`}
          />
        </div>
      ) : null}
      <div className={clsx(style.alertContent)}>
        {header ? (
          <div className={clsx(style.alertHeader, style[variant])}>
            {header}
          </div>
        ) : null}
        <div className={clsx(style.alertBody)}>{text || children}</div>
      </div>
    </div>
  );
};

export default Alert;
