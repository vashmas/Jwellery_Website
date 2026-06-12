import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products.php?id=${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
  }, [id])

  if (loading) return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ color: '#C9A84C', fontSize: '18px' }}>Loading...</p>
    </div>
  )

  if (!product) return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p style={{ color: '#888', fontSize: '18px' }}>Product not found!</p>
    </div>
  )

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', padding: '60px 40px' }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'start'
      }}>

        {/* Left - Image */}
        <div style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          border: '1px solid #2a2a2a'
        }}>
          {product.image ? (
            <img
              src={`http://localhost/VS_Jwellers/uploads/${product.image}`}
              alt={product.name}
              style={{ width: '100%', objectFit: 'contain', maxHeight: '450px' }}
            />
          ) : (
            <div style={{
              height: '450px', backgroundColor: '#2a2a2a',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <p style={{ color: '#555' }}>NO IMAGE</p>
            </div>
          )}
        </div>

        {/* Right - Details */}
        <div>
          <p style={{ color: '#C9A84C', letterSpacing: '3px', fontSize: '13px', marginBottom: '10px' }}>
            {product.category}
          </p>
          <h1 style={{
            color: '#ffffff', fontSize: '36px',
            fontFamily: 'Georgia, serif', marginBottom: '15px'
          }}>
            {product.name}
          </h1>
          <p style={{
            color: '#C9A84C', fontSize: '28px',
            fontFamily: 'Georgia, serif', marginBottom: '25px'
          }}>
            Rs. {product.price}
          </p>

          {/* Divider */}
          <div style={{ borderTop: '1px solid #2a2a2a', marginBottom: '25px' }} />

          {/* Description */}
          {product.description && (
            <div style={{ marginBottom: '30px' }}>
              <p style={{ color: '#888', letterSpacing: '2px', fontSize: '12px', marginBottom: '10px' }}>
                DESCRIPTION
              </p>
              <p style={{ color: '#ccc', fontSize: '15px', lineHeight: '1.9' }}>
                {product.description}
              </p>
            </div>
          )}

          {/* WhatsApp Button */}
          
            <a href={`https://wa.me/923704512913?text=Hi! I want to order ${product.name} (Rs. ${product.price})`}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'block',
              backgroundColor: '#25D366',
              color: '#ffffff',
              padding: '15px',
              textAlign: 'center',
              textDecoration: 'none',
              letterSpacing: '2px',
              fontWeight: 'bold',
              fontSize: '15px',
              marginBottom: '15px'
            }}
          >
            ORDER ON WHATSAPP 🟢
          </a>

          {/* Back Button */}
          <a href="/products" style={{
            display: 'block',
            border: '1px solid #C9A84C',
            color: '#C9A84C',
            padding: '15px',
            textAlign: 'center',
            textDecoration: 'none',
            letterSpacing: '2px',
            fontSize: '14px'
          }}>
            ← BACK TO PRODUCTS
          </a>
        </div>

      </div>
    </div>
  )
}

export default ProductDetail