import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
import CustomerCare from "./pages/CustomerCare";
import DashboardUser from "./pages/DashboardUser";
import Tagihan from "./pages/Tagihan";
// import { useStateContext } from "./context/ContextProvider";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DataDiri from "./pages/DataDiri";
import Pembayaran from "./pages/Pembayaran";
import { ChakraProvider } from "@chakra-ui/react";

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
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

export default App;
