import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import Button from "@mui/material/Button";

const SiteHeader = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <header className="mt-5">
      <div className="container">
        <nav className="flex justify-between items-center">
          <span className="text-2xl">
            <Link to="/">
              <img
                src="header_logo.png"
                className="w-36"
                alt="Link shrub logo"
              />
            </Link>
          </span>
          <div className="flex gap-2 items-center">
            {!user ? (
              <>
                <Button
                  component={NavLink}
                  to="/login"
                  variant="text"
                  color="info"
                >
                  Login
                </Button>
                <Button
                  component={NavLink}
                  to="/register"
                  variant="outlined"
                  color="success"
                >
                  Register
                </Button>
              </>
            ) : (
              <Button variant="outlined" color="error" onClick={logout}>
                Logout
              </Button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
