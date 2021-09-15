import Image from "next/image";
import { footer, footer_link, logo } from "./footer.css";

export const Footer = () => (
  <footer className={footer}>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
      className={footer_link}
    >
      <span>Powered by</span>
      <span className={logo}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
    <a
      href="https://vanilla-extract.style/"
      target="_blank"
      rel="noopener noreferrer"
      className={footer_link}
    >
      <span>Styled with</span>
      <span className={logo}>
        <Image
          src="/vanilla-extract.svg"
          alt="Vanilla Extract Logo"
          width={24}
          height={24}
        />
      </span>
    </a>
  </footer>
);
