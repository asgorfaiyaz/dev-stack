import Footer from "./components/footer/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} />{" "}
    </>
  );
}

export default App;
