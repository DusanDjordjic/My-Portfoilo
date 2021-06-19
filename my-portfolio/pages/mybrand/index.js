import classes from "../../styles/MyBrand.module.scss";
const MyBrand = () => {
  return (
    <div className={classes.mainContainer}>
      <section className={`${classes.introSec}${classes.section}`}>
        <h1>Dwave</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique et
          a nulla deserunt. Maiores fugit doloremque praesentium adipisci ad
          nobis, rem iste voluptate, libero maxime modi aspernatur? Commodi,
          odio eos?
        </p>
      </section>
      <section className={classes.section}>
        <h2>Lorem, ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nostrum
          laboriosam alias ipsam consectetur tempore inventore voluptates
          expedita. Officiis iste nostrum, reprehenderit unde laudantium
          consequuntur laboriosam ipsam ullam perferendis similique.
        </p>
      </section>
      <section className={classes.section}>
        <h2>Lorem, ipsum.</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nostrum
          laboriosam alias ipsam consectetur tempore inventore voluptates
          expedita. Officiis iste nostrum, reprehenderit unde laudantium
          consequuntur laboriosam ipsam ullam perferendis similique.
        </p>
      </section>
    </div>
  );
};

export default MyBrand;
