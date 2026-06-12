import { useState, useEffect } from 'react'

function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
   fetch(`${process.env.REACT_APP_API_URL}/products.php`)
      .then(res => res.json())
     .then(data => {
  const categories = {}
  data.forEach(p => {
    if (!categories[p.category]) {
      categories[p.category] = p
    }
  })
  setProducts(Object.values(categories))
})
  }, [])

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        backgroundColor: '#0a0a0a',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '40px'
      }}>
        <p style={{ color: '#C9A84C', letterSpacing: '4px', fontSize: '14px', marginBottom: '20px' }}>
          WELCOME TO
        </p>
        <h1 style={{
          color: '#ffffff',
          fontSize: '60px',
          fontFamily: 'Georgia, serif',
          marginBottom: '10px'
        }}>
          VS Jwellers
        </h1>
        <p style={{
          color: '#C9A84C',
          fontSize: '18px',
          letterSpacing: '3px',
          marginBottom: '30px'
        }}>
          FASHION JEWELLERY & ACCESSORIES
        </p>
        <p style={{ color: '#888', fontSize: '16px', maxWidth: '500px', lineHeight: '1.8' }}>
          Discover our exclusive collection of premium fashion jewellery,
          crafted to make you shine at every occasion.
        </p>
        <div style={{ display: 'flex', gap: '20px', marginTop: '40px' }}>
          <a href="/products" style={{
            backgroundColor: '#C9A84C',
            color: '#0a0a0a',
            padding: '14px 35px',
            fontSize: '14px',
            letterSpacing: '2px',
            fontWeight: 'bold',
            textDecoration: 'none'
          }}>
            SHOP NOW
          </a>
          <a href="/contact" style={{
            border: '1px solid #C9A84C',
            color: '#C9A84C',
            padding: '14px 35px',
            fontSize: '14px',
            letterSpacing: '2px',
            textDecoration: 'none'
          }}>
            CONTACT US
          </a>
        </div>
      </div>

      {/* Featured Products */}
      <div style={{
        backgroundColor: '#111111',
        padding: '60px 40px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#C9A84C', letterSpacing: '4px', fontSize: '13px' }}>OUR COLLECTION</p>
        <h2 style={{ color: '#ffffff', fontSize: '36px', fontFamily: 'Georgia, serif', margin: '10px 0 40px' }}>
          Featured Products
        </h2>

        {products.length === 0 ? (
          <p style={{ color: '#888' }}>No products yet!</p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '25px',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {products.map((product) => (
              <div key={product.id} style={{
                backgroundColor: '#1a1a1a',
                border: '1px solid #2a2a2a',
                padding: '20px',
                textAlign: 'center'
              }}>
                <div style={{
                  height: '250px',
                  overflow: 'hidden',
                  marginBottom: '15px'
                }}>
                  {product.image ? (
                    <img
                      src={`http://localhost/VS_Jwellers/uploads/${product.image}`}
                      alt={product.name}
                      style={{ width: '100%', height: '250px', objectFit: 'contain', backgroundColor: '#fff' }}
                    />
                  ) : (
                    <div style={{
                      backgroundColor: '#2a2a2a',
                      height: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <p style={{ color: '#555', fontSize: '13px' }}>NO IMAGE</p>
                    </div>
                  )}
                </div>
                <p style={{ color: '#888', fontSize: '12px', letterSpacing: '2px' }}>{product.category}</p>
                <h3 style={{ color: '#ffffff', fontSize: '18px', margin: '8px 0' }}>{product.name}</h3>
                <p style={{ color: '#C9A84C', fontSize: '16px' }}>Rs. {product.price}</p>
                
                 <a href={`https://wa.me/923704512913?text=Hi! I want to order ${product.name}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'block',
                    backgroundColor: '#25D366',
                    color: '#ffffff',
                    padding: '10px 25px',
                    marginTop: '15px',
                    textDecoration: 'none',
                    letterSpacing: '1px',
                    fontSize: '13px'
                  }}
                >
                  ORDER ON WHATSAPP 🟢
                </a>
              </div>
            ))}
          </div>
        )}

        {/* View All Button */}
        <a href="/products" style={{
          display: 'inline-block',
          marginTop: '40px',
          border: '1px solid #C9A84C',
          color: '#C9A84C',
          padding: '14px 40px',
          textDecoration: 'none',
          letterSpacing: '2px',
          fontSize: '14px'
        }}>
          VIEW ALL PRODUCTS
        </a>
      </div>
    </div>
  )
}

export default Home