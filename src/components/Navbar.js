import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#0a0a0a',
      borderBottom: '1px solid #C9A84C',
      padding: '15px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 999
    }}>
      
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
       <img src="/Logo.png" alt="VS Jwellers" style={{ 
  height: '70px',
  objectFit: 'contain'
}} />
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '30px' }}>
        {['/', '/products', '/about', '/contact'].map((path, i) => (
          <Link
            key={i}
            to={path}
            style={{
              color: '#C9A84C',
              fontSize: '16px',
              fontFamily: 'Georgia, serif',
              letterSpacing: '1px',
              textTransform: 'uppercase'
            }}
          >
            {['Home', 'Products', 'About', 'Contact'][i]}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar