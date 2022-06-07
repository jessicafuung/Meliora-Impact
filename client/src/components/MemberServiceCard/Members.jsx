import { Business } from "@mui/icons-material";
import { HandHoldingHeartIcon } from "../assets/handHoldingHeartIcon";

export const members = [
  {
    title: "For Businesses",
    content:
      "who want \n" + "to use their resources \n" + "for greater social good",
    icon: <Business sx={{ fontSize: 50 }} />,
    linkTo: "/corporate",
  },
  {
    title: "For Non-profits",
    content: "who are seeking \n" + "to carry out their frontline work \n",
    icon: <HandHoldingHeartIcon sx={{ fontSize: 50 }} />,
    linkTo: "/nonprofit",
  },
];
