import { NextPage } from "next";
import React from "react";
import { Layout } from "../components/Layout";
import { title } from "../styles/home.css";

const VanillaExtract: NextPage = () => (
  <Layout>
    <h1 className={title}>Vanilla Extract</h1>
  </Layout>
);

export default VanillaExtract;
