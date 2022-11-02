import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
import CustomerCare from "./pages/Customer/CustomerCare";
import DashboardUser from "./pages/Customer/DashboardUser";
import Tagihan from "./pages/Tagihan";
// import { useStateContext } from "./context/ContextProvider";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DataDiri from "./pages/DataDiri";
import Pembayaran from "./pages/Customer/Pembayaran";
import { ChakraProvider } from "@chakra-ui/react";
import Page404 from "./pages/Page404";
import DashboardAdmin from "./pages/Admin/DashboardAdmin";
import UserPassword from "./pages/UserPassword";
import DataAkunCustomer from "./pages/Admin/DataAkunCustomer";
import DataAkunBilling from "./pages/Admin/DataAkunBilling";
import DataAkunAdmin from "./pages/Admin/DataAkunAdmin";
import DataDevice from "./pages/Admin/DataDevice";
import DataKeluhan from "./pages/Admin/DataKeluhan";
import DashboardBilling from "./pages/Billing/DashboardBilling";
import TransaksiPelanggan from "./pages/Billing/TransaksiPelanggan";
import HargaAir from "./pages/Billing/HargaAir";
import RegisterDevice from "./pages/Customer/RegisterDevice";
import CreateDevice from "./pages/Admin/CreateDevice";
import RequireAuth from "./hooks/RequireAuth";

function App() {
  return (
    <div className="w-screen deafult:h-screen 5xl:h-[1080px] App">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            {/* General Links */}
            <Route path="/login" index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/data-diri" element={<DataDiri />} />
            <Route path="/register-device" element={<RegisterDevice />} />
            <Route path="/username" element={<UserPassword />} />

            <Route element={<RequireAuth />}>
              {/* Customer Links */}
              <Route path="/dashboard-user" element={<DashboardUser />} />
              <Route path="/tagihan" element={<Tagihan />} />
              <Route path="/customer-care" element={<CustomerCare />} />
              <Route path="/pembayaran" element={<Pembayaran />} />

              {/* Admin Links */}
              <Route path="/dashboard-admin" element={<DashboardAdmin />} />
              <Route path="/data-akun-cust" element={<DataAkunCustomer />} />
              <Route path="/data-akun-billing" element={<DataAkunBilling />} />
              <Route path="/data-akun-admin" element={<DataAkunAdmin />} />
              <Route path="/data-keluhan" element={<DataKeluhan />} />
              <Route path="/data-device" element={<DataDevice />} />
              <Route path="/create-device" element={<CreateDevice />} />

              {/* Billing Links */}
              <Route path="/dashboard-billing" element={<DashboardBilling />} />
              <Route path="/transaksi" element={<TransaksiPelanggan />} />
              <Route path="/harga-air" element={<HargaAir />} />
            </Route>

            {/* Missing Links */}
            <Route path="/*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
