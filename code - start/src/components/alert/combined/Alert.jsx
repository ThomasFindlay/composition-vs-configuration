import BaseAlert from "../composition/Alert";
import {
  AlertHeader,
  AlertBody,
  AlertContent,
  AlertIcon,
} from "../composition/components";

const Alert = props => {
  const { children, text, header, variant, icon, iconPosition } = props;
  return (
    <BaseAlert
      variant={variant}
      className={
        iconPosition === "right" ? "flex flex-row-reverse justify-between" : ""
      }
    >
      {icon ? (
        <AlertIcon
          icon={icon}
          className={iconPosition === "right" ? "ml-auto mr-5" : ""}
        />
      ) : null}
      <AlertContent>
        {header ? <AlertHeader>{header}</AlertHeader> : null}
        {text || children ? <AlertBody>{text || children}</AlertBody> : null}
      </AlertContent>
    </BaseAlert>
  );
};

export default Alert;
