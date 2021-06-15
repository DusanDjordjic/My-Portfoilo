import classes from "./Project.module.scss";
import { FaGithub, FaGlobe } from "react-icons/fa";
import WhiteBar from "../Bars/WhiteBar";

import Link from "next/link";
import Image from "next/image";
const Project = (props) => {
  const { title, imageSrc, github, website, tech, description, ribbon } = props;
  return (
    <div
      className={`${classes.project} ${
        ribbon == "ribbonFinished"
          ? classes.ribbonFinished
          : classes.ribbonInprogress
      }`}
    >
      <div className={classes.imgContainer}>
        <Image src={imageSrc} layout="responsive" height={430} width={602} />
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <WhiteBar />
        <p>{description}</p>
      </div>
      <div className={classes.tech}>
        <h4>Tech used</h4>
        <ul>
          {tech.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </div>
      <div className={classes.footer}>
        {github === "" ? (
          <Link href="#">
            <a className={classes.noLink}>
              <FaGithub />
            </a>
          </Link>
        ) : (
          <Link href={github}>
            <a>
              <FaGithub />
            </a>
          </Link>
        )}
        {website === "" ? (
          <Link href="#">
            <a className={classes.noLink}>
              <FaGlobe />
            </a>
          </Link>
        ) : (
          <Link href={website}>
            <a>
              <FaGlobe />
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Project;
