import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import LoadingButton from "@mui/lab/LoadingButton";
import { useUpdateProfile } from "../hooks/useUpdateBasicInfo";
import { useAuthContext } from "../hooks/useAuthContext";
import { useRef } from "react";

const BasicInfoForm = () => {
  const { user } = useAuthContext();
  const { updateInfo, isLoading, error } = useUpdateProfile();
  const [appearanceName, setAppearanceName] = useState(user.appearanceName);
  const [changedFormData, setChangedFormData] = useState(false);
  const avatarSelected = useRef(null);

  const handleFilePicked = (e) => {
    avatarSelected.current.src = URL.createObjectURL(e.target.files[0]);
    setChangedFormData(true);
  };

  const handleNameChange = (e) => {
    setAppearanceName(e.target.value);
    setChangedFormData(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateInfo({ appearanceName });
    setChangedFormData(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography component="h3" variant="h5">
        Basic Info
      </Typography>
      <div className="mx-auto w-fit flex flex-col gap-2 mb-2 pt-4 items-center">
        {/* Avatar File Input */}
        <div className="flex flex-col gap-4 items-center">
          <img
            ref={avatarSelected}
            className="w-36 h-36 rounded-full object-cover"
            src="default_avatar.png"
            alt="User avatar"
          />
          <div>
            <Button
              variant="contained"
              component="label"
              endIcon={<PhotoCameraIcon />}
            >
              Upload
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleFilePicked}
              />
            </Button>
          </div>
        </div>
        {/* Apperance Name Input */}
        <TextField
          id="filled-basic"
          label="Name"
          variant="filled"
          name="apperanceName"
          value={appearanceName}
          onChange={handleNameChange}
          spellCheck={false}
          autoComplete="off"
        />
        <span className="text-xs text-gray-400 font-thin">
          This will not change your username.
        </span>
        <LoadingButton
          type="submit"
          variant="contained"
          loading={isLoading}
          disabled={!isLoading && !changedFormData}
        >
          Submit
        </LoadingButton>
        {error && <span>Unable to update profile.</span>}
      </div>
    </form>
  );
};

export default BasicInfoForm;
