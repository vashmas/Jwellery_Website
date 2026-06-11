import { useState } from 'react'

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = () => {
    setLoading(true)
    fetch('http://localhost/VS_Jwellers/admin_login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          localStorage.setItem('admin_token', data.token)
          onLogin()
        } else {
          setError('Invalid username or password!')
        }
        setLoading(false)
      })
  }

  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        backgroundColor: '#1a1a1a',
        border: '1px solid #C9A84C',
        padding: '50px 40px',
        width: '380px',
        textAlign: 'center'
      }}>
        <img src="/Logo.png" alt="VS Jwellers" style={{ height: '80px', objectFit: 'contain', marginBottom: '20px' }} />
        <h2 style={{ color: '#C9A84C', fontFamily: 'Georgia, serif', marginBottom: '30px' }}>Admin Panel</h2>

        {error && <p style={{ color: 'red', marginBottom: '15px', fontSize: '14px' }}>{error}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '15px',
            backgroundColor: '#2a2a2a',
            border: '1px solid #333',
            color: '#fff',
            fontSize: '14px',
            boxSizing: 'border-box'
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '20px',
            backgroundColor: '#2a2a2a',
            border: '1px solid #333',
            color: '#fff',
            fontSize: '14px',
            boxSizing: 'border-box'
          }}
        />

        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            backgroundColor: '#C9A84C',
            color: '#0a0a0a',
            padding: '14px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: 'bold',
            letterSpacing: '2px'
          }}
        >
          {loading ? 'Logging in...' : 'LOGIN'}
        </button>
      </div>
    </div>
  )
}

export default AdminLogin