import { Typography } from "@mui/material";
import ExistingLinksForm from "./ExistingLinksForm";
import NewLinkForm from "./NewLinkForm";

const CustomLinksForm = () => {
  return (
    <>
      <Typography component="h3" variant="h5" sx={{ paddingBottom: "1.5rem" }}>
        Links
      </Typography>
      <div>
        <ExistingLinksForm />
        <NewLinkForm />
      </div>
    </>
  );
};

export default CustomLinksForm;
