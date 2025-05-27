import styles from "./Sidebar.module.css";
import { sidebarLinks } from "../data/sidebarLinks";
import SidebarSections from "./SidebarSections";
import NavBtn from "./Button/NavBtn";

function Sidebar() {
const settingSection = sidebarLinks.find( (title) =>
  title.title === null
);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarInner}>
        <h2 className={styles.logo}>
          <span className={styles.logoHighlight}>Health</span>
          <span className={styles.logoBase}>care.</span>
        </h2>
        {sidebarLinks.map((section1, index) =>
          !section1.title ? null : (
            <SidebarSections
              key={index}
              title={section1.title}
              links={section1.links}
            />
          )
        )}

        <div className={styles.bottom}>
          {settingSection && settingSection.links.map((link, idx) => (
            <NavBtn key={idx} name={link.name} icon={link.icon} />
          ))}
        </div>
      </div>
    </aside>
  );
}
export default Sidebar;
