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
import InputTextField from "app/views/inputs/inputTextField"
import { useHistory } from "react-router";
const ProductDeplace = () => {
  const handleSubmit = async (values, { isSubmitting }) => {
    console.log(values);
  };
const history=useHistory()

  return (
    <div className="m-sm-30">
        <div className="flex p-4">
          <h4 className="m-0">Déplacer Produit</h4>
        </div>
        <Divider className="mb-6" />

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize={true}
          validationSchema={productSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <form className="px-4" onSubmit={handleSubmit}>
              <Grid container spacing={2} justify='flex-start'>
                <Grid item xs={6} sm={6}>
                  <Field
                      component={AutoCompleteInput}
                      name="chantierOrigin"
                      className="mb-4"
                      label="Chantier Origine"
                      data={[]}
                      labelField="nom"
                      dataField="id"
                      size="small"
                      variant="outlined"
                    />
                         </Grid>
                <Grid item xs={6} sm={6}>
                  <Field
                      component={AutoCompleteInput}
                      label='Chantier Destination'
                      name='chantierDestination'
                      className="mb-4"
                      variant="outlined"
                      size="small"
                      labelField='nom'
                    />
                         </Grid>
               
                <Grid item xs={6} sm={6}>
                      <Field
                      component={InputTextField}
                      label='Qte'
                      className="mb-4"
                      name='qte'
                      size="small"
                    />
                   </Grid>   
              </Grid>
              <Grid container spacing={2} justify='center'>
                
                <Grid item xs={4} sm={4}>
                  <Button
                    className="mb-4 px-12"
                    variant="contained"
                    onClick={()=>{history.push("/pages/product-list")}}
                  >
                   Annuler
                  </Button>
                </Grid>
                <Grid item xs={4} sm={4}>
                  <Button
                    className="mb-4 px-12"
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Déplacer
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Formik>
    </div>
  );
};

const productSchema = yup.object().shape({
  name: yup.string().required("${path} is required"),
});

const initialValues = {
};

export default ProductDeplace;
