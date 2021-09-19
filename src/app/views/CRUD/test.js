
import React, { useState } from "react";
import {
  Card,
  Grid,
  Button,
  CircularProgress,
  TextField
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import history from "history.js";
import clsx from "clsx";
import { useHistory } from "react-router";

const useStyles = makeStyles(({ palette, ...theme }) => ({
  cardHolder: {
    background: "#1A2038",
  },
  card: {
    maxWidth: 800,
    margin: "1rem",
  },
  cardLeft: {
    background: "#161c37 url(/assets/images/bg-3.png) no-repeat",
    minWidth: 380,
    backgroundSize: 'cover',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      minWidth: 200
    },
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    "& span": {
      fontSize: 26,
      lineHeight: 1.3,
      fontWeight: 800
    }
  },
  mainTitle: {
    fontSize: 18,
    lineHeight: 1.3,
    marginBottom: 24
  },
  features: {
    "& .item": {
      position: 'relative',
      marginBottom: 12,
      paddingLeft: 20,
      "&::after": {
        position: 'absolute',
        content: '""',
        width: 4,
        height: 4,
        borderRadius: 4,
        left: 4,
        top: 7,
        backgroundColor: palette.error.main
      }
    }
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  socialButton: {
    width: "100%",
    "& img": {
      margin: "0 8px",
    },
  },
}));

const FirebaseLogin = () => {
  const history =useHistory()
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "badreKhalyly",
    password: "dummyPass",
  });
  const [message, setMessage] = useState("");

  const classes = useStyles();


  const handleFormSubmit = async (event) => {
    setLoading(true);
    // console.log(userInfo);
    // try {
    //   await signInWithEmailAndPassword(userInfo.email, userInfo.password);
    //   history.push("/");
    // } catch (e) {
    //   console.log(e);
    //   setMessage(e.message);
    //   setLoading(false);
    // }
    history.push("pages/product-list");
  };
  return (
    <div
      className={clsx(
        "flex justify-center items-center  min-h-full-screen",
        classes.cardHolder
      )}
    >
      <Card className={classes.card}>
      <div
              className={clsx({
                "p-8 h-full": true,
                [classes.cardLeft]: true,
              })}
            >
        <Grid container justify='center'>
    
          <Grid item  xs={12}>
        
               <TextField
                  className="mb-6 w-full"
                  variant="outlined"
                  size="small"
                  label="Name"
                  type="name"
                  name="name"
                  fullWidth
                />
           
          </Grid>
          <Grid item  xs={12}>
                <TextField
                  className="mb-3 w-full"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  size="small"
                  type="password"
                  value={userInfo.password}
                />

               
          </Grid>
          <Grid item  xs={12}>
          {message && <p className="text-error">{message}</p>}

    <Button
      variant="contained"
      color="primary"
      disabled={loading}
      // type="submit"
      onClick={() => history.push("/pages/new-product")}
      fullWidth
    >
     Login
    </Button>
    {loading && (
      <CircularProgress
        size={24}
        className={classes.buttonProgress}
      />
    )}
               </Grid> 

        </Grid>
        </div>
      </Card>
    
    </div>
  );
};

export default FirebaseLogin;

