import { IRouteType } from "src/@types/route";
import { Route, Routes } from "react-router-dom";
import UsersPage from "./components/user-page";
import UserDetailinfo from "./components/user-page-details";
import HomePage from "./components/home-page";

const BuildRoutes = () => {
  const routes: IRouteType[] = [
    {
      link: "/",
      element: <HomePage />,
      id: 1,
    },
    {
      link: "/users",
      element: <UsersPage />,
      id: 2,
    },
    {
      link: "/users/:id",
      element: <UserDetailinfo />,
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