import React, { useEffect, useState } from "react";
import { Breadcrumb, ConfirmationDialog } from "matx";
import MUIDataTable from "mui-datatables";
import {
  Grid,
  Grow,
  Icon,
  IconButton,
  TextField,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ProductFilter from "./ProductFilter";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduit,
  searchProducts,
} from "app/redux/actions/EcommerceActions";

const ProductList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [selectItem, setSelectItem] = useState();
  const [open, setOpen] = useState(false);
  const [idProduit, setIdProduit] = useState(0);

  const { products } = useSelector((state) => {
    return {
      products: state.ecommerce?.products,
    };
  });
  const [listOfPro, setListOfProd] = useState([]);
  console.log("llllll", products);
  useEffect(() => {
    setListOfProd(products);
  }, [products]);
  const handleConsult = (row) => {
    history.push("/pages/product-details", { row });
    setSelectItem(row);
  };
  const handleEdit = (row) => {
    history.push("/pages/product-details");
    setSelectItem(row);
  };
  const handleDelete = (id) => {
    setOpen(true);
    setIdProduit(id);
  };
  console.log("teet", products);
  const columns = [
    {
      name: "reference", // field name in the row object
      label: "Reference", // column title that will be shown in table
      options: {
        filter: true,
      },
    },
    {
      name: "username",
      label: "Name",
      options: {
        filter: true,
      },
    },
    {
      name: "fournisseur.fournisseur",
      label: "Fournisseur",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => (
          <span className="ellipsis">
            {products[dataIndex]?.fournisseur?.nom}
          </span>
        ),
      },
    },
    {
      name: "gamme.nom",
      label: "Gamme",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => (
          <span className="ellipsis">{products[dataIndex]?.gamme?.nom}</span>
        ),
      },
    },
    {
      name: "sousGamme.nom",
      label: "Sous Gamme",
      options: {
        filter: true,
        customBodyRenderLite: (dataIndex) => (
          <span className="ellipsis">
            {products[dataIndex]?.sousGamme?.nom}
          </span>
        ),
      },
    },
    {
      name: "action",
      label: " ",
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex) => (
          <div className="flex items-center">
            <div className="flex-grow"></div>
            <IconButton onClick={() => handleEdit(products[dataIndex])}>
              <Icon>edit</Icon>
            </IconButton>
            <IconButton onClick={() => handleDelete(products[dataIndex]?.id)}>
              <Icon>delete</Icon>
            </IconButton>
            <IconButton onClick={() => handleConsult(products[dataIndex])}>
              <Icon>arrow_right_alt</Icon>
            </IconButton>
          </div>
        ),
      },
    },
  ];

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Accueil", path: "/" },
            { name: "Espace Produit" },
          ]}
        />
      </div>
      <ProductFilter />
      <div className="overflow-auto">
        <div className="min-w-750">
          <MUIDataTable
            title={
              <Grid container justify="space-between">
                <Grid item xs={6}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      history.push("/pages/new-product");
                    }}
                  >
                    Nouveau Produit
                  </Button>
                </Grid>
              </Grid>
            }
            data={listOfPro}
            columns={columns}
            options={{
              //filterType: "textField",
              responsive: "standard",
              selectableRows: "none", // set checkbox for each row
              search: false, // set search option
              filter: false, // set data filter option
              download: false, // set download option
              print: false, // set print option
              // pagination: true, //set pagination option
              viewColumns: false, // set column option
              elevation: 0,
              rowsPerPageOptions: [10, 20, 40, 80, 100],
            }}
          />
        </div>
      </div>
      <ConfirmationDialog
        open={open}
        onYesClick={async () => {
          await dispatch(deleteProduit(idProduit));
          dispatch(searchProducts({}));

          setOpen(false);
        }}
        onConfirmDialogClose={() => {
          setOpen(false);
          setIdProduit(null);
        }}
        text={"Etes vous sûrs ?"}
        ok={"oui"}
      />
    </div>
  );
};

export default ProductList;
