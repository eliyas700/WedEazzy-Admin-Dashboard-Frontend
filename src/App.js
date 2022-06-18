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
import Bookings from "./Components/Pages/Bookings";
import Messages from "./Components/Pages/Messages";
import Vendors from "./Components/Vendors/Vendors";
import Venue from "./Components/Venue/Venue";
import WishList from "./Components/WishList/WishList";

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
          <Route path="venue" element={<Venue></Venue>}></Route>
          <Route path="wishList" element={<WishList></WishList>}></Route>
          <Route path="bookings" element={<Bookings></Bookings>}></Route>
          <Route path="messages" element={<Messages></Messages>}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <AddAdminModal />
      <CategoryModal />
    </div>
  );
}

export default App;
