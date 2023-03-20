import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter,
  Routes,
  Route,
  } from "react-router-dom";
import "./Index.css"
import App from "./App";
import Home from './Home'
import About from './About'
import Faqs from './Faqs'
import { Faq } from "./Faqs";
import { ErrorComponent } from "./ErrorComponent";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} >
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/faqs' element={<Faqs/>} />
        <Route path='faqs/:id' element={<Faq/>} />
        </Route>
        <Route path='*' element={<ErrorComponent/>} />
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
)