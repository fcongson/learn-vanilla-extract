import { NextPage } from "next";
import React from "react";
import { Layout } from "../components/Layout";
import { title } from "../styles/home.css";

const Sprinkles: NextPage = () => (
  <Layout title="Learn Sprinkles" description="Learn Sprinkles">
    <h1 className={title}>Sprinkles</h1>
  </Layout>
);

export default Sprinkles;
