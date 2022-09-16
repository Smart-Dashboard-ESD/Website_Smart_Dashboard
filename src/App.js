import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CustomerCare from "./pages/CustomerCare";
import DashboardUser from "./pages/DashboardUser";
import Tagihan from "./pages/Tagihan";
import { useStateContext } from "./context/ContextProvider";
import Header from "./components/Header";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

function App() {
  return (
    <div className="flex w-screen h-screen App bg-Primary-Light">
      <BrowserRouter>
        <Sidebar />
        <div className="flex flex-col w-[1150px]">
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
