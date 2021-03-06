import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Dialog,
  Divider,
  Grid,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import { Breadcrumb } from "matx";
import { useHistory, useLocation } from "react-router-dom";
import ProductDeplace from "./ProductDeplace";
import { useDispatch, useSelector } from "react-redux";
import { getChantierByProduct } from "app/redux/actions/EcommerceActions";
import DataGrid from "../DataGrid";
const ProductDetails = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  console.log("statee", location);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getChantierByProduct(location?.state?.row?.reference));
  }, []);
  const { chantierList } = useSelector((state) => {
    return {
      chantierList: state.ecommerce?.chantierDetails,
    };
  });
  const info = [
    {
      title: "Rference",
      value: location?.state?.row?.reference,
    },
    {
      title: "Name",
      value: location?.state?.row?.username,
    },
    {
      title: "Fournisseur",
      value: location?.state?.row?.fournisseur?.nom,
    },
    {
      title: "Qte Stock",
      value: location?.state?.row?.qte,
    },
  ];
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Espace Produit", path: "/pages/product-list" },
            { name: "Détails produit" },
          ]}
        />
      </div>
      <Grid container justify="space-between">
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            className="mb-4"
            onClick={() => {
              setOpen(true);
            }}
          >
            Déplacer Produit
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="flex-start">
        <Grid item xs={6}>
          <Card elevation={3}>
            {/* <h5 className="p-4 m-0">Détails produits</h5>
      <Divider /> */}
            <Table className="mb-4">
              <TableBody>
                {info.map((item, ind) => (
                  <TableRow key={ind}>
                    <TableCell className="pl-4">{item.title}</TableCell>
                    <TableCell>{item.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card elevation={3}>
            <h5 className="p-4 m-0">Chantier list</h5>
            <Divider />
            <DataGrid data={chantierList || []} columns={columns} />
          </Card>
        </Grid>
      </Grid>
      <Dialog open={open}>
        <ProductDeplace setOpen={setOpen} />
      </Dialog>
    </div>
  );
};

const columns = [
  {
    label: "Chantier",
    dataField: "chantier?.name",
  },
  {
    label: "QTE",
    dataField: "qte",
  },
];
export default ProductDetails;
