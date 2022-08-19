import LoadingButton from "@mui/lab/LoadingButton";
import { Link, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link as RouterLink } from "react-router-dom";
import { useSignup } from "../hooks/useSignup";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(username, email, password);
  };

  return (
    <>
      <Helmet>
        <title>Register - Link Shrub</title>
      </Helmet>
      <section className="">
        <Typography
          variant="h5"
          component="h1"
          sx={{ textAlign: "center", marginBottom: 4 }}
        >
          Sign Up
        </Typography>
        <form className="w-2/3 max-w-lg mx-auto mt-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <TextField
              id="username"
              name="username"
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <LoadingButton
              loading={isLoading}
              variant="outlined"
              type="submit"
              color="primary"
            >
              Submit
            </LoadingButton>
            {error && <span className="text-red-500">{error}</span>}
            <Typography
              variant="body2"
              sx={{ textAlign: "right", marginTop: 1 }}
            >
              Already have an account?{" "}
              <Link component={RouterLink} to="/login">
                Login here
              </Link>
            </Typography>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
