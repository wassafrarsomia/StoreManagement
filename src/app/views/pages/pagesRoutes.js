import React from "react";

const pagesRoutes = [
  {
    path: "/pages/product-list",
    component: React.lazy(() => import("./products/ProductList")),
  },
  {
    path: "/pages/product-details",
    component: React.lazy(() => import("./products/ProductDetails")),
  },
  {
    path: "/pages/product-deplace",
    component: React.lazy(() => import("./products/ProductDeplace")),
  },
  {
    path: "/pages/fournisseur-list",
    component: React.lazy(() => import("./fournisseurs/FournisseurList")),
  },
  {
    path: "/pages/chantier-list",
    component: React.lazy(() => import("./chantier/ChantierList")),
  },
  {
    path: "/pages/new-chantier",
    component: React.lazy(() => import("./chantier/ChantierForm")),
  },
  {
    path: "/pages/new-product",
    component: React.lazy(() => import("./products/ProductForm")),
  },
  {
    path: "/pages/new-fournisseur",
    component: React.lazy(() => import("./fournisseurs/FournisseurForm")),
  },
];

export default pagesRoutes;
