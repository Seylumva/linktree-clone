import { useState } from "react";
import { useUpdateProfile } from "../hooks/useUpdateSocials";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FaTiktok, FaSnapchatGhost, FaPatreon } from "react-icons/fa";
import { useUserProfile } from "../hooks/useUserProfile";
import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

const SocialMediaForm = ({ className }) => {
  const { socialFormData, setSocialFormData } = useUserProfile();
  const { updateLinks, isLoading, error } = useUpdateProfile();
  const [changedFormData, setChangedFormData] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateLinks(socialFormData);
    setChangedFormData(false);
  };

  const handleInputChange = (e) => {
    setSocialFormData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
    if (changedFormData) return;
    setChangedFormData(true);
  };

  return (
    <form className={`${className} relative`} onSubmit={handleSubmit}>
      <Typography component="h3" variant="h5">
        Social Media
      </Typography>

      <div className="flex flex-col lg:flex-row gap-3 mb-2 mt-4">
        <div className="flex flex-col gap-3 w-full lg:w-1/3 items-center">
          {/* Website */}
          <FormControl variant="standard" className="w-full">
            <InputLabel htmlFor="website">Website</InputLabel>
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <LanguageIcon />
                </InputAdornment>
              }
              id="website"
              name="website"
              value={socialFormData.website}
              onChange={handleInputChange}
              spellCheck={false}
            />
          </FormControl>
          {/* Facebook */}
          <FormControl variant="standard" className="w-full">
            <InputLabel htmlFor="website">Facebook</InputLabel>
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <FacebookIcon />
                </InputAdornment>
              }
              id="facebook"
              name="facebook"
              value={socialFormData.facebook}
              onChange={handleInputChange}
              spellCheck={false}
            />
          </FormControl>
          {/* Instagram */}
          <FormControl variant="standard" className="w-full">
            <InputLabel htmlFor="instagram">Instagram</InputLabel>
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <InstagramIcon />
                </InputAdornment>
              }
              id="instagram"
              name="instagram"
              value={socialFormData.instagram}
              onChange={handleInputChange}
              spellCheck={false}
            />
          </FormControl>
          {/* Tiktok */}
          <FormControl variant="standard" className="w-full">
            <InputLabel htmlFor="tiktok">Tiktok</InputLabel>
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <FaTiktok className="w-6 aspect-square" />
                </InputAdornment>
              }
              id="tiktok"
              name="tiktok"
              value={socialFormData.tiktok}
              onChange={handleInputChange}
              spellCheck={false}
            />
          </FormControl>
          {/* Patreon */}
          <FormControl variant="standard" className="w-full">
            <InputLabel htmlFor="patreon">Patreon</InputLabel>
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <FaPatreon className="w-6 aspect-square" />
                </InputAdornment>
              }
              id="patreon"
              name="patreon"
              value={socialFormData.patreon}
              onChange={handleInputChange}
              spellCheck={false}
            />
          </FormControl>
          {/* Youtube */}
          <FormControl variant="standard" className="w-full">
            <InputLabel htmlFor="youtube">YouTube</InputLabel>
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <YouTubeIcon />
                </InputAdornment>
              }
              id="youtube"
              name="youtube"
              value={socialFormData.youtube}
              onChange={handleInputChange}
              spellCheck={false}
            />
          </FormControl>
          {/* Snapchat */}
          <FormControl variant="standard" className="w-full">
            <InputLabel htmlFor="snapchat">Snapchat</InputLabel>
            <Input
              startAdornment={
                <InputAdornment position="start">
                  <FaSnapchatGhost className="w-6 aspect-square" />
                </InputAdornment>
              }
              id="snapchat"
              name="snapchat"
              value={socialFormData.snapchat}
              onChange={handleInputChange}
              spellCheck={false}
            />
          </FormControl>
        </div>
        {/* About */}
        <TextField
          className="w-full"
          id="about"
          name="about"
          label="Bio"
          multiline
          inputProps={{ maxLength: 300 }}
          value={socialFormData.about}
          onChange={handleInputChange}
          variant="standard"
        />
      </div>
      <LoadingButton
        sx={{ width: "100%" }}
        loading={isLoading}
        variant="contained"
        type="submit"
        disabled={!isLoading && !changedFormData}
      >
        Update
      </LoadingButton>
      {error && <p className="text-red-500">Unable to update data.</p>}
    </form>
  );
};

export default SocialMediaForm;
