import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import ApplicationPage from "./layout/ApplicationPage";
import { Home, Register, Login, Dashboard, PublicProfile } from "./pages";

function App() {
  const { user } = useAuthContext();
  return (
    <>
      <Routes>
        {/* Include SiteHeader */}
        <Route element={<ApplicationPage />}>
          <Route index element={user ? <Dashboard /> : <Home />} />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
        </Route>
        {/* Routes with no SiteHeader (Public shrub pages) */}
        <Route path="/:username" element={<PublicProfile />} />
      </Routes>
    </>
  );
}

export default App;
