import Image from "next/image";
import styles from "./navbar.module.css"
import Link from "next/link";

export default function Navbar(){
  return(
    <nav className={styles.nav}>
      <Link href="/">
        <Image width={250} height={80}
          src="/Pokedex_logo.svg" alt="Pokédex Logo" />
      </Link>
    </nav>
  );
}