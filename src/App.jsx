import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllHistoryPage from "./pages/AllHistoryPage";
import CoinHistoryPage from "./pages/CoinHistoryPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/history" element={<AllHistoryPage />} />
          <Route path="/history/:coinId" element={<CoinHistoryPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
