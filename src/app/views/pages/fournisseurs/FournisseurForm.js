import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Divider,
  Grid,
  Icon,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { Breadcrumb } from "matx";
import { Field, Formik } from "formik";
import * as yup from "yup";
import AutoCompleteInput from "app/views/inputs/inputAutoComplete";
import InputTextField from "app/views/inputs/inputTextField";
import { useHistory } from "react-router";
import { saveFournisseur } from "app/redux/actions/EcommerceActions";
import { useDispatch } from "react-redux";
import ConfirmationDialog from "matx/components/ConfirmationDialog";
const FournisseurForm = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (values) => {
    console.log(values);
    await dispatch(saveFournisseur(values)).then((res) => {
      console.log("ress", res);
      if (res.id) {
        setOpen(true);
      }
    });
  };
  const history = useHistory();

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Espace Fournisseur", path: "/pages/fournisseur-list" },
            { name: "Nouveau Fournisseur" },
          ]}
        />
      </div>

      <Card elevation={3}>
        <div className="flex p-4">
          <h4 className="m-0">Ajoutez Fournisseur</h4>
        </div>
        <Divider className="mb-6" />

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize={true}
          validationSchema={fournisseurSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form className="px-4" onSubmit={handleSubmit}>
              <Grid container spacing={2} justify="flex-start">
                <Grid item xs={6} sm={6}>
                  <Field
                    component={InputTextField}
                    className="mb-4"
                    label="Nom"
                    name="nom"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Field
                    component={InputTextField}
                    className="mb-4"
                    label="Email"
                    name="email"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Field
                    component={InputTextField}
                    className="mb-4"
                    label="Contact"
                    name="phone"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
              </Grid>
              <Grid container justify="flex-end">
                <Grid item xs={2} sm={2}>
                  <Button
                    className="mb-4 px-12"
                    variant="contained"
                    onClick={() => {
                      history.push("/pages/fournisseur-list");
                    }}
                  >
                    Annuler
                  </Button>
                </Grid>
                <Grid item xs={2} sm={2}>
                  <Button
                    className="mb-4 px-12"
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Ajouter
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
      </Card>
      <ConfirmationDialog
        open={open}
        onYesClick={() => history.push("/pages/fournisseur-list")}
        text={"Ajout effectu??e avec succ??s"}
        ok={"Okay"}
      />
    </div>
  );
};

const fournisseurSchema = yup.object().shape({});

const initialValues = {};

export default FournisseurForm;
