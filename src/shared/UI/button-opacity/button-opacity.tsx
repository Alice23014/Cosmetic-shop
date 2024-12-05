import { Link } from "react-router-dom";
import styles from "./button-opacity.module.scss";

import cn from "classnames";

interface ButtonOpacityProps {
  text: string;
  url: string;
  isUnderline?: boolean;
}
export const ButtonOpacity: React.FC<ButtonOpacityProps> = ({
  text,
  url,
  isUnderline,
}) => {
  return (
    <Link
      className={cn(
        isUnderline ? styles.buttonOpacityUnderline : styles.buttonOpacity
      )}
      to={`/${url}`}
    >
      {text}
    </Link>
  );
};
