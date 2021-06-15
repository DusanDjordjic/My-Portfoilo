import classes from "./Container.module.scss";
import Project from "./Project";
const Container = ({ projects }) => {
  return (
    <div className={classes.container}>
      {projects.map((project) => {
        return <Project key={project._id} {...project} />;
      })}
    </div>
  );
};

export default Container;
