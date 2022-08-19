import { Helmet } from "react-helmet-async";
import { Link, Navigate } from "react-router-dom";
import { SocialLink } from "../components";
import { usePublicProfile } from "../hooks/usePublicProfile";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const PublicProfile = () => {
  const { profile, error } = usePublicProfile();

  if (profile) {
    return (
      <>
        <Helmet>
          <title>{`${profile.appearanceName} - Link Shrub`}</title>
        </Helmet>
        <main className="pt-8 pb-16 bg-slate-50 min-h-screen text-gray-800 relative">
          <div className="container">
            <img
              src="default_avatar.png"
              className="w-36 aspect-square rounded-full mx-auto block"
              draggable={false}
              alt="Profile avatar"
            />
            <h2 className="text-3xl text-center font-semibold mt-4 mb-3">
              {profile.appearanceName || profile.username}
            </h2>
            {profile.about && (
              <p className="text-md mx-auto text-center w-full lg:w-4/5 break-words">
                {profile.about}
              </p>
            )}
            <div className="flex gap-4 mx-auto w-min m-6">
              {profile.website && <SocialLink value={profile.website} />}
              {Object.keys(profile.socials).map((key, index) =>
                profile.socials[key] ? (
                  <SocialLink
                    key={index}
                    type={key}
                    value={profile.socials[key]}
                  />
                ) : null
              )}
            </div>
            <div className="flex flex-col gap-3 mx-auto max-w-xl">
              {profile.customLinks.map((link, index) => (
                <a
                  key={index}
                  href={`${link.linkTo}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border focus:outline-none focus:text-gray-100 focus:bg-gray-600 border-gray-700 hover:bg-gray-600 hover:text-gray-100 transition rounded-lg px-4 py-2 w-full flex items-center justify-between"
                >
                  <div className="grow">
                    <p className="text-lg font-bold">{link.appearAs}</p>
                    <p className="text-sm">{link.subtext}</p>
                  </div>
                  <OpenInNewIcon />
                </a>
              ))}
            </div>
          </div>
          <Link to="/">
            <img
              src="logo.png"
              className="w-8 absolute center left-1/2 -translate-x-1/2 bottom-5"
              alt="Link shrub logo"
            />
          </Link>
        </main>
      </>
    );
  }

  if (error) {
    return <Navigate to="/" />;
  }
};

export default PublicProfile;
