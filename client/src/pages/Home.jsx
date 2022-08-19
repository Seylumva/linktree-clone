import { Button, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - Link Shrub</title>
      </Helmet>
      <section className="text-center px-5 pt-12">
        <Typography variant="h3" component="h1" sx={{ marginBottom: 2 }}>
          One link to rule them all
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: 4 }}>
          Keep your audience up to date with a single link. Gone are the days of
          having to constantly update your bio.
        </Typography>
        <Button
          component={Link}
          to="/register"
          variant="contained"
          color="info"
        >
          Get Started
        </Button>
      </section>
    </>
  );
};

export default Home;
