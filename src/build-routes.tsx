import { IRouteType } from "src/@types/route";
import { Route, Routes } from "react-router-dom";
import UsersPage from "./components/user-page";
import UserDetailinfo from "./components/user-page-details";
import HomePage from "./components/home-page";
import LoginPage from "./components/login-page/login";
import AddProduct from "./components/add-product-page/add-product";
import Update from "./components/update-page/update";
import RoomsPage from "./components/rooms-page";
import RoomsDetails from "./components/rooms-details-page";

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
    {
      link: "/login",
      element: <LoginPage />,
      id: 4,
    },
    {
      link: "/add",
      element: <AddProduct />,
      id: 5,
    },
    {
      link: "/update/:id",
      element: <Update />,
      id: 6,
    },
    {
      link: "/rooms",
      element: <RoomsPage />,
      id: 7,
    },
    {
      link: "/rooms/:id",
      element: <RoomsDetails />,
      id: 8,
    }
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
