import React from "react";
import { Redirect } from "react-router-dom";


import crudRoute from "./views/CRUD/CrudRoutes";
import pageLayoutRoutes from "./views/page-layouts/PageLayoutRoutees";
import ListRoute from "./views/list/ListRoute";

import scrumBoardRoutes from "./views/scrum-board/ScrumBoardRoutes";
import pagesRoutes from "./views/pages/pagesRoutes";
import dataTableRoutes from "./views/data-table/dataTableRoutes";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/" />,
  },
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />,
  },
];

const routes = [
  ...crudRoute,
  ...scrumBoardRoutes,
  ...pageLayoutRoutes,
  ...ListRoute,
  ...pagesRoutes,
  ...dataTableRoutes,
  ...redirectRoute,
  ...errorRoute,
];

export default routes;
