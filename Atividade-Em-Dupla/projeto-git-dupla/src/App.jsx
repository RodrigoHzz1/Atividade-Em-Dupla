import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}