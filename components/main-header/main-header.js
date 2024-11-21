import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import MainHeaderLink from "./main-header-link";

export default function MainHeader({ children }) {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food" priority />
          SDM Nextjs Food App 2024
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <MainHeaderLink href="/meals">Meals</MainHeaderLink>
            </li>
            <li>
              <MainHeaderLink href="/community">Food Community</MainHeaderLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
