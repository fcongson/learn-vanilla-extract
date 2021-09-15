import type { NextPage } from "next";
import Link from "next/link";
import { Layout } from "../components/Layout";
import { card, content, grid, title, title_link } from "../styles/home.css";

const Home: NextPage = () => {
  return (
    <Layout>
      <h1 className={title}>
        Learning{" "}
        <a className={title_link} href="https://vanilla-extract.style/">
          Vanilla Extract!
        </a>
      </h1>

      <p className={content}>
        Zero-runtime Stylesheets in TypeScript. Use TypeScript as your
        preprocessor. Write type‑safe, locally scoped classes, variables and
        themes, then generate static CSS files at build time.
      </p>

      <div className={grid}>
        <Link href="/vanilla-extract">
          <a className={card}>
            <h2>Vanilla Extract Leranings &rarr;</h2>
            <p>Adding typesafe, locally scoped classes, variables and themes</p>
          </a>
        </Link>

        <Link href="/sprinkles">
          <a className={card}>
            <h2>Sprinkles Learnings &rarr;</h2>
            <p>Adding typesafe custom utility classes</p>
          </a>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
