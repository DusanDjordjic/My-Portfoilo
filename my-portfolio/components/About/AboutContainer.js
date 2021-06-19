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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
          consequatur harum <span> veritatis nisi</span> possimus laboriosam
          vitae, autem unde neque, id necessitatibus. Obcaecati provident
          accusamus eius eaque omnis quae vel exercitationem pariatur.{" "}
          <span>Nam doloremque</span> necessitatibus tenetur, earum rerum
          pariatur dolorum accusantium?
        </p>
        <p className={classes.quote}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
          consequatur harum veritatis nisi possimus laboriosam vitae.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea
          consequatur harum veritatis nisi possimus laboriosam vitae, autem unde
          neque, id necessitatibus. Obcaecati provident accusamus eius eaque
          omnis quae vel exercitationem pariatur. Nam doloremque necessitatibus
          tenetur, earum rerum pariatur dolorum accusantium?
        </p>
      </article>
      <article className={classes.sidebar}>
        <Image src={me} alt="Picture of myself" />
        <p>dukidjordjic@gmail.com</p>
        <ul>
          <li>
            <Link href="/">
              <a>
                <FiLinkedin />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <FiTwitter />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
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
