import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from './pages/home/Home';
import ContractPage from './pages/contract/ContractPage';
import React from "react"
const router =

  createBrowserRouter(
    createRoutesFromElements(
      <React.Fragment>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contract' element={<ContractPage />} ></Route>

      </React.Fragment>
    )
  )





function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
