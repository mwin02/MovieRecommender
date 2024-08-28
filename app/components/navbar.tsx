"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import SearchBar from "@/app/components/SearchBar";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const pathName = usePathname();
  const links = [
    { link: "/", name: "Home" },
    { link: "/movies/popular", name: "Popular Movies" },
    { link: "/movies/random", name: "Random Movie" },
  ];
  const NavLinkList = links.map((link, index) => {
    return (
      <li key={index} className={styles.navlistItem}>
        <Link
          className={`${styles.link} ${
            pathName === link.link ? styles.active : ""
          }`}
          href={link.link}
        >
          {link.name}
        </Link>
      </li>
    );
  });
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <p>MovieFinder</p>
      </div>
      <ul className={styles.navlist}>{NavLinkList}</ul>
      <SearchBar styles={styles} />
    </nav>
  );
}
