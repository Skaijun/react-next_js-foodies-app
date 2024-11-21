"use client";

import Link from "next/link";

import classes from "./main-header.module.css";
import { usePathname } from "next/navigation";

export default function MainHeaderLink({ children, href }) {
  const path = usePathname();
  let cssClassNames = classes.link;
  if (path.startsWith(href)) {
    cssClassNames += " " + classes.active;
  }
  return (
    <Link href={href} className={cssClassNames}>
      {children}
    </Link>
  );
}
