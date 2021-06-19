import classes from "./SingleProduct.module.scss";
import Link from "next/link";
import Image from "next/image";
const SingleProduct = ({ name, collection, price, image, link }) => {
  return (
    <div className={classes.item}>
      <div className={classes.itemImg}>
        <Image src={image} width="300" height="300" layout="responsive" />
        <div className={classes.itemOverlay}>
          <Link href={link}>Shop Now</Link>
        </div>
      </div>
      <div className={classes.footer}>
        <div>
          <h4>{name}</h4>
          <h4>{collection}</h4>
        </div>
        <div>
          <h4>${price}</h4>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
