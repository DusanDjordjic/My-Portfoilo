import classes from "./TechSec.module.scss";
import { dateFromNow } from "../../middleware/dateFromNow";
const TechSec = ({ techs, type }) => {
  return (
    <article>
      <div
        className={`${classes.techs} ${
          type == "basic"
            ? classes.techsBasic
            : type == "advanced"
            ? classes.techsAdvanced
            : classes.techsLookingF
        } `}
      >
        <div className={classes.techHeader}>
          {type == "basic" ? (
            <h3>Basic knowledge of:</h3>
          ) : type == "advanced" ? (
            <h3>Advanced knowledge of:</h3>
          ) : (
            <h3>Looking Forward To Learn:</h3>
          )}
        </div>
        {techs.map((item, index) => {
          return (
            <div
              key={index}
              className={`${classes.techItem} ${
                type == "basic"
                  ? classes.techItemBasic
                  : type == "advanced"
                  ? classes.techItemAdvanced
                  : classes.techItemLookingF
              }`}
            >
              <h4>{item.name}</h4>
              <p>
                <span>
                  {dateFromNow(item.time) ? dateFromNow(item.time) : 0}
                </span>{" "}
                months
              </p>
            </div>
          );
        })}
      </div>
    </article>
  );
};
export default TechSec;
