import React from "react";
import { Navbar } from "./layout/navbar";
import { Body } from "./layout/body";
import { Card } from "./layout/card";
import { Footer } from "./layout/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Body />
      <Card />
      <Footer />
      <ToastContainer />
    </div>
  );
};
