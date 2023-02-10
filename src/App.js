import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BestSellers from './Pages/BestSellers/BestSellers';
import CustomerService from './Pages/CustomerService/CustomerService';
import GiftIdeas from './Pages/GiftIdeas/GiftIdeas';
import Home from './Pages/Home/Home';
import NewReleases from './Pages/NewReleases/NewReleases';
import NotFound from './Pages/NotFound/NotFound';
import TodaysDeals from './Pages/TodaysDeals/TodaysDeals';


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/best-sellers" exact element={<BestSellers />} />
          <Route path="/gift-ideas" element={<GiftIdeas />} />
          <Route path="/new-releases" element={<NewReleases />} />
          <Route path="/todays-deals" element={<TodaysDeals />} />
          <Route path="/customer-service" element={<CustomerService />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
