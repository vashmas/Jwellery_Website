import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import AdminLogin from './admin/AdminLogin'
import AdminDashboard from './admin/AdminDashboard'
import './index.css'
import ProductDetail from './pages/ProductDetail'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('admin_token') ? true : false
  )

  const handleLogin = () => setIsLoggedIn(true)
  const handleLogout = () => {
    localStorage.removeItem('admin_token')
    setIsLoggedIn(false)
  }

  return (
    <Router>
      
      <Routes>

        {/* Admin Routes */}
        <Route path="/admin" element={
          isLoggedIn
            ? <AdminDashboard onLogout={handleLogout} />
            : <AdminLogin onLogin={handleLogin} />
        } />

        {/* Main Website Routes */}
        <Route path="/*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </>
        } />

      </Routes>
    </Router>
  )
}

export default App