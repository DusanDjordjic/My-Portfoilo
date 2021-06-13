import classes from "./Button.module.scss";
import Link from "next/link";
const LinkButton = ({ text, link }) => {
  return (
    <button className={classes.button}>
      <Link href={link}>{text}</Link>
    </button>
  );
};

export default LinkButton;
