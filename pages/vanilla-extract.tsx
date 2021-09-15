import fs from "fs";
import { NextPage } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { join } from "path";
import React from "react";
import { Layout } from "../components/Layout";
import { title } from "../styles/home.css";
import { mdxStyle } from "../styles/page.css";

const postsDirectory = join(process.cwd(), "content");

export async function getStaticProps() {
  const fullPath = join(postsDirectory, "vanilla-extract.md");
  const content = fs.readFileSync(fullPath, "utf8");
  const mdxSource = await serialize(content);
  return { props: { source: mdxSource } };
}

const VanillaExtract: NextPage<{ source: MDXRemoteSerializeResult }> = ({
  source,
}) => (
  <Layout>
    <h1 className={title}>Vanilla Extract</h1>
    <div className={mdxStyle}>
      <MDXRemote {...source} />
    </div>
  </Layout>
);
export default VanillaExtract;
