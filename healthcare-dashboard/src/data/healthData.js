import {FaHeart, FaBone} from 'react-icons/fa';

export const anatomyData = [
  { label: "Healthy Heart", statusIcon: <FaHeart />, position: "topRight" },
  { label: "Healthy Leg", statusIcon: <FaBone />, position: "bottomLeft" },
];

export const healthCards = [
  { name: "Lungs", date: "10 Oct 2021", status: "green" },
  { name: "Teeth", date: "10 Oct 2021", status: "red" },
  { name: "Bone", date: "10 Oct 2021", status: "critical" }, 
];
