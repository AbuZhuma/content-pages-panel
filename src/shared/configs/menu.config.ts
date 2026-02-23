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
    path: "/create",
    icon: PeopleIcon,
  }
]

export type MenuMapKeys = 
  | "/"
  | "/create"
  | "/edit"

export const menuMap: Record<MenuMapKeys, { label: string }> = {
  "/": { label: "Главное" },
  "/create": { label: "Создание страниц" },
  "/edit": {label: "Изменение страницы"}
};
