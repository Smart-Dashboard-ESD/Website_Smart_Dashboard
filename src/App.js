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
import DataKeluhan from "./pages/Admin/DataKeluhan";
import DashboardBilling from "./pages/Billing/DashboardBilling";
import TransaksiPelanggan from "./pages/Billing/TransaksiPelanggan";
import HargaAir from "./pages/Billing/HargaAir";
import RegisterDevice from "./pages/Customer/RegisterDevice";

function App() {
  return (
    <div className="w-screen h-screen App">
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardUser />} />
            <Route path="/tagihan" element={<Tagihan />} />
            <Route path="/customer-care" element={<CustomerCare />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/data-diri" element={<DataDiri />} />
            <Route path="/pembayaran" element={<Pembayaran />} />
            <Route path="*" element={<Page404 />} />
            <Route path="/dashboard-admin" element={<DashboardAdmin />} />
            <Route path="/username" element={<UserPassword />} />
            <Route path="/data-akun-cust" element={<DataAkunCustomer />} />
            <Route path="/data-akun-billing" element={<DataAkunBilling />} />
            <Route path="/data-akun-admin" element={<DataAkunAdmin />} />
            <Route path="/data-keluhan" element={<DataKeluhan />} />
            <Route path="/dashboard-billing" element={<DashboardBilling />} />
            <Route path="/transaksi" element={<TransaksiPelanggan />} />
            <Route path="/harga-air" element={<HargaAir />} />
            <Route path="/register-device" element={<RegisterDevice />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
