import classes from "../../styles/MyBrand.module.scss";
import Image from "next/image";
import Link from "next/link";
import ProductsContainer from "../../components/Brand/Products/ProductsContainer";
import LinkButton from "../../components/Button/Button";
import src from "../../public/wavebg.png";
const MyBrand = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.introContainer}>
        <div className={classes.introText}>
          <h1>New Summer Drop</h1>
          <p>Dwave is not just a brand, it`s philosophy</p>
          <div className={classes.btnContainer}>
            <LinkButton text="Shop Now" link="/mybrand" />
          </div>
        </div>
      </div>
      <ProductsContainer />
    </div>
  );
};

export default MyBrand;
