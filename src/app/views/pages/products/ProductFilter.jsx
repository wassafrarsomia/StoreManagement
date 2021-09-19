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
import { useDropzone } from "react-dropzone";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { getFornisseurList } from "app/redux/actions/EcommerceActions";
import AutoCompleteInput from "app/views/inputs/inputAutoComplete";
import InputTextField from "app/views/inputs/inputTextField"
const usestyles = makeStyles(({ palette, ...theme }) => ({
  dropZone: {
    transition: "all 350ms ease-in-out",
    border: "2px dashed rgba(var(--body),0.3)",
    "&:hover": {
      background: "rgba(var(--body), 0.2) !important",
    },
  },
}));

const ProductForm = () => {
const dispatch = useDispatch()
useEffect(() => {
    dispatch(getFornisseurList())
    }, []);
const { fournisseurs = [] } = useSelector((state) => state.ecommerce?.fournisseurs);
const { gammes = [] } = useSelector((state) => state.ecommerce?.gammes);

const { sousGammes = [] } = useSelector((state) => state.ecommerce?.sousGammes);

const fournisseurList =[];

  const handleSubmit = async (values, { isSubmitting }) => {
    console.log(values);
  };


  return (
      <Card elevation={3} className="mb-4">
        <Formik
          onSubmit={handleSubmit}
          enableReinitialize={true}
          initialValues={{}}
        >
          {({
           values,
           handleSubmit
          }) => (
            <form className="p-4" onSubmit={handleSubmit}>
              {console.log('valuees', values)}
              <Grid container justify="flex-start" spacing={1}>
                <Grid item  sm={3} xs={6}>
                <Field
                    component={InputTextField}
                    className="mb-4"
                    label='Reference'
                    name='reference'
                    variant="outlined"
                    size="small"
                  />
                  </Grid> 
                  <Grid item sm={3} xs={6}>
                
                  <Field
												component={AutoCompleteInput}
												name="fournisseur"
												label="Fournisseur"
												data={[]}
												labelField="nom"
												dataField="id"
												size="small"
												variant="outlined"
											/>
                 
                  </Grid> 
                  <Grid item sm={3} xs={6}>
                  <Field
										component={AutoCompleteInput}
                    label='Sous Gamme'
                    name='sousGamme'
                    labelField="nom"
                    variant="outlined"
                    size="small"
                    data={[]}
                  />
                  </Grid> 
                  <Grid item sm={3} xs={6}>
                  <Field
										component={AutoCompleteInput}
                    label='Gamme'
                    name='gamme'
                    variant="outlined"
                    size="small"
                    labelField='nom'
                  />
                  </Grid> 
                  <Grid item sm={3} xs={6}>
                  <Field
                    component={InputTextField}
                    className="mb-4"
                    label='Reference'
                    name='reference'
                    variant="outlined"
                    size="small"
                  />
                  </Grid>
                  <Grid item sm={3} xs={6}>
                     <Button
                        className="mb-4 px-12"
                        variant="contained"
                        color="primary"
                        type="submit"
                    >

                     Recherche
                    </Button>
             </Grid>
              </Grid>

           
            </form>
          )}
        </Formik>
      </Card>
  );
};



export default ProductForm;
