import { Button, ButtonGroup, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";

const ExistingLinksForm = () => {
  const { user } = useAuthContext();
  const [selectedLink, setSelectedLink] = useState(null);

  return (
    <>
      <div>
        {user.customLinks.map((link, index) => (
          <div
            key={index}
            className="flex flex-col xl:flex-row gap-4  px-2 py-4 border-gray-200 rounded-lg border relative"
          >
            <button className="absolute -top-4 -right-3 padding-1 bg-red-400 grid place-items-center rounded-full p-1">
              <CloseIcon sx={{ fontSize: "medium", color: "white" }} />
            </button>
            <TextField
              label="Link label"
              variant="outlined"
              value={link.appearAs}
            />
            <TextField label="Link to" variant="outlined" value={link.linkTo} />
            <TextField
              label="Link caption"
              variant="outlined"
              value={link.subtext}
              sx={{ flexGrow: "1" }}
            />
            <ButtonGroup
              variant="outlined"
              aria-label="outlined button group"
              sx={{ marginLeft: "auto" }}
            >
              <Button>Update</Button>
              <Button>
                <DeleteIcon />
              </Button>
            </ButtonGroup>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExistingLinksForm;
