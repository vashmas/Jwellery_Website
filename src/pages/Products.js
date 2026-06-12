import { useState, useEffect } from 'react'

const categories = ['All', 'Necklace', 'Earrings', 'Ring', 'Bracelet', 'Bangles']

function Products() {
  const [active, setActive] = useState('All')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/products.php`)
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      })
  }, [])

  const filtered = active === 'All'
    ? products
    : products.filter(p => p.category === active)

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', padding: '50px 40px' }}>

      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <p style={{ color: '#C9A84C', letterSpacing: '4px', fontSize: '13px' }}>EXPLORE</p>
        <h2 style={{ color: '#ffffff', fontSize: '36px', fontFamily: 'Georgia, serif', margin: '10px 0' }}>
          Our Collection
        </h2>
      </div>

      {/* Filter Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
        {categories.map((cat, i) => (
          <button key={i} onClick={() => setActive(cat)} style={{
            backgroundColor: active === cat ? '#C9A84C' : 'transparent',
            color: active === cat ? '#0a0a0a' : '#C9A84C',
            border: '1px solid #C9A84C',
            padding: '10px 25px',
            cursor: 'pointer',
            letterSpacing: '1px',
            fontSize: '13px'
          }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && (
        <p style={{ textAlign: 'center', color: '#C9A84C', fontSize: '18px' }}>
          Loading...
        </p>
      )}

      {/* No Products */}
      {!loading && filtered.length === 0 && (
        <p style={{ textAlign: 'center', color: '#888', fontSize: '16px' }}>
          No products found!
        </p>
      )}

      {/* Products Grid */}
      {!loading && (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '25px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          {filtered.map((product) => (
            <div key={product.id} style={{
              backgroundColor: '#1a1a1a',
              border: '1px solid #2a2a2a',
              padding: '20px',
              textAlign: 'center'
            }}>
              {/* Product Image */}
              <div style={{
                backgroundColor: '#2a2a2a',
                height: '250px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '15px',
                overflow: 'hidden'
              }}>
                {product.image ? (
                  <img
                    src={`http://localhost/VS_Jwellers/uploads/${product.image}`}
                    alt={product.name}
                    style={{ width: '100%', height: '250px', objectFit: 'contain' , backgroundColor: '#fff' }}
                  />
                ) : (
                  <p style={{ color: '#555', fontSize: '13px', letterSpacing: '2px' }}>NO IMAGE</p>
                )}
              </div>

              <p style={{ color: '#888', fontSize: '12px', letterSpacing: '2px' }}>{product.category}</p>
              <h3 style={{ color: '#ffffff', fontSize: '18px', margin: '8px 0' }}>{product.name}</h3>
              <p style={{ color: '#C9A84C', fontSize: '16px' }}>Rs. {product.price}</p>

             <a href={`/product/${product.id}`}
  style={{
    display: 'block',
    backgroundColor: 'transparent',
    border: '1px solid #C9A84C',
    color: '#C9A84C',
    padding: '10px 25px',
    marginTop: '15px',
    textDecoration: 'none',
    letterSpacing: '1px',
    fontSize: '13px',
    textAlign: 'center'
  }}
>
  VIEW DETAILS
</a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Products