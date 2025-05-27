import styles from "./Header.module.css";
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <div className={styles.searchWrapper}>
          <FaSearch className={styles.searchIcon} />
          <input 
            type="text"
            className={styles.searchBar}
            placeholder="Search"
          />
        </div>
        <div className={styles.bellIcon}>
          <FaBell />
        </div>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.userIcon}>
          <FaUser />
        </div>
        <div className={styles.addBtn}>
          <FaPlus />
        </div>
      </div>
    </header>
  );
}
export default Header;
