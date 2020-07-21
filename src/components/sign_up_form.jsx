import React from "react";
import {
  Button,
  CssBaseline,
  Grid,
  Container,
  makeStyles,
  Typography,
  Avatar,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import InputField from "./input_field";
import { useForm } from "./useForm";
import { SignUpFormValidator } from "../utils/joi_validation";
import FetchData from "./fetch_data";
import http_service from "../service/http_service";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignUpForm = () => {
  const classes = useStyles();
  const [values, handleChange, error, setError] = useForm({
    firstname: "chunlee",
    lastname: "thong",
    email: "michael.lawson@reqres.in",
    password: "1234567",
  });
  const onFormSubmit = (e) => {
    e.preventDefault();
    const { error } = SignUpFormValidator(values);
    if (error) {
      setError({ [error.details[0].context.label]: error.details[0].message });
    } else {
      setError({});
      http_service
        .post("https://reqres.in/api/register", {
          email: values.email,
          password: values.password,
        })
        .then((response) => {
          alert("Token: " + response.data.token);
        })
        .catch((err) => {
          alert(err.toString());
        });
    }
  };
  return (
    <Container maxWidth="xs" component="main" className={classes.paper}>
      <CssBaseline />
      <Avatar className={classes.avatar}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <InputField
              name="firstname"
              label="First Name"
              required
              value={values.firstname}
              onChange={handleChange}
              error={error.firstname}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="lastname"
              label="Last Name"
              value={values.lastname}
              onChange={handleChange}
              error={error.lastname}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              name="email"
              label="Email"
              required
              value={values.email}
              onChange={handleChange}
              error={error.email}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              name="password"
              label="Password"
              type="password"
              required
              value={values.password}
              onChange={handleChange}
              error={error.password}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={onFormSubmit}
          className={classes.submit}
        >
          SIGN UP
        </Button>
      </form>
      <FetchData></FetchData>
    </Container>
  );
};

export default SignUpForm;
