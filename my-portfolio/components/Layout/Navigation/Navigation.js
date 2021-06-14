import classes from "./Navigation.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";
const Navigation = () => {
  return (
    <section className={classes.navigation}>
      <div className={classes.logo}>
        <Image src="/logo.png" height="30" width="30" />
        <p>Portfolio</p>
      </div>
      <ul className={classes.linksContainer}>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
        <li>
          <Link href="/#tech">Technologies</Link>
        </li>
        <li>
          <Link href="/#about">About</Link>
        </li>
        <li>
          <Link href="/#dwave">Dwave</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href="https://github.com/DusanDjordjic">
            <FaGithub />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/du%C5%A1an-%C4%91or%C4%91i%C4%87-689110205/">
            <FaLinkedin />
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/dusan_spl/">
            <RiInstagramFill />
          </Link>
        </li>
      </ul>
    </section>
  );
};
export default Navigation;
