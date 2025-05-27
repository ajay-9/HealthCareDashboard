import NavBtn from "./Button/NavBtn";
import styles from "./SidebarSections.module.css"; 

function SidebarSections({ title, links }) {
  return (
    <div className={styles.sidebarSection}> 
      {title && <p className={styles.title}>{title}</p>}
      <ul className={styles.lists}>
        {links.map((link, idx) => (
          <li key={idx}>
            <NavBtn name={link.name} icon={link.icon} isActive={link.name === "Dashboard"} />

          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarSections;
