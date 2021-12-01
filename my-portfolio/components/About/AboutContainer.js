import classes from "./AboutContainer.module.scss";
import Image from "next/image";
import Link from "next/link";
import me from "../../public/me.jpg";
import { SiInstagram } from "react-icons/si";
import { FiTwitter, FiLinkedin } from "react-icons/fi";

const AboutContainer = () => {
  return (
    <div className={classes.aboutContainer}>
      <article className={classes.textArticle}>
        <p className={classes.firstText}>
          My name is Dušan Đorđić, I am from Serbia, Sremska Mitrovica to be
          exact. My passion is <span>programming, especially for the web.</span>{" "}
          Looking forward to making some amazing web applications for a wide
          range of clients. If you haven`t seen my projects, go take a look.
        </p>
        <p>
          My dream is to meet people with the same passion as mine, to work with
          them, and to make the world a better place. If you are like me, please
          contact me and let us make some apps that will help other people.
        </p>
      </article>
      <article className={classes.sidebar}>
        <Image src={me} alt="Picture of myself" />
        <p>dukidjordjic@gmail.com</p>
        <ul>
          <li>
            <Link href="https://www.linkedin.com/in/du%C5%A1an-%C4%91or%C4%91i%C4%87-689110205/">
              <a>
                <FiLinkedin />
              </a>
            </Link>
          </li>

          <li>
            <Link href="https://www.instagram.com/dusan_spl/">
              <a>
                <SiInstagram />
              </a>
            </Link>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default AboutContainer;
