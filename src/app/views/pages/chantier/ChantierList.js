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
import ChantierFilter from "./ChantierFilter";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteChantier,
  searchChantier,
} from "app/redux/actions/EcommerceActions";
import ConfirmationDialog from "matx/components/ConfirmationDialog";

const ChantierList = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [idChantier, setIdChantier] = useState(null);
  const [selectItem, setSelectItem] = useState();

  const { chantierList } = useSelector((state) => {
    return {
      chantierList: state.ecommerce?.chantierList,
    };
  });
  const handleDelete = (id) => {
    setOpen(true);
    setIdChantier(id);
  };
  const handleEdit = (row) => {
    history.push("/pages/new-chantier", { row });
    setSelectItem(row);
  };
  const columns = [
    {
      name: "name", // field name in the row object
      label: "Nom", // column title that will be shown in table
      options: {
        filter: true,
      },
    },
    {
      name: "chefChantier",
      label: "Chef chantier",
    },

    {
      name: "action",
      label: " ",
      options: {
        filter: false,
        customBodyRenderLite: (dataIndex) => (
          <div className="flex items-center">
            <div className="flex-grow"></div>
            <IconButton>
              <Icon>edit</Icon>
            </IconButton>
            <IconButton
              onClick={() => handleDelete(chantierList[dataIndex]?.id)}
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
            { name: "Espace Chantier" },
          ]}
        />
      </div>
      <ChantierFilter />
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
                      history.push("/pages/new-chantier");
                    }}
                  >
                    Nouveau Chantier
                  </Button>
                </Grid>
              </Grid>
            }
            data={chantierList}
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
          await dispatch(deleteChantier(idChantier));
          dispatch(searchChantier({}));
          setOpen(false);
        }}
        onConfirmDialogClose={() => {
          setOpen(false);
          setIdChantier(null);
        }}
        text={"Etes vous sûrs ?"}
        ok={"oui"}
      />
    </div>
  );
};

export default ChantierList;
