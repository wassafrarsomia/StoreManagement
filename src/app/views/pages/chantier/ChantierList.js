import React from "react";
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

const ChantierList = () => {
  const history = useHistory();
  const columns = [
    {
      name: "nom", // field name in the row object
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
            <Link to="/pages/new-customer">
              <IconButton>
                <Icon>edit</Icon>
              </IconButton>
            </Link>
            <IconButton>
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
    </div>
  );
};

const chantierList = [
  {
    nom: "chantier ",
    chefChantier: "Chef A",
  },
  {
    nom: "chantier",
    chefChantier: "Chef A",
  },
];

export default ChantierList;
