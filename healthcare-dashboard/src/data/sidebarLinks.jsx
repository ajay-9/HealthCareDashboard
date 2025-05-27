import {
  FaThLarge,
  FaHistory,
  FaCalendarAlt,
  FaClipboardList,
  FaChartBar,
  FaComments,
  FaPhoneAlt,
  FaCog,
} from "react-icons/fa";

export const sidebarLinks = [
  {
    title: "General",
    links: [
      { name: "Dashboard", icon: <FaThLarge /> },
      { name: "History", icon: <FaHistory /> },
      { name: "Calendar", icon: <FaCalendarAlt /> },
      { name: "Appointments", icon: <FaClipboardList /> },
      { name: "Statistics", icon: <FaChartBar /> },
    ],
  },
  {
    title: "Tools",
    links: [
      { name: "Chat", icon: <FaComments /> },
      { name: "Support", icon: <FaPhoneAlt /> },
    ],
  },
  {
    title: null,
    links: [{ name: "Setting", icon: <FaCog /> }],
  },
];
