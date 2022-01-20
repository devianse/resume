import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import classes from "./Layout.module.css";

const Layout = () => {
  return (
    <section className={classes.section}>
      <LeftSection />
      <RightSection />
    </section>
  );
};

export default Layout;
