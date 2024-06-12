import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import Login from './pages/Login'
import AppLayout from './pages/AppLayout'
import Homepage from './pages/Homepage'
import PageNotFound from './pages/PageNotFound' 

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="product" element={<Product />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}> 
            <Route index element={<p>List of cities</p>} /> 
            <Route path="cities" element={<p>List of cities</p>} /> 
            <Route path="countries" element={<p>Countries</p>} /> 
            <Route path="form" element={<p>Form</p>} /> 
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App
