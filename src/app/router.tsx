import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../shared/layout/AdminLayout/AdminLayout";
import { Dashboard } from "@mui/icons-material";
import CreatePage from "../pages/CreatePage/CreatePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "users", element: <CreatePage /> },
    ],
  },
]);
