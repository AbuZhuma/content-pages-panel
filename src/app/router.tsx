import { createBrowserRouter } from "react-router-dom";
import { MainPage } from "../pages/MainPage/MainPage";
import { CreatePage } from "../pages/CreatePage/CreatePage";
import { AdminLayout } from "../shared/layout/AdminLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { index: true, element: <MainPage /> },
      { path: "content-pages", element: <CreatePage /> },
    ],
  },
]);
