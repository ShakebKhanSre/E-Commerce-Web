import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NextRoutes } from "./routes";

function App({ props }) {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
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
