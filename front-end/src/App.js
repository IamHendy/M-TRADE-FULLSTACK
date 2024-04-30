import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
} from "./Routes/Routes.js";
import { ToastContainer, toast } from "react-toastify"; // Import toast from react-toastify for notifications
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { server } from "./server";

const App = () => { // Correct the function declaration syntax
  useEffect(() => {
    axios
      .get(`${server}/user/getuser`, { withCredentials: true }) // Correct string interpolation syntax
      .then((res) => {
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  }, []); // Correct the dependency array

  return (
    <BrowserRouter>        
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/activation/:activation_token" element={<ActivationPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faq" element={<FAQPage />} />


      </Routes>     
    </BrowserRouter>
  );
}

export default App;
