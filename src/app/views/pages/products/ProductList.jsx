import React from "react";
import { Breadcrumb } from "matx";
import MUIDataTable from "mui-datatables";
import { Grid, Grow, Icon, IconButton, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ProductFilter from "./ProductFilter";
import { useHistory } from "react-router";

const ProductList = () => {
  const history =useHistory()
  const columns = [
    {
      name: "ref", // field name in the row object
      label: "Reference", // column title that will be shown in table
      options: {
        filter: true,
      },
    },
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
       
      },
    },
    {
      name: "four",
      label: "Fournisseur",
      options: {
        filter: true,
      }
    },
    {
      name: "gam",
      label: "Gamme",
      options: {
        filter: true,
        
      },
    },
    {
      name: "sgam",
      label: "Sous Gamme",
      options: {
        filter: true,
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
            <Link to="/pages/new-product">
              <IconButton>
                <Icon>edit</Icon>
              </IconButton>
            </Link>
            <Link to="/pages/product-details">
              <IconButton>
                <Icon>arrow_right_alt</Icon>
              </IconButton>
            </Link>
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
      <ProductFilter/>
      <div className="overflow-auto">
      
        <div className="min-w-750">
     
          <MUIDataTable
            title={   <Grid container justify="space-between">
          
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={()=>{history.push("/pages/new-product")}}
                  >

                 Nouveau Produit
                </Button>
              </Grid>
            </Grid>}
            data={[]}
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



export default ProductList;
