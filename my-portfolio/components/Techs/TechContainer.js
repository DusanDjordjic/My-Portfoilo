import classes from "./TechContainer.module.scss";
import TechSec from "./TechSec";
const TechContainer = ({ data }) => {
  return (
    <div className={classes.techContainer}>
      {data.map((item, index) => {
        return <TechSec key={index} techs={item.techs} type={item.type} />;
      })}
    </div>
  );
};

export default TechContainer;
