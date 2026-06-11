function Contact() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>

      {/* Heading */}
      <div style={{
        backgroundColor: '#111111',
        padding: '80px 40px',
        textAlign: 'center',
        borderBottom: '1px solid #C9A84C'
      }}>
        <p style={{ color: '#C9A84C', letterSpacing: '4px', fontSize: '13px' }}>GET IN TOUCH</p>
        <h2 style={{ color: '#ffffff', fontSize: '40px', fontFamily: 'Georgia, serif', margin: '15px 0' }}>
          Contact Us
        </h2>
        <p style={{ color: '#888', fontSize: '16px' }}>
          We'd love to hear from you!
        </p>
      </div>

      {/* Content */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        maxWidth: '1000px',
        margin: '60px auto',
        padding: '0 40px'
      }}>

        {/* Left - Contact Info */}
        <div>
          <h3 style={{ color: '#C9A84C', fontSize: '24px', fontFamily: 'Georgia, serif', marginBottom: '30px' }}>
            Reach Us On
          </h3>

          {[
            { icon: '🟢', label: 'WhatsApp', value: '+92 370 451 2913', link: 'https://wa.me/923704512913' },
            { icon: '📸', label: 'Instagram', value: '@vsj_wellers', link: 'https://www.instagram.com/vsj_wellers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
            { icon: '👥', label: 'Facebook', value: 'VSjwellers', link: 'https://facebook.com/VSjwellers' },
            ,
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              marginBottom: '25px',
              backgroundColor: '#1a1a1a',
              padding: '20px',
              border: '1px solid #2a2a2a'
            }}>
              <span style={{ fontSize: '28px' }}>{item.icon}</span>
              <div>
                <p style={{ color: '#888', fontSize: '12px', letterSpacing: '2px' }}>{item.label}</p>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noreferrer"
                    style={{ color: '#C9A84C', fontSize: '16px', textDecoration: 'none' }}>
                    {item.value}
                  </a>
                ) : (
                  <p style={{ color: '#C9A84C', fontSize: '16px' }}>{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right - WhatsApp CTA */}
        <div style={{
          backgroundColor: '#1a1a1a',
          border: '1px solid #C9A84C',
          padding: '40px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '20px'
        }}>
          <span style={{ fontSize: '60px' }}>💍</span>
          <h3 style={{ color: '#ffffff', fontSize: '24px', fontFamily: 'Georgia, serif' }}>
            Place Your Order
          </h3>
          <p style={{ color: '#888', fontSize: '15px', lineHeight: '1.8' }}>
            Browse our collection and order directly on WhatsApp. 
            Fast, easy and secure!
          </p>
          
           <a href="https://wa.me/923704512913?text=Hi! I want to place an order"
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundColor: '#25D366',
              color: '#ffffff',
              padding: '15px 35px',
              textDecoration: 'none',
              letterSpacing: '2px',
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            ORDER ON WHATSAPP 🟢
          </a>
          
           <a href="/products"
            style={{
              border: '1px solid #C9A84C',
              color: '#C9A84C',
              padding: '15px 35px',
              textDecoration: 'none',
              letterSpacing: '2px',
              fontSize: '14px'
            }}
          >
            VIEW COLLECTION
          </a>
        </div>

      </div>
    </div>
  )
}

export default Contact