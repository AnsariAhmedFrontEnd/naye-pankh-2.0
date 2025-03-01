import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TransactionComponent from "./components/Transactions";
import Dashboard from "./Dashboard";
import Story from "./components/Story";
import FAQ from "./components/Faq";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions" element={<TransactionComponent />} />
        <Route path="/story" element={<Story />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
      </>
  );
};

export default App;
