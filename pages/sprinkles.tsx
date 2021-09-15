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
  const fullPath = join(postsDirectory, "sprinkles.md");
  const content = fs.readFileSync(fullPath, "utf8");
  const mdxSource = await serialize(content);
  return { props: { source: mdxSource } };
}

const Sprinkles: NextPage<{ source: MDXRemoteSerializeResult }> = ({
  source,
}) => (
  <Layout title="Learn Sprinkles" description="Learn Sprinkles">
    <h1 className={title}>Sprinkles</h1>
    <div className={mdxStyle}>
      <MDXRemote {...source} />
    </div>{" "}
  </Layout>
);

export default Sprinkles;
