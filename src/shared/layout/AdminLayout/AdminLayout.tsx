import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../SideBar";
import { Header } from "../Header";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Checkers } from "../Header/Checker";

const drawerWidth = 240;

export const AdminLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar width={drawerWidth} />
      <Checkers />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Box sx={{ flexGrow: 1 }}>
        <Header />

        <Box sx={{ p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
