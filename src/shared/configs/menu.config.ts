import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";

export const menu = [
  {
    label: "Главное",
    path: "/",  
    icon: DashboardIcon,
  },
  {
    label: "Создание страниц",
    path: "/content-pages",
    icon: PeopleIcon,
  }
]

export type MenuMapKeys = 
  | "/"
  | "/content-pages"

export const menuMap: Record<MenuMapKeys, { label: string }> = {
  "/": { label: "Главное" },
  "/content-pages": { label: "Создание страниц" },
};
