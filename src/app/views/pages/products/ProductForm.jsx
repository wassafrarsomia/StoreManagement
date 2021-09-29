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
import { Breadcrumb, ConfirmationDialog } from "matx";
import { Field, Formik } from "formik";
import * as yup from "yup";
import AutoCompleteInput from "app/views/inputs/inputAutoComplete";
import InputTextField from "app/views/inputs/inputTextField"
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getFornisseurList, getGammeList, getSousGamme, getUnits, saveProduct } from "app/redux/actions/EcommerceActions";
const ProductForm = () => {

const history=useHistory()
const dispatch = useDispatch()
const [open, setOpen]=useState(false)
useEffect(() => {
    dispatch(getFornisseurList())
    dispatch(getGammeList())
    dispatch(getSousGamme())
    dispatch(getUnits())


    }, []);
const { fournisseurs , gammes, sousGammes,unites } = useSelector((state) =>{
 
  return ( {
      fournisseurs :state.ecommerce.fournisseurs,
      gammes :  state.ecommerce?.gammes,
      sousGammes:state.ecommerce?.sousGammes ,
      unites:state.ecommerce.unites})});

  const handleSubmit = async (values) => {
    console.log(values);
  await  dispatch(saveProduct(values)).then(
      res => {
        console.log('ress', res)
        if(res.id){
          setOpen(true)
        }
      }
    )
    setOpen(true)
  };
  console.log('rrrrt', gammes)
  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Espace Produit", path: "/pages/product-list" },
            { name: "Nouveau Produit" },
          ]}
        />
      </div>

      <Card elevation={3}>
        <div className="flex p-4">
          <h4 className="m-0">Ajoutez Produit</h4>
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
                      component={InputTextField}
                      className="mb-4"
                      label='Reference'
                      name='reference'
                      variant="outlined"
                      size="small"
                    />
                </Grid>
                <Grid item xs={6} sm={6}>
                      <Field
                      component={InputTextField}
                      className="mb-4"
                      label='Name'
                      name='username'
                      variant="outlined"
                      size="small"
                    />
                         </Grid>
                <Grid item xs={6} sm={6}>
                  <Field
                      component={AutoCompleteInput}
                      name="fournisseur"
                      className="mb-4"
                      label="Fournisseur"
                      data={fournisseurs}
                      labelField="nom"
                      dataField="id"
                      size="small"
                      variant="outlined"
                    />
                         </Grid>
                <Grid item xs={6} sm={6}>
                  <Field
                      component={AutoCompleteInput}
                      label='Gamme'
                      name='gamme'
                      variant="outlined"
                      size="small"
                      labelField='nom'
                      data={gammes}
                    />
                         </Grid>
                <Grid item xs={6} sm={6}>
                    <Field
                      component={AutoCompleteInput}
                      label='Sous Gamme'
                      className="mb-4"
                      name='sousGamme'
                      labelField="nom"
                      variant="outlined"
                      size="small"
                      data={sousGammes}
                    />
                         </Grid>
                <Grid item xs={6} sm={6}>
                      <Field
                      component={AutoCompleteInput}
                      label='Unite'
                      className="mb-4"
                      name='unit'
                      labelField="nom"
                      variant="outlined"
                      size="small"
                      data={unites}
                    />
                   </Grid>   
              </Grid>
              <Grid container justify='flex-end'>
                
                <Grid item xs={2} sm={2}>
                  <Button
                    className="mb-4 px-12"
                    variant="contained"
                    onClick={()=>{history.push("/pages/product-list")}}
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
      <ConfirmationDialog open={open} text={"Ajout effectuée avec succès"}/>
    </div>
  );
};

const productSchema = yup.object().shape({
});

const initialValues = {
};

export default ProductForm;
