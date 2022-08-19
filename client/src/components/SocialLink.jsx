import {
  FaFacebookF,
  FaInstagram,
  FaLink,
  FaPatreon,
  FaSnapchatGhost,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

const SocialLink = ({ type, value }) => {
  const getIcon = (type) => {
    switch (type) {
      case "facebook":
        return <FaFacebookF />;
      case "instagram":
        return <FaInstagram />;
      case "tiktok":
        return <FaTiktok />;
      case "patreon":
        return <FaPatreon />;
      case "youtube":
        return <FaYoutube />;
      case "snapchat":
        return <FaSnapchatGhost />;
      default:
        return <FaLink />;
    }
  };

  const getLink = (value) => {
    switch (type) {
      case "facebook":
        return "https://www.facebook.com/" + value;
      case "instagram":
        return "https://www.instagram.com/" + value;
      case "tiktok":
        return "https://www.tiktok.com/@" + value;
      case "patreon":
        return "https://www.patreon.com/" + value;
      case "youtube":
        return "https://www.youtube.com/c/" + value;
      case "snapchat":
        return "https://snapchat.com/add/" + value;
      default:
        return value;
    }
  };

  return (
    <a
      href={getLink(value)}
      target="_blank"
      rel="noopener noreferrer"
      className="text-lg lg:text-xl transition-transform hover:scale-125 hover:bg-slate-300 focus:outline-none focus:scale-125 active:bg-slate-300 focus:bg-slate-300 p-2 rounded-full"
    >
      {getIcon(type)}
    </a>
  );
};

export default SocialLink;
