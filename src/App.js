import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CustomerCare from "./pages/CustomerCare";
import DashboardUser from "./pages/DashboardUser";
import Tagihan from "./pages/Tagihan";

function App() {
  return (
    <div className="flex App bg-Primary-Light">
      <BrowserRouter>
        <Sidebar />
        <div className="flex flex-col">
          <Header />
          <Routes>
            <Route path="/" element={<DashboardUser />} />
            <Route path="/tagihan" element={<Tagihan />} />
            <Route path="customer-care" element={<CustomerCare />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
