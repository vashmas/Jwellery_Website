import { useState, useEffect } from 'react'

function AdminDashboard({ onLogout }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    name: '', price: '', category: '', description: ''
  })
  const [image, setImage] = useState(null)
  const [message, setMessage] = useState('')
  
const categories = ['Necklace', 'Earrings', 'Ring', 'Bracelet', 'Bangles']

  // Products fetch karo
  const fetchProducts = () => {
    fetch('http://localhost/VS_Jwellers/products.php')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
  }

  useEffect(() => { fetchProducts() }, [])

  // Image upload
  const uploadImage = async () => {
    if (!image) return null
    const formData = new FormData()
    formData.append('image', image)
    const res = await fetch('http://localhost/VS_Jwellers/upload.php', {
      method: 'POST',
      body: formData
    })
    const data = await res.json()
    return data.success ? data.filename : null
  }

  // Product add karo
  const handleSubmit = async () => {
    if (!form.name || !form.price || !form.category) {
      setMessage('Please fill all required fields!')
      return
    }
    const filename = await uploadImage()
    const res = await fetch('http://localhost/VS_Jwellers/products.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, image: filename || '' })
    })
    const data = await res.json()
    if (data.message) {
      setMessage('Product added successfully!')
      setForm({ name: '', price: '', category: '', description: '' })
      setImage(null)
      setShowForm(false)
      fetchProducts()
    }
  }

  // Product delete karo
  const handleDelete = (id) => {
    if (window.confirm('Delete this product?')) {
      fetch(`http://localhost/VS_Jwellers/products.php?id=${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(() => fetchProducts())
    }
  }

  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>

      {/* Top Bar */}
      <div style={{
        backgroundColor: '#111',
        borderBottom: '1px solid #C9A84C',
        padding: '15px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src="/Logo.png" alt="VS Jwellers" style={{ height: '50px' }} />
          <h2 style={{ color: '#C9A84C', fontFamily: 'Georgia, serif', fontSize: '20px' }}>
            Admin Dashboard
          </h2>
        </div>
        <button onClick={onLogout} style={{
          backgroundColor: 'transparent',
          border: '1px solid #C9A84C',
          color: '#C9A84C',
          padding: '8px 20px',
          cursor: 'pointer',
          letterSpacing: '1px'
        }}>
          LOGOUT
        </button>
      </div>

      <div style={{ padding: '40px' }}>

        {/* Message */}
        {message && (
          <p style={{ color: '#25D366', marginBottom: '20px', fontSize: '15px' }}>{message}</p>
        )}

        {/* Add Product Button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h3 style={{ color: '#fff', fontFamily: 'Georgia, serif', fontSize: '24px' }}>
            Products ({products.length})
          </h3>
          <button onClick={() => setShowForm(!showForm)} style={{
            backgroundColor: '#C9A84C',
            color: '#0a0a0a',
            border: 'none',
            padding: '12px 25px',
            cursor: 'pointer',
            fontWeight: 'bold',
            letterSpacing: '1px'
          }}>
            {showForm ? 'CANCEL' : '+ ADD PRODUCT'}
          </button>
        </div>

        {/* Add Product Form */}
        {showForm && (
          <div style={{
            backgroundColor: '#1a1a1a',
            border: '1px solid #C9A84C',
            padding: '30px',
            marginBottom: '30px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '15px'
          }}>
            <input placeholder="Product Name *" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              style={{ padding: '12px', backgroundColor: '#2a2a2a', border: '1px solid #333', color: '#fff' }} />

            <input placeholder="Price *" type="number" value={form.price}
              onChange={e => setForm({ ...form, price: e.target.value })}
              style={{ padding: '12px', backgroundColor: '#2a2a2a', border: '1px solid #333', color: '#fff' }} />

            <select value={form.category}
              onChange={e => setForm({ ...form, category: e.target.value })}
              style={{ padding: '12px', backgroundColor: '#2a2a2a', border: '1px solid #333', color: '#fff' }}>
              <option value="">Select Category *</option>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>{cat}</option>
              ))}
            </select>

            <input type="file" accept="image/*"
              onChange={e => setImage(e.target.files[0])}
              style={{ padding: '12px', backgroundColor: '#2a2a2a', border: '1px solid #333', color: '#fff' }} />

            <textarea placeholder="Description" value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
              style={{
                padding: '12px', backgroundColor: '#2a2a2a', border: '1px solid #333',
                color: '#fff', gridColumn: '1 / -1', height: '80px', resize: 'none'
              }} />

            <button onClick={handleSubmit} style={{
              gridColumn: '1 / -1',
              backgroundColor: '#C9A84C',
              color: '#0a0a0a',
              border: 'none',
              padding: '14px',
              cursor: 'pointer',
              fontWeight: 'bold',
              fontSize: '15px',
              letterSpacing: '2px'
            }}>
              ADD PRODUCT
            </button>
          </div>
        )}

        {/* Products Table */}
        {loading ? (
          <p style={{ color: '#C9A84C', textAlign: 'center' }}>Loading...</p>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #C9A84C' }}>
                {['Image', 'Name', 'Category', 'Price', 'Action'].map((h, i) => (
                  <th key={i} style={{ color: '#C9A84C', padding: '12px', textAlign: 'left', letterSpacing: '1px', fontSize: '13px' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} style={{ borderBottom: '1px solid #1f1f1f' }}>
                  <td style={{ padding: '12px' }}>
                    {product.image ? (
                      <img src={`http://localhost/VS_Jwellers/uploads/${product.image}`}
                        alt={product.name}
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '60px', height: '60px', backgroundColor: '#2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ color: '#555', fontSize: '11px' }}>NO IMG</span>
                      </div>
                    )}
                  </td>
                  <td style={{ padding: '12px', color: '#fff' }}>{product.name}</td>
                  <td style={{ padding: '12px', color: '#888' }}>{product.category}</td>
                  <td style={{ padding: '12px', color: '#C9A84C' }}>Rs. {product.price}</td>
                  <td style={{ padding: '12px' }}>
                    <button onClick={() => handleDelete(product.id)} style={{
                      backgroundColor: 'transparent',
                      border: '1px solid red',
                      color: 'red',
                      padding: '6px 15px',
                      cursor: 'pointer',
                      fontSize: '12px'
                    }}>
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default AdminDashboard