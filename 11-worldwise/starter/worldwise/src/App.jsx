import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'
import Homepage from './pages/Homepage'
import PageNotFound from './pages/PageNotFound' 
import CityList from './components/CityList'
import CountryList from './components/CountryList'
import City from './components/City'
import Form from './components/Form'

const BASE_URL = 'http://localhost:3001'

function App() {
  const [cities, setCities] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch {
        alert('Error loading data...')
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  return ( 
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}> 
            <Route index element={<Navigate to="cities" replace />} /> 
            <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} /> 
            <Route path="cities/:id" element={<City />}/>
            <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />} /> 
            <Route path="form" element={<Form />} /> 
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App
