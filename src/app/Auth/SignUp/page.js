"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { SignUpURL } from "../../../../allLinks";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { DefButton } from "@/Components/UtilComponent";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp() {
  const [loading, setloading] = useState(false);
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setloading(true);
      const { data } = await axios.post(SignUpURL, {
        name: userName,
        email,
        password,
      });
      if (data.isSuccess) {
        toast.success(data.message);
        return setloading(false);
      } else {
        toast.error(data.error);
        return setloading(false);
      }
    } catch (error) {
      toast.error(error.message);
      return setloading(false);
    }
  };

  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <TextField
              autoComplete="given-name"
              name="userName"
              onChange={(e) => {
                setuserName(e.target.value);
              }}
              fullWidth
              id="userName"
              label="User Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => {
                setemail(e.target.value);
              }}
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
            />
          </Grid>
        </Grid>
        <DefButton
          name="Sign Up"
          func={handleSubmit}
          loading={loading}
          btnStyle=" w-full font-semibold mt-5  pBtn  py-2 "
        />

        <Grid container sx={{ mt: 2 }} justifyContent="flex-end">
          <Grid item>
            <Link href="/Auth/SignIn" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
