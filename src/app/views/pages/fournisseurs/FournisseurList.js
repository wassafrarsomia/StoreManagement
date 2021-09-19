import React from "react";
import { Breadcrumb } from "matx";
import MUIDataTable from "mui-datatables";
import { Grid, Grow, Icon, IconButton, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import FournisseurFilter from "./FournisseurFilter";
import { useHistory } from "react-router";

const FournisseurList = () => {
  const history =useHistory()
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
      label: "email"
    },
    {
      name: "contact",
      label: "Contact"
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
            { name: "Espace Fournisseur" },
          ]}
        />
      </div>
      <FournisseurFilter/>
      <div className="overflow-auto">
      
        <div className="min-w-750">
     
          <MUIDataTable
            title={   <Grid container justify="space-between">
          
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={()=>{history.push("/pages/new-fournisseur")}}
                  >

                 Nouveau Fournisseur
                </Button>
              </Grid>
            </Grid>}
            data={fournisseurList}
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

const fournisseurList = [
  {
    nom: "tide",
    email: "tide@gmial.come",
    contact: "Soca",
  },
  {
    nom: "tide",
    email: "tide@gmial.come",
    contact: "Soca",
  },
  
];

export default FournisseurList;
