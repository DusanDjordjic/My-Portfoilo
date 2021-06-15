import Head from "next/head";
import Image from "next/image";
import classes from "../styles/Home.module.scss";
import LinkButton from "../components/Button/Button";
import BallonSVG from "../components/BallonSVG/Ballon";
import Bar from "../components/Bars/Bar";
import ProjectsContainer from "../components/Projects/Container";
import { projects } from "../data/projects";
export default function Home(props) {
  const { projects } = props;
  return (
    <div>
      <Head>
        <title>Dwave | Dusan Djordjic</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes.mainContainer}>
        <section className={`${classes.introSec} ${classes.section}`}>
          <div className={classes.content}>
            <h1>
              Welcome To <br /> My Personal Portoflio
            </h1>
            <p className={classes.darkerText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quod harum molestias ipsam deserunt officiis optio
              iusto voluptas? Suscipit, provident?
            </p>
            <LinkButton text={"Learn more"} link="https://www.google.com/" />
          </div>
          <div className={classes.introSecImg}>
            <BallonSVG />
          </div>
        </section>
        <section
          className={`${classes.projectsSec} ${classes.section}`}
          id="projects"
        >
          <div className={classes.secTitle}>
            <Bar />
            <h2>Projects</h2>
          </div>
          <div className={classes.projectsConteiner}>
            <ProjectsContainer projects={projects} />
          </div>
        </section>
      </main>
    </div>
  );
}
export const getStaticProps = () => {
  return {
    props: {
      projects: projects,
    },
  };
};
