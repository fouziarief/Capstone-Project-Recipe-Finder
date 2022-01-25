import { AiFillHome } from "react-icons/ai";
import { FaSignOutAlt } from "react-icons/fa";
import { MdCreateNewFolder, MdRestaurantMenu } from "react-icons/md";

export const Data = [
  {
    title: "Home",
    path: "/",
    icon: (
      <AiFillHome
        style={{ marginRight: "15px", position: "absolute", left: "30px" }}
      />
    ),
    className: "Nav-text",
  },
  {
    title: "Add Recipe",
    path: "/AddRecipe",
    icon: (
      <MdCreateNewFolder
        style={{ marginRight: "15px", position: "absolute", left: "30px" }}
      />
    ),
    className: "Nav-text",
  },
  {
    title: "Cookbook",
    path: "/RecipeBook",
    icon: (
      <MdRestaurantMenu
        style={{ marginRight: "15px", position: "absolute", left: "30px" }}
      />
    ),
    className: "Nav-text",
  },
  // {
  //   title: "SignUp",
  //   path: "/SignUp",
  //   icon: (
  //     <FaSignOutAlt
  //       style={{ marginRight: "15px", position: "absolute", left: "30px" }}
  //     />
  //   ),
  //   className: "Nav-text",
  // },
];
