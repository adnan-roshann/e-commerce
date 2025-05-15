import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserLayout from "./Components/Layout/UserLayout";
import React from "react";



function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<UserLayout/>}>
      {}</Route>
      <Route>{}</Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
