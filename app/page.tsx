"use client"; // This is required for the buttons to work in Next.js

export default function Home() {
  
  // Helper function to generate the WhatsApp link
  const getWhatsAppLink = (ticketType: string, price: string) => {
    const phoneNumber = "256709071410"; // Britah's WhatsApp Number
    
    // The message that will be pre-filled in WhatsApp
    const message = `Hello Britah Cooked Events! I would like to book a ticket for Meet & Camp.\n\n*Ticket Type:* ${ticketType}\n*Price:* ${price} UGX\n\nPlease let me know how to complete the payment.`;
    
    // Encode the message for the URL
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* HERO SECTION */}
      <section style={{
        position: 'relative',
        width: '100%',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingBottom: '40px'
      }}>
        
        {/* Background Image Layer */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <img 
            src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop" 
            alt="Forest Camping" 
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
          />
          <div style={{ 
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
            background: 'linear-gradient(to bottom, rgba(26, 46, 36, 0.9), rgba(26, 46, 36, 0.5), rgba(26, 46, 36, 0.95))' 
          }}></div>
        </div>

        {/* Content Layer */}
        <div style={{ 
          position: 'relative', 
          zIndex: 10, 
          textAlign: 'center', 
          padding: '0 20px', 
          maxWidth: '800px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}>
          
          {/* Date Badge */}
          <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.1)', 
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            padding: '6px 20px',
            borderRadius: '9999px',
            marginBottom: '20px'
          }}>
            <span style={{ color: '#F4A261', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '11px', fontWeight: 'bold' }}>
              5th & 6th December
            </span>
          </div>
          
          {/* Headline */}
          <h1 style={{ 
            fontFamily: 'var(--font-playfair), serif', 
            fontSize: 'clamp(50px, 12vw, 100px)', 
            lineHeight: '0.95', 
            marginBottom: '16px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <span style={{ color: '#FFFFFF', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>Connect.</span>
            <span style={{ color: '#F4A261', fontStyle: 'italic' }}>Chill.</span>
            <span className="text-stroke">Camp.</span>
          </h1>
          
          {/* Subtext */}
          <p style={{ 
            color: '#E5E7EB', 
            fontSize: 'clamp(14px, 4vw, 18px)', 
            maxWidth: '500px', 
            marginBottom: '32px', 
            fontWeight: '400', 
            lineHeight: '1.5'
          }}>
            Leave the world behind. Unplug at "A Place To Dare."
            <br />
            <span style={{ color: '#F4A261', fontWeight: '600' }}>All-inclusive. Free transport. Unlimited vibes.</span>
          </p>
          
          {/* Hero Booking Button - Scrolls to Pricing */}
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '16px', 
            width: '100%', 
            maxWidth: '400px' 
          }}>
            <a 
              href="#pricing" 
              className="hover-3d"
              style={{
                padding: '18px 32px',
                borderRadius: '9999px',
                backgroundColor: '#D96C3B',
                color: '#FFFFFF',
                fontWeight: 'bold',
                textDecoration: 'none',
                fontSize: '18px',
                boxShadow: '0 10px 25px rgba(217, 108, 59, 0.4)',
                textAlign: 'center',
                display: 'block',
                width: '100%'
              }}
            >
              Book Your Spot Now
            </a>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" style={{ 
        padding: '80px 24px', 
        maxWidth: '1200px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 30
      }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ 
            fontFamily: 'var(--font-playfair), serif', 
            fontSize: 'clamp(32px, 5vw, 48px)', 
            color: '#1A2E24', 
            marginBottom: '16px' 
          }}>
            Secure Your Space
          </h2>
          <p style={{ 
            color: '#2D4D3E', 
            fontSize: '18px', 
            maxWidth: '600px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Hurry, limited spaces available! All packages include meals, swimming, free transport, and a tent.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '32px',
          alignItems: 'stretch'
        }}>
          
          {/* Single Ticket */}
          <div style={{ 
            flex: '1 1 300px',
            maxWidth: '380px',
            backgroundColor: '#FFFFFF', 
            borderRadius: '32px', 
            padding: '40px 32px', 
            boxShadow: '0 10px 40px rgba(0,0,0,0.05)', 
            border: '1px solid #E5E0D8',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '28px', color: '#1A2E24', marginBottom: '8px', marginTop: 0 }}>Single</h3>
            <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '24px' }}>Perfect for solo adventurers</p>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
              <span style={{ fontSize: '18px', color: '#D96C3B', fontWeight: '500' }}>UGX</span>
              <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '48px', color: '#1A2E24' }}>120,000</span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Full Event Access
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> All Meals Included
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Tent & Swimming
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Free Transport
              </li>
            </ul>

            {/* WHATSAPP LINK FOR SINGLE */}
            <a 
              href={getWhatsAppLink("Single Ticket", "120,000")}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'block',
                textAlign: 'center',
                width: '100%', padding: '16px', borderRadius: '9999px', 
                border: '2px solid #1A2E24', backgroundColor: 'transparent', 
                color: '#1A2E24', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer',
                marginTop: 'auto', textDecoration: 'none'
              }}
            >
              Select Single
            </a>
          </div>

          {/* Couple Ticket (Highlighted) */}
          <div style={{ 
            flex: '1 1 300px',
            maxWidth: '380px',
            backgroundColor: '#1A2E24', 
            borderRadius: '32px', 
            padding: '48px 32px', 
            boxShadow: '0 20px 50px rgba(26,46,36,0.3)', 
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            transform: 'scale(1.02)' 
          }}>
            <div style={{ 
              position: 'absolute', top: 0, right: 0, 
              backgroundColor: '#D96C3B', color: '#FFF', 
              padding: '8px 20px', borderBottomLeftRadius: '20px', 
              fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em'
            }}>
              Best Value
            </div>
            <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '28px', color: '#FFFFFF', marginBottom: '8px', marginTop: 0 }}>Couple</h3>
            <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '24px' }}>Bring your favorite person</p>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
              <span style={{ fontSize: '18px', color: '#F4A261', fontWeight: '500' }}>UGX</span>
              <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '56px', color: '#FFFFFF' }}>160,000</span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB', fontSize: '15px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F4A261' }}></span> Full Event Access for 2
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB', fontSize: '15px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F4A261' }}></span> All Meals Included
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB', fontSize: '15px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F4A261' }}></span> Shared Tent & Swimming
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB', fontSize: '15px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F4A261' }}></span> Free Transport for 2
              </li>
            </ul>

            {/* WHATSAPP LINK FOR COUPLE */}
            <a 
              href={getWhatsAppLink("Couple Ticket", "160,000")}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'block',
                textAlign: 'center',
                width: '100%', padding: '16px', borderRadius: '9999px', 
                border: 'none', backgroundColor: '#D96C3B', 
                color: '#FFFFFF', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer',
                marginTop: 'auto', textDecoration: 'none'
              }}
            >
              Select Couple
            </a>
          </div>

          {/* Early Bird */}
          <div style={{ 
            flex: '1 1 300px',
            maxWidth: '380px',
            backgroundColor: '#FFFFFF', 
            borderRadius: '32px', 
            padding: '40px 32px', 
            boxShadow: '0 10px 40px rgba(0,0,0,0.05)', 
            border: '1px solid #E5E0D8',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ 
              position: 'absolute', top: 0, right: 0, 
              backgroundColor: '#F4A261', color: '#1A2E24', 
              padding: '8px 20px', borderBottomLeftRadius: '20px', 
              fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em'
            }}>
              Limited
            </div>
            <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '28px', color: '#1A2E24', marginBottom: '8px', marginTop: 0 }}>Early Bird</h3>
            <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '24px' }}>Secure your spot fast</p>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
              <span style={{ fontSize: '18px', color: '#D96C3B', fontWeight: '500' }}>UGX</span>
              <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '48px', color: '#1A2E24' }}>95,000</span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Full Event Access
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> All Meals Included
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Tent & Swimming
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Free Transport
              </li>
            </ul>

            {/* WHATSAPP LINK FOR EARLY BIRD */}
            <a 
              href={getWhatsAppLink("Early Bird Ticket", "95,000")}
              target="_blank"
              rel="noopener noreferrer"
              style={{ 
                display: 'block',
                textAlign: 'center',
                width: '100%', padding: '16px', borderRadius: '9999px', 
                border: '2px solid #1A2E24', backgroundColor: 'transparent', 
                color: '#1A2E24', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer',
                marginTop: 'auto', textDecoration: 'none'
              }}
            >
              Select Early Bird
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}