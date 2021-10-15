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
import { useDispatch } from "react-redux";
import { saveChantier } from "app/redux/actions/EcommerceActions";
import ConfirmationDialog from "matx/components/ConfirmationDialog";
const ChantierForm = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleSubmit = async (values, { isSubmitting }) => {
    console.log(values);
    dispatch(saveChantier(values)).then((res) => {
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
            { name: "Espace Chantier", path: "/pages/chantier-list" },
            { name: "Nouveau Chantier" },
          ]}
        />
      </div>

      <Card elevation={3}>
        <div className="flex p-4">
          <h4 className="m-0">Ajoutez Chantier</h4>
        </div>
        <Divider className="mb-6" />

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize={true}
          validationSchema={chantierSchema}
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
                    name="name"
                    variant="outlined"
                    size="small"
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Field
                    component={InputTextField}
                    className="mb-4"
                    label="Chef chantier"
                    name="chefChantier"
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
                      history.push("/pages/chantier-list");
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
        onYesClick={() => history.push("/pages/chantier-list")}
        text={"Ajout effectuée avec succès"}
        ok={"Okay"}
      />
    </div>
  );
};

const chantierSchema = yup.object().shape({});

const initialValues = {};

export default ChantierForm;
