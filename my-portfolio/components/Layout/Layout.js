import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import classes from "./Layout.module.scss";
const Layout = ({ children }) => {
  return (
    <div className={classes.container}>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
