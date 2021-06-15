import classes from "./Footer.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
const Footer = () => {
  return (
    <section className={classes.footer}>
      <div className={classes.footerContact}>
        <div className={classes.footerContactItem}>
          <h4>Call</h4>
          <p>+381641315524</p>
        </div>
        <div className={classes.footerContactItem}>
          <h4>Email</h4>
          <p>dukidjordjic@gmail.com</p>
        </div>
      </div>
      <div className={classes.footerLinks}>
        <ul>
          <li>
            <Link href="https://github.com/DusanDjordjic">
              <a>
                <FaGithub />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/du%C5%A1an-%C4%91or%C4%91i%C4%87-689110205/">
              <a>
                <FaLinkedin />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.instagram.com/dusan_spl/">
              <a>
                <RiInstagramFill />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
