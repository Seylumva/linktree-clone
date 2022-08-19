import { Link } from "react-router-dom";
import {
  TabPanel,
  InformationPanel,
  LoadingSpinner,
  CustomLinksForm,
} from "../components";
import { useUserProfile } from "../hooks/useUserProfile";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const { user, error, isLoading } = useUserProfile();

  const handleTabChange = (e, newValue) => {
    setSelectedTab(newValue);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Helmet>
        <title>Dashboard - Link Shrub</title>
      </Helmet>
      <div className="container">
        <div className="flex justify-between items-center">
          <Typography variant="h4" component="h1" gutterBottom>
            Edit Profile
          </Typography>
          <Button
            component={Link}
            to={`/${user.username}`}
            variant="contained"
            color="info"
            endIcon={<OpenInNewIcon />}
          >
            Preview
          </Button>
        </div>
        <>
          <Box sx={{ marginTop: "1rem" }}>
            <Tabs value={selectedTab} onChange={handleTabChange}>
              <Tab label="Details" />
              <Tab label="Custom Links" />
            </Tabs>
          </Box>
          <InformationPanel selectedTab={selectedTab} />
          <TabPanel value={selectedTab} index={1}>
            <CustomLinksForm />
          </TabPanel>
        </>
        {error && <p>Unable to fetch data.</p>}
      </div>
    </>
  );
};

export default Dashboard;
