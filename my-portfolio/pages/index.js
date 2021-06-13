import Head from "next/head";
import Image from "next/image";
import classes from "../styles/Home.module.scss";
import LinkButton from "../components/Button/Button";
import BallonSVG from '../components/BallonSVG/Ballon'
export default function Home() {
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
            <h2>
              Welcome To <br /> My Personal Portoflio
            </h2>
            <p className={classes.darkerText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur quod harum molestias ipsam deserunt officiis optio
              iusto voluptas? Suscipit, provident?
            </p>
            <LinkButton text={"Learn more"} link="https://www.google.com/" />
          </div>
          <div className={classes.introSecImg}>
            <BallonSVG/>
          </div>
        </section>
      </main>
    </div>
  );
}
