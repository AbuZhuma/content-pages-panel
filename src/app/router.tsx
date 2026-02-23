import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { CreatePage } from "../pages/CreatePage/CreatePage";
import { AdminLayout } from "../shared/layout/AdminLayout";
import EditPage from "../pages/EditPage/EditPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "create", element: <CreatePage /> },
      { path: "edit/:slug", element: <EditPage/> }
    ],
  },
]);
