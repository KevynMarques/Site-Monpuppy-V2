import {Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import Home from "./Pages/Home";
import Operation from "./Pages/Operation";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";

const Rotas = () => {

     return (
       <Fragment>
           <Routes >
             <Route path="/" element={<Home />} /> 
             <Route path="/ComoFunciona" element={<Operation />} /> 
             <Route path="/Produtos" element={<Products />} /> 
             <Route path="/Contato" element={<Contact />} /> 
           </Routes>
       </Fragment>
     );
   }


   export default Rotas