import { Business } from "@mui/icons-material";
import { HandHoldingHeartIcon } from "../assets/handHoldingHeartIcon";

export const members = [
  {
    title: "Business",
    content:
      "For businesses who want \n" +
      "to use their resources \n" +
      "for greater social good",
    icon: <Business sx={{ fontSize: 50 }} />,
    linkTo: "/corporate",
  },
  {
    title: "Non-profits",
    content:
      "For nonprofits who are seeking \n" +
      "to carry out their frontline work \n",
    icon: <HandHoldingHeartIcon sx={{ fontSize: 50 }} />,
    linkTo: "/nonprofit",
  },
];
