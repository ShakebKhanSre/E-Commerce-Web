import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NextRoutes } from "./routes";
import { useSelector } from "react-redux";

function App({ props }) {
  const { showNavbar } = useSelector((state) => state?.authenticationReducers);

  return (
    <div>
      <BrowserRouter>
        {showNavbar && <Navbar />}
        <Routes>
          {NextRoutes.map((routes) => (
            <Route
              key={routes.path}
              path={routes.path}
              element={routes.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
