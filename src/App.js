import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddAdminModal from "./Components/Admin/AddAdminModal";
import AdminPanel from "./Components/Admin/AdminPanel";
import Categories from "./Components/Categories/Categories";
import CategoryModal from "./Components/Categories/CategoryModal";
import Dashboard from "./Components/Dashboard";
import DashboardContent from "./Components/DashboardContent ";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}>
          <Route index element={<DashboardContent></DashboardContent>}></Route>
          <Route path="admin" element={<AdminPanel></AdminPanel>}></Route>
          <Route path="category" element={<Categories></Categories>}></Route>
        </Route>
      </Routes>
      <AddAdminModal />
      <CategoryModal />
    </div>
  );
}

export default App;
