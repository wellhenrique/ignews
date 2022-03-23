import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="logo ig news" />

        <nav>
          <a className={styles.active}>Home</a>
          <a color="#04d361">Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
