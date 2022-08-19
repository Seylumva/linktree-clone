import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLogin } from "../hooks/useLogin";
import LoadingButton from "@mui/lab/LoadingButton";
import { Link as RouterLink } from "react-router-dom";
import useRememberMe from "../hooks/useRememberMe";

const Login = () => {
  const [email, setEmail] = useState("");
  const { rememberMe, setRememberMe, storeEmail } = useRememberMe(setEmail);
  const [password, setPassword] = useState("");
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    if (rememberMe) storeEmail(email);
    else localStorage.removeItem("remember-me");
  };

  return (
    <>
      <Helmet>
        <title>Login - Link Shrub</title>
      </Helmet>
      <section>
        <Typography
          variant="h5"
          component="h1"
          sx={{ textAlign: "center", marginBottom: 4 }}
        >
          Sign In
        </Typography>
        <form className="w-2/3 max-w-lg mx-auto mt-6" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              type="password"
              id="password"
              name="password"
              label="Password"
              variant="outlined"
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
            <FormGroup sx={{ marginLeft: "auto" }}>
              <FormControlLabel
                sx={{ userSelect: "none" }}
                labelPlacement="start"
                control={
                  <Checkbox
                    size="small"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                }
                label="Remember me"
              />
            </FormGroup>
            {error && <span className="text-red-500">{error}</span>}
            <Typography
              variant="body2"
              sx={{ textAlign: "right", marginTop: 1 }}
            >
              Don't have an account?{" "}
              <Link component={RouterLink} to="/register">
                Sign up here
              </Link>
            </Typography>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
