import styles from "./NavBtn.module.css";
import clsx from "clsx";

function NavBtn({ name, icon, isActive }) {
  return (
    <div>
      <button className={clsx(styles.navBtn, isActive && styles.active)}>
        <span className={styles.navBtnIcon}>{icon}</span>
        <span>{name}</span>
      </button>
    </div>
  );
}

export default NavBtn;
