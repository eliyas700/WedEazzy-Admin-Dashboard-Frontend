import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddAdminModal from "./Components/Admin/AddAdminModal";
import AdminPanel from "./Components/Admin/AdminPanel";
import Categories from "./Components/Categories/Categories";
import CategoryModal from "./Components/Categories/CategoryModal";
import Dashboard from "./Components/Dashboard";
import DashboardContent from "./Components/DashboardContent ";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}>
          <Route index element={<DashboardContent></DashboardContent>}></Route>
          <Route path="admin" element={<AdminPanel></AdminPanel>}></Route>
          <Route path="category" element={<Categories></Categories>}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <AddAdminModal />
      <CategoryModal />
    </div>
  );
}

export default App;
