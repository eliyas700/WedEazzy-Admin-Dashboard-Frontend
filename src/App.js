import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddAdminModal from "./Components/Admin/AddAdminModal";
import AdminPanel from "./Components/Admin/AdminPanel";
import Categories from "./Components/Categories/Categories";
import CategoryModal from "./Components/Categories/CategoryModal";
import CouplesTable from "./Components/CouplesTable/CouplesTable";
import CouplesTabel from "./Components/CouplesTable/CouplesTable";
import Dashboard from "./Components/Dashboard";
import DashboardContent from "./Components/DashboardContent ";
import Login from "./Components/Login/Login";
import Vendors from "./Components/Vendors/Vendors";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}>
          <Route index element={<DashboardContent></DashboardContent>}></Route>
          <Route path="admin" element={<AdminPanel></AdminPanel>}></Route>
          <Route path="category" element={<Categories></Categories>}></Route>
          <Route path="vendors" element={<Vendors></Vendors>}></Route>
          <Route path="couples" element={<CouplesTable></CouplesTable>}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <AddAdminModal />
      <CategoryModal />
    </div>
  );
}

export default App;
