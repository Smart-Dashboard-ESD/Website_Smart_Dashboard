import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CustomerCare from "./pages/CustomerCare";
import DashboardUser from "./pages/DashboardUser";
import Tagihan from "./pages/Tagihan";

function App() {
  return (
    <div className="flex App bg-Primary-Light">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardUser />} />
          <Route path="/tagihan" element={<Tagihan />} />
          <Route path="customer-care" element={<CustomerCare />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
