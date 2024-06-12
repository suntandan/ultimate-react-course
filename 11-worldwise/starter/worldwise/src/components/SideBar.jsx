import { Outlet } from "react-router-dom";
import styles from "./SideBar.module.css";
import {footer, copyright} from "./Footer.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";

function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />

      <footer className={footer}>
        <p className={copyright}>&copy; Copyright {new Date().getFullYear()} by WorldWise Inc.</p>
      </footer>
    </div>

  )
}

export default SideBar
