import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import classes from "./Layout.module.scss";
const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
