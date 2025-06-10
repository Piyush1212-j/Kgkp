// src/data/modernFacilitiesData.js

import { FaDumbbell, FaChild, FaTheaterMasks, FaGlassCheers } from "react-icons/fa";

import GymImage from "@/assets/images/proj1.jpg";
import KidsRoom from "@/assets/images/proj2.jpg";
import Theatre from "@/assets/images/proj3.jpg";
import Banquet from "@/assets/images/proj1.jpg";
import VideoThumbnail from "@/assets/images/proj1.jpg"; // Add a static thumbnail

const sliderData = [
  {
    image: GymImage,
    label: "GYMNASIUM",
    icon: FaDumbbell,
  },
  {
    image: KidsRoom,
    label: "KIDS ACTIVITY",
    icon: FaChild,
  },
  {
    image: Theatre,
    label: "MINI THEATRE",
    icon: FaTheaterMasks,
  },
  {
    image: Banquet,
    label: "BANQUET",
    icon: FaGlassCheers,
  },
];

const videoData = {
  thumbnail: VideoThumbnail,
  url: "https://www.w3schools.com/html/mov_bbb.mp4",
};

export { sliderData, videoData };
