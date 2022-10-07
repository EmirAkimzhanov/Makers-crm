import { lazy } from "react";
import { IRouteType } from "src/@types/route";
import { Route, Routes } from "react-router-dom";
const UsersPage = lazy(() => import("./components/user-page"));
const UserDetailinfo = lazy(() => import("./components/user-page-details"));
const HomePage = lazy(() => import("./components/home-page"));

const BuildRoutes = () => {
  const routes: IRouteType[] = [
    {
      link: "/",
      element: HomePage,
      id: 1,
    },
    {
      link: "/users",
      element: UsersPage,
      id: 2,
    },
    {
      link: "/users/:id",
      element: UserDetailinfo,
      id: 3,
    },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.link} element={route.element} key={route.id} />
      ))}
    </Routes>
  );
};

export default BuildRoutes;
