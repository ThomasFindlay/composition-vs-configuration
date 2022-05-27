import clsx from "clsx";
import styles from "../../alert.module.scss";

const AlertContent = props => {
  const { className, children } = props;
  return <div className={clsx(styles.alertContent, className)}>{children}</div>;
};

export default AlertContent;
