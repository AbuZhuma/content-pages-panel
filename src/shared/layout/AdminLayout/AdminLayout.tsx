import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../SideBar";
import { Header } from "../Header";

const drawerWidth = 240;

export default function AdminLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar width={drawerWidth} />

      <Box sx={{ flexGrow: 1 }}>
        <Header />

        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
