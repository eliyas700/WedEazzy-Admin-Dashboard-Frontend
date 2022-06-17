import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddAdminModal from "./Components/Admin/AddAdminModal";
import AdminPanel from "./Components/Admin/AdminPanel";
import Dashboard from "./Components/Dashboard";
import DashboardContent from "./Components/DashboardContent ";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}>
          <Route index element={<DashboardContent></DashboardContent>}></Route>
          <Route path="admin" element={<AdminPanel></AdminPanel>}></Route>
        </Route>
      </Routes>
      <AddAdminModal />
    </div>
  );
}

export default App;
