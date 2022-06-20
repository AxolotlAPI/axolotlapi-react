import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";

import PageHome from "./pages/PageHome";
import PageLogin from "./pages/PageLogin";
import PagePricing from "./pages/PagePricing";

import "./css/style.css";

function App() {
    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<PageHome />} />
                <Route path="/pricing" element={<PagePricing />} />
                <Route path="/login" element={<PageLogin />} />
            </Routes>
        </BrowserRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);