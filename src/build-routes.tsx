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
import RoomsEdit from "./components/rooms-edit-page";
import GroupsPage from "./components/groups-page";
import AddGroup from "./components/add-group-page";

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
    },
    {
      link: "/rooms/edit/:id/:day",
      element: <RoomsEdit />,
      id: 9,
    },
    {
      link: "/groups",
      element: <GroupsPage />,
      id: 10,
    },
    {
      link: "/groups/add",
      element: <AddGroup />,
      id: 11,
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
