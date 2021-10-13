import React, { useState } from "react";
import { Breadcrumb } from "matx";
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
import FournisseurFilter from "./FournisseurFilter";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ConfirmationDialog from "matx/components/ConfirmationDialog";
import {
  deleteFournisseur,
  getFornisseurList,
  getFournisseurByName,
} from "app/redux/actions/EcommerceActions";

const FournisseurList = () => {
  const history = useHistory();
  const [selectItem, setSelectItem] = useState();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const [idFournisseur, setIdFornisseur] = useState(null);
  const { fournisseurs } = useSelector((state) => {
    return {
      fournisseurs: state.ecommerce?.fournisseursByName,
    };
  });

  const handleDelete = (id) => {
    setOpen(true);
    setIdFornisseur(id);
  };
  const handleEdit = (row) => {
    history.push("/pages/product-details");
    setSelectItem(row);
  };
  const columns = [
    {
      name: "nom", // field name in the row object
      label: "Nom", // column title that will be shown in table
      options: {
        filter: true,
      },
    },
    {
      name: "email",
      label: "email",
    },
    {
      name: "phone",
      label: "Contact",
    },
    {
      name: "action",
      label: " ",
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex) => (
          <div className="flex items-center">
            <div className="flex-grow"></div>
            <IconButton onClick={() => handleEdit(fournisseurs[dataIndex])}>
              <Icon>edit</Icon>
            </IconButton>
            <IconButton
              onClick={() => handleDelete(fournisseurs[dataIndex]?.id)}
            >
              <Icon>delete</Icon>
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
            { name: "Espace Fournisseur" },
          ]}
        />
      </div>
      <FournisseurFilter />
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
                      history.push("/pages/new-fournisseur");
                    }}
                  >
                    Nouveau Fournisseur
                  </Button>
                </Grid>
              </Grid>
            }
            data={fournisseurs}
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
          await dispatch(deleteFournisseur(idFournisseur));
          await dispatch(getFournisseurByName());
          setOpen(false);
        }}
        onConfirmDialogClose={() => {
          setOpen(false);
          setIdFornisseur(null);
        }}
        text={"Etes vous sûrs ?"}
        ok={"oui"}
      />
    </div>
  );
};

export default FournisseurList;
