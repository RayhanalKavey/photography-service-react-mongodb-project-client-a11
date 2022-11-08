import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Header from "../../Pages/Shared/Header/Header";

const Main = () => {
  return (
    <div>
      <header className="bg-slate-400">
        <Header></Header>
      </header>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
