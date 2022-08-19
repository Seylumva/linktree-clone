import { Outlet } from "react-router-dom";
import { SiteHeader } from "../components";

const ApplicationPage = () => {
  return (
    <>
      <SiteHeader />
      <main className="mt-12 pb-12">
        <Outlet />
      </main>
    </>
  );
};

export default ApplicationPage;
