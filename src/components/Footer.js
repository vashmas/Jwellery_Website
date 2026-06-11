function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0d0d0d',
      borderTop: '2px solid #C9A84C',
      padding: '60px 40px 25px',
    }}>

      {/* Top Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.5fr 1fr 1fr',
        gap: '40px',
        maxWidth: '1100px',
        margin: '0 auto 50px'
      }}>

        {/* Logo + Tagline */}
        <div>
          <img src="/Logo.png" alt="VS Jwellers" style={{ height: '90px', objectFit: 'contain' }} />
          <p style={{ color: '#777', fontSize: '14px', lineHeight: '2', marginTop: '15px', maxWidth: '280px' }}>
            Premium fashion jewellery & accessories for every occasion. Crafted with elegance, made for you.
          </p>
          {/* WhatsApp Button */}
          <a href="https://wa.me/923704512913" target="_blank" rel="noreferrer" style={{
            display: 'inline-block',
            marginTop: '20px',
            backgroundColor: '#25D366',
            color: '#fff',
            padding: '10px 22px',
            fontSize: '13px',
            textDecoration: 'none',
            letterSpacing: '1px',
            fontWeight: 'bold'
          }}>
            🟢 ORDER ON WHATSAPP
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{
            color: '#C9A84C',
            letterSpacing: '3px',
            fontSize: '13px',
            marginBottom: '25px',
            paddingBottom: '10px',
            borderBottom: '1px solid #2a2a2a'
          }}>
            QUICK LINKS
          </h4>
          {[
            { label: 'Home', path: '/' },
            { label: 'Products', path: '/products' },
            { label: 'About', path: '/about' },
            { label: 'Contact', path: '/contact' },
          ].map((item, i) => (
            <a key={i} href={item.path} style={{
              display: 'block',
              color: '#777',
              fontSize: '14px',
              marginBottom: '12px',
              textDecoration: 'none',
              letterSpacing: '1px',
              transition: 'color 0.3s'
            }}
            onMouseEnter={e => e.target.style.color = '#C9A84C'}
            onMouseLeave={e => e.target.style.color = '#777'}
            >
              → {item.label}
            </a>
          ))}
        </div>

        {/* Social Media */}
        <div>
          <h4 style={{
            color: '#C9A84C',
            letterSpacing: '3px',
            fontSize: '13px',
            marginBottom: '25px',
            paddingBottom: '10px',
            borderBottom: '1px solid #2a2a2a'
          }}>
            FOLLOW US
          </h4>
          {[
            { icon: '📸', label: 'Instagram', link: 'https://instagram.com/vsj_wellers' },
            { icon: '👥', label: 'Facebook', link: 'https://facebook.com/VSjwellers' },
            { icon: '🎵', label: 'TikTok', link: 'https://tiktok.com/@VS_Jwellers' },
            { icon: '🟢', label: 'WhatsApp', link: 'https://wa.me/923704512913' },
          ].map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noreferrer" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              color: '#777',
              fontSize: '14px',
              marginBottom: '15px',
              textDecoration: 'none',
              letterSpacing: '1px'
            }}
            onMouseEnter={e => e.target.style.color = '#C9A84C'}
            onMouseLeave={e => e.target.style.color = '#777'}
            >
              <span style={{ fontSize: '20px' }}>{item.icon}</span> {item.label}
            </a>
          ))}
        </div>

      </div>

      {/* Divider */}
      <div style={{ borderTop: '1px solid #1f1f1f', maxWidth: '1100px', margin: '0 auto' }} />

      {/* Bottom */}
      <div style={{
        maxWidth: '1100px',
        margin: '20px auto 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '10px'
      }}>
        <p style={{ color: '#444', fontSize: '13px' }}>
          ©  VS Jwellers
        </p>
        <p style={{ color: '#444', fontSize: '13px' }}>
          Fashion Jewellery & Accessories 💍
        </p>
      </div>

    </footer>
  )
}

export default Footer