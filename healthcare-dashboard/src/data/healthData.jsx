import {FaHeart, FaBone, FaLungs, FaTooth} from 'react-icons/fa';

export const anatomyData = [
  { label: "Healthy Heart", statusIcon: <FaHeart />, position: "topRight" },
  { label: "Healthy Leg", statusIcon: <FaBone />, position: "bottomLeft" },
];

export const healthCards = [
  { name: "Lungs", date: "26 Oct 2021", status: "red", icon: <FaLungs />, color: "#e63946" },
  { name: "Teeth", date: "26 Oct 2021", status: "green", icon: <FaTooth />, color: "#2a9d8f" },
  { name: "Bone", date: "26 Oct 2021", status: "critical", icon: <FaBone />, color: "#f4a261" }
];
