"use client";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { DefButton } from "@/Components/UtilComponent";
import { toast } from "react-hot-toast";

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

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setloading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setloading(true);
    try {
      const data = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      console.log(data);
      if (data.error) {
        toast.error(data.error);

        return setloading(false);
      }
      toast.success("Login Success");

      return setloading(false);
    } catch (error) {
      console.log(error);
      return setloading(false);
    }
  };

  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          label="Email Address"
          name="email"
          autoComplete="email"
          
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        {/* handleSubmit */}
        <DefButton
          name="Sign In"
          func={handleSubmit}
          loading={loading}
          btnStyle=" w-full font-semibold mt-5  pBtn  py-2 "
        />

        <Grid container sx={{ mt: 2 }}>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/Auth/SignUp" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
