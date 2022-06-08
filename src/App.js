import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import DashboardContent from "./Components/DashboardContent ";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}>
          <Route index element={<DashboardContent></DashboardContent>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
