import classes from "./Project.module.scss";
import { FaGithub } from "react-icons/fa";
import WhiteBar from "../Bars/WhiteBar";
import Badge from "../Badge/Badge";
import Link from "next/link";
import Image from "next/image";
const Project = (props) => {
  const { title, imageSrc, github, tech, description } = props;
  return (
    <div className={classes.project}>
      <Badge type={"finished"} />
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
        <Link href={github}>
          <a>
            <FaGithub />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Project;
