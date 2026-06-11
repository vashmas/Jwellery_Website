function About() {
  return (
    <div style={{ backgroundColor: '#0a0a0a', minHeight: '100vh' }}>

      {/* Hero */}
      <div style={{
        backgroundColor: '#111111',
        padding: '80px 40px',
        textAlign: 'center',
        borderBottom: '1px solid #C9A84C'
      }}>
        <p style={{ color: '#C9A84C', letterSpacing: '4px', fontSize: '13px' }}>WHO WE ARE</p>
        <h2 style={{ color: '#ffffff', fontSize: '40px', fontFamily: 'Georgia, serif', margin: '15px 0' }}>
          About VS Jwellers
        </h2>
        <p style={{ color: '#888', fontSize: '16px', maxWidth: '600px', margin: '0 auto', lineHeight: '1.9' }}>
          VS Jwellers is a premium fashion jewellery brand based in Pakistan, 
          offering elegant and affordable accessories for every occasion.
        </p>
      </div>

      {/* Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '25px',
        maxWidth: '1100px',
        margin: '60px auto',
        padding: '0 40px'
      }}>
        {[
          { icon: '💍', title: 'Premium Quality', desc: 'Every piece is carefully selected to ensure the highest quality and elegance.' },
          { icon: '🚚', title: 'Fast Delivery', desc: 'We deliver across Pakistan quickly and safely to your doorstep.' },
          { icon: '💰', title: 'Affordable Prices', desc: 'Luxury look at budget-friendly prices — style should not break the bank.' },
        ].map((item, i) => (
          <div key={i} style={{
            backgroundColor: '#1a1a1a',
            border: '1px solid #2a2a2a',
            padding: '35px 25px',
            textAlign: 'center'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>{item.icon}</div>
            <h3 style={{ color: '#C9A84C', fontSize: '20px', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>
              {item.title}
            </h3>
            <p style={{ color: '#888', fontSize: '15px', lineHeight: '1.8' }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Story */}
      <div style={{
        maxWidth: '700px',
        margin: '0 auto 80px',
        padding: '0 40px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#C9A84C', letterSpacing: '4px', fontSize: '13px' }}>OUR STORY</p>
        <h3 style={{ color: '#ffffff', fontSize: '32px', fontFamily: 'Georgia, serif', margin: '15px 0' }}>
          Passion for Jewellery
        </h3>
        <p style={{ color: '#888', fontSize: '16px', lineHeight: '1.9' }}>
          VS Jwellers was born from a passion for beautiful, affordable fashion jewellery. 
          We believe every woman deserves to feel special and confident. 
          Our collection is designed to complement every outfit and every occasion — 
          from casual everyday wear to grand bridal events.
        </p>

        <a href="/products" style={{
          display: 'inline-block',
          backgroundColor: '#C9A84C',
          color: '#0a0a0a',
          padding: '14px 35px',
          marginTop: '30px',
          textDecoration: 'none',
          letterSpacing: '2px',
          fontWeight: 'bold',
          fontSize: '14px'
        }}>
          EXPLORE COLLECTION
        </a>
      </div>

    </div>
  )
}

export default About