// // // "use client"; // This is required for the buttons to work in Next.js

// // // export default function Home() {
  
// // //   // Helper function to generate the WhatsApp link
// // //   const getWhatsAppLink = (ticketType: string, price: string) => {
// // //     const phoneNumber = "256709071410"; // Britah's WhatsApp Number
    
// // //     // The message that will be pre-filled in WhatsApp
// // //     const message = `Hello Britah Cooked Events! I would like to book a ticket for Meet & Camp.\n\n*Ticket Type:* ${ticketType}\n*Price:* ${price} UGX\n\nPlease let me know how to complete the payment.`;
    
// // //     // Encode the message for the URL
// // //     return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
// // //   };

// // //   return (
// // //     <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
      
// // //       {/* HERO SECTION */}
// // //       <section style={{
// // //         position: 'relative',
// // //         width: '100%',
// // //         minHeight: '90vh',
// // //         display: 'flex',
// // //         flexDirection: 'column',
// // //         alignItems: 'center',
// // //         justifyContent: 'center',
// // //         overflow: 'hidden',
// // //         paddingBottom: '40px'
// // //       }}>
        
// // //         {/* Background Image Layer */}
// // //         <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
// // //           <img 
// // //             src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop" 
// // //             alt="Forest Camping" 
// // //             style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
// // //           />
// // //           <div style={{ 
// // //             position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
// // //             background: 'linear-gradient(to bottom, rgba(26, 46, 36, 0.9), rgba(26, 46, 36, 0.5), rgba(26, 46, 36, 0.95))' 
// // //           }}></div>
// // //         </div>

// // //         {/* Content Layer */}
// // //         <div style={{ 
// // //           position: 'relative', 
// // //           zIndex: 10, 
// // //           textAlign: 'center', 
// // //           padding: '0 20px', 
// // //           maxWidth: '800px',
// // //           display: 'flex',
// // //           flexDirection: 'column',
// // //           alignItems: 'center',
// // //           width: '100%'
// // //         }}>
          
// // //           {/* Date Badge */}
// // //           <div style={{ 
// // //             backgroundColor: 'rgba(255, 255, 255, 0.1)', 
// // //             backdropFilter: 'blur(8px)',
// // //             border: '1px solid rgba(255, 255, 255, 0.2)',
// // //             padding: '6px 20px',
// // //             borderRadius: '9999px',
// // //             marginBottom: '20px'
// // //           }}>
// // //             <span style={{ color: '#F4A261', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '11px', fontWeight: 'bold' }}>
// // //               5th & 6th December
// // //             </span>
// // //           </div>
          
// // //           {/* Headline */}
// // //           <h1 style={{ 
// // //             fontFamily: 'var(--font-playfair), serif', 
// // //             fontSize: 'clamp(50px, 12vw, 100px)', 
// // //             lineHeight: '0.95', 
// // //             marginBottom: '16px',
// // //             display: 'flex',
// // //             flexDirection: 'column',
// // //             alignItems: 'center'
// // //           }}>
// // //             <span style={{ color: '#FFFFFF', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>Connect.</span>
// // //             <span style={{ color: '#F4A261', fontStyle: 'italic' }}>Chill.</span>
// // //             <span className="text-stroke">Camp.</span>
// // //           </h1>
          
// // //           {/* Subtext */}
// // //           <p style={{ 
// // //             color: '#E5E7EB', 
// // //             fontSize: 'clamp(14px, 4vw, 18px)', 
// // //             maxWidth: '500px', 
// // //             marginBottom: '32px', 
// // //             fontWeight: '400', 
// // //             lineHeight: '1.5'
// // //           }}>
// // //             Leave the world behind. Unplug at "A Place To Dare."
// // //             <br />
// // //             <span style={{ color: '#F4A261', fontWeight: '600' }}>All-inclusive. Free transport. Unlimited vibes.</span>
// // //           </p>
          
// // //           {/* Hero Booking Button - Scrolls to Pricing */}
// // //           <div style={{ 
// // //             display: 'flex', 
// // //             flexDirection: 'column', 
// // //             gap: '16px', 
// // //             width: '100%', 
// // //             maxWidth: '400px' 
// // //           }}>
// // //             <a 
// // //               href="#pricing" 
// // //               className="hover-3d"
// // //               style={{
// // //                 padding: '18px 32px',
// // //                 borderRadius: '9999px',
// // //                 backgroundColor: '#D96C3B',
// // //                 color: '#FFFFFF',
// // //                 fontWeight: 'bold',
// // //                 textDecoration: 'none',
// // //                 fontSize: '18px',
// // //                 boxShadow: '0 10px 25px rgba(217, 108, 59, 0.4)',
// // //                 textAlign: 'center',
// // //                 display: 'block',
// // //                 width: '100%'
// // //               }}
// // //             >
// // //               Book Your Spot Now
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* PRICING SECTION */}
// // //       <section id="pricing" style={{ 
// // //         padding: '80px 24px', 
// // //         maxWidth: '1200px', 
// // //         margin: '0 auto',
// // //         position: 'relative',
// // //         zIndex: 30
// // //       }}>
        
// // //         {/* Header */}
// // //         <div style={{ textAlign: 'center', marginBottom: '60px' }}>
// // //           <h2 style={{ 
// // //             fontFamily: 'var(--font-playfair), serif', 
// // //             fontSize: 'clamp(32px, 5vw, 48px)', 
// // //             color: '#1A2E24', 
// // //             marginBottom: '16px' 
// // //           }}>
// // //             Secure Your Space
// // //           </h2>
// // //           <p style={{ 
// // //             color: '#2D4D3E', 
// // //             fontSize: '18px', 
// // //             maxWidth: '600px', 
// // //             margin: '0 auto',
// // //             lineHeight: '1.6'
// // //           }}>
// // //             Hurry, limited spaces available! All packages include meals, swimming, free transport, and a tent.
// // //           </p>
// // //         </div>

// // //         {/* Cards Grid */}
// // //         <div style={{ 
// // //           display: 'flex', 
// // //           flexWrap: 'wrap', 
// // //           justifyContent: 'center', 
// // //           gap: '32px',
// // //           alignItems: 'stretch'
// // //         }}>
          
// // //           {/* Single Ticket */}
// // //           <div style={{ 
// // //             flex: '1 1 300px',
// // //             maxWidth: '380px',
// // //             backgroundColor: '#FFFFFF', 
// // //             borderRadius: '32px', 
// // //             padding: '40px 32px', 
// // //             boxShadow: '0 10px 40px rgba(0,0,0,0.05)', 
// // //             border: '1px solid #E5E0D8',
// // //             position: 'relative',
// // //             display: 'flex',
// // //             flexDirection: 'column'
// // //           }}>
// // //             <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '28px', color: '#1A2E24', marginBottom: '8px', marginTop: 0 }}>Single</h3>
// // //             <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '24px' }}>Perfect for solo adventurers</p>
            
// // //             <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
// // //               <span style={{ fontSize: '18px', color: '#D96C3B', fontWeight: '500' }}>UGX</span>
// // //               <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '48px', color: '#1A2E24' }}>120,000</span>
// // //             </div>

// // //             <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
// // //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
// // //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Full Event Access
// // //               </li>
// // //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
// // //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> All Meals Included
// // //               </li>
// // //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
// // //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Tent & Swimming
// // //               </li>
// // //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
// // //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Free Transport
// // //               </li>
// // //             </ul>

// // //             {/* WHATSAPP LINK FOR SINGLE */}
// // //             <a 
// // //               href={getWhatsAppLink("Single Ticket", "120,000")}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               style={{ 
// // //                 display: 'block',
// // //                 textAlign: 'center',
// // //                 width: '100%', padding: '16px', borderRadius: '9999px', 
// // //                 border: '2px solid #1A2E24', backgroundColor: 'transparent', 
// // //                 color: '#1A2E24', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer',
// // //                 marginTop: 'auto', textDecoration: 'none'
// // //               }}
// // //             >
// // //               Select Single
// // //             </a>
// // //           </div>

// // //           {/* Couple Ticket (Highlighted) */}
// // //           <div style={{ 
// // //             flex: '1 1 300px',
// // //             maxWidth: '380px',
// // //             backgroundColor: '#1A2E24', 
// // //             borderRadius: '32px', 
// // //             padding: '48px 32px', 
// // //             boxShadow: '0 20px 50px rgba(26,46,36,0.3)', 
// // //             position: 'relative',
// // //             display: 'flex',
// // //             flexDirection: 'column',
// // //             transform: 'scale(1.02)' 
// // //           }}>
// // //             <div style={{ 
// // //               position: 'absolute', top: 0, right: 0, 
// // //               backgroundColor: '#D96C3B', color: '#FFF', 
// // //               padding: '8px 20px', borderBottomLeftRadius: '20px', 
// // //               fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em'
// // //             }}>
// // //               Best Value
// // //             </div>
// // //             <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '28px', color: '#FFFFFF', marginBottom: '8px', marginTop: 0 }}>Couple</h3>
// // //             <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '24px' }}>Bring your favorite person</p>
            
// // //             <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
// // //               <span style={{ fontSize: '18px', color: '#F4A261', fontWeight: '500' }}>UGX</span>
// // //               <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '56px', color: '#FFFFFF' }}>160,000</span>
// // //             </div>

// // //             <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>
// // //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB', fontSize: '15px' }}>
// // //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F4A261' }}></span> Full Event Access for 2
// // //               </li>
// // //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB', fontSize: '15px' }}>
// // //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F4A261' }}></span> All Meals Included
// // //               </li>
// // //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB', fontSize: '15px' }}>
// // //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F4A261' }}></span> Shared Tent & Swimming
// // //               </li>
// // //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB', fontSize: '15px' }}>
// // //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F4A261' }}></span> Free Transport for 2
// // //               </li>
// // //             </ul>

// // //             {/* WHATSAPP LINK FOR COUPLE */}
// // //             <a 
// // //               href={getWhatsAppLink("Couple Ticket", "160,000")}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               style={{ 
// // //                 display: 'block',
// // //                 textAlign: 'center',
// // //                 width: '100%', padding: '16px', borderRadius: '9999px', 
// // //                 border: 'none', backgroundColor: '#D96C3B', 
// // //                 color: '#FFFFFF', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer',
// // //                 marginTop: 'auto', textDecoration: 'none'
// // //               }}
// // //             >
// // //               Select Couple
// // //             </a>
// // //           </div>

// // //           {/* Early Bird */}
// // //           <div style={{ 
// // //             flex: '1 1 300px',
// // //             maxWidth: '380px',
// // //             backgroundColor: '#FFFFFF', 
// // //             borderRadius: '32px', 
// // //             padding: '40px 32px', 
// // //             boxShadow: '0 10px 40px rgba(0,0,0,0.05)', 
// // //             border: '1px solid #E5E0D8',
// // //             position: 'relative',
// // //             display: 'flex',
// // //             flexDirection: 'column'
// // //           }}>
// // //             <div style={{ 
// // //               position: 'absolute', top: 0, right: 0, 
// // //               backgroundColor: '#F4A261', color: '#1A2E24', 
// // //               padding: '8px 20px', borderBottomLeftRadius: '20px', 
// // //               fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em'
// // //             }}>
// // //               Limited
// // //             </div>
// // //             <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '28px', color: '#1A2E24', marginBottom: '8px', marginTop: 0 }}>Early Bird</h3>
// // //             <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '24px' }}>Secure your spot fast</p>
            
// // //             <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
// // //               <span style={{ fontSize: '18px', color: '#D96C3B', fontWeight: '500' }}>UGX</span>
// // //               <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '48px', color: '#1A2E24' }}>95,000</span>
// // //             </div>

// // //             <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
// // //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
// // //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Full Event Access
// // //               </li>
// // //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
// // //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> All Meals Included
// // //               </li>
// // //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
// // //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Tent & Swimming
// // //               </li>
// // //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
// // //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Free Transport
// // //               </li>
// // //             </ul>

// // //             {/* WHATSAPP LINK FOR EARLY BIRD */}
// // //             <a 
// // //               href={getWhatsAppLink("Early Bird Ticket", "95,000")}
// // //               target="_blank"
// // //               rel="noopener noreferrer"
// // //               style={{ 
// // //                 display: 'block',
// // //                 textAlign: 'center',
// // //                 width: '100%', padding: '16px', borderRadius: '9999px', 
// // //                 border: '2px solid #1A2E24', backgroundColor: 'transparent', 
// // //                 color: '#1A2E24', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer',
// // //                 marginTop: 'auto', textDecoration: 'none'
// // //               }}
// // //             >
// // //               Select Early Bird
// // //             </a>
// // //           </div>

// // //         </div>
// // //       </section>
// // //     </main>
// // //   );
// // // }

// // "use client";

// // export default function Home() {
  
// //   // Helper function to generate the WhatsApp link
// //   const getWhatsAppLink = (ticketType: string, price: string) => {
// //     const phoneNumber = "256709071410"; // Britah's WhatsApp Number
    
// //     // The message that will be pre-filled in WhatsApp
// //     const message = `Hello Britah Cooked Events! I would like to book a ticket for Meet & Camp.\n\n*Ticket Type:* ${ticketType}\n*Price:* ${price} UGX\n\nPlease let me know how to complete the payment.`;
    
// //     // Encode the message for the URL
// //     return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
// //   };

// //   return (
// //     <main style={{ minHeight: '100vh', paddingTop: '80px', backgroundColor: '#F5F0E6' }}>
      
// //       {/* HERO SECTION */}
// //       <section style={{
// //         position: 'relative',
// //         width: '100%',
// //         minHeight: '90vh',
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         justifyContent: 'center',
// //         overflow: 'hidden',
// //         paddingBottom: '40px'
// //       }}>
        
// //         {/* Background Image Layer */}
// //         <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
// //           <img 
// //             src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop" 
// //             alt="Forest Camping" 
// //             style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
// //           />
// //           <div style={{ 
// //             position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
// //             background: 'linear-gradient(to bottom, rgba(26, 46, 36, 0.9), rgba(26, 46, 36, 0.5), rgba(26, 46, 36, 0.95))' 
// //           }}></div>
// //         </div>

// //         {/* Content Layer */}
// //         <div style={{ 
// //           position: 'relative', 
// //           zIndex: 10, 
// //           textAlign: 'center', 
// //           padding: '0 20px', 
// //           maxWidth: '800px',
// //           display: 'flex',
// //           flexDirection: 'column',
// //           alignItems: 'center',
// //           width: '100%'
// //         }}>
          
// //           {/* UPGRADED DATE BADGE */}
// //           <div style={{ 
// //             backgroundColor: 'rgba(255, 255, 255, 0.15)', 
// //             backdropFilter: 'blur(8px)',
// //             border: '1px solid rgba(255, 255, 255, 0.3)',
// //             padding: '12px 32px',
// //             borderRadius: '9999px',
// //             marginBottom: '24px',
// //             boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
// //           }}>
// //             <span style={{ color: '#F4A261', letterSpacing: '0.25em', textTransform: 'uppercase', fontSize: 'clamp(14px, 3vw, 18px)', fontWeight: 'bold' }}>
// //               5th & 6th December
// //             </span>
// //           </div>
          
// //           {/* Headline */}
// //           <h1 style={{ 
// //             fontFamily: 'var(--font-playfair), serif', 
// //             fontSize: 'clamp(50px, 12vw, 100px)', 
// //             lineHeight: '0.95', 
// //             marginBottom: '16px',
// //             display: 'flex',
// //             flexDirection: 'column',
// //             alignItems: 'center'
// //           }}>
// //             <span style={{ color: '#FFFFFF', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>Connect.</span>
// //             <span style={{ color: '#F4A261', fontStyle: 'italic' }}>Chill.</span>
// //             {/* FIXED "CAMP" - Now solid white for perfect visibility */}
// //             <span style={{ color: '#FFFFFF', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>Camp.</span>
// //           </h1>
          
// //           {/* Subtext */}
// //           <p style={{ 
// //             color: '#E5E7EB', 
// //             fontSize: 'clamp(16px, 4vw, 20px)', 
// //             maxWidth: '550px', 
// //             marginBottom: '40px', 
// //             fontWeight: '400', 
// //             lineHeight: '1.5'
// //           }}>
// //             Leave the world behind. Unplug at "A Place To Dare."
// //             <br />
// //             <span style={{ color: '#F4A261', fontWeight: '600' }}>All-inclusive. Free transport. Unlimited vibes.</span>
// //           </p>
          
// //           {/* Hero Booking Button */}
// //           <div style={{ 
// //             display: 'flex', 
// //             flexDirection: 'column', 
// //             gap: '16px', 
// //             width: '100%', 
// //             maxWidth: '400px' 
// //           }}>
// //             <a 
// //               href="#pricing" 
// //               style={{
// //                 padding: '18px 32px',
// //                 borderRadius: '9999px',
// //                 backgroundColor: '#D96C3B',
// //                 color: '#FFFFFF',
// //                 fontWeight: 'bold',
// //                 textDecoration: 'none',
// //                 fontSize: '20px',
// //                 boxShadow: '0 10px 25px rgba(217, 108, 59, 0.4)',
// //                 textAlign: 'center',
// //                 display: 'block',
// //                 width: '100%'
// //               }}
// //             >
// //               Book Your Spot Now
// //             </a>
// //           </div>
// //         </div>
// //       </section>

// //       {/* PRICING SECTION */}
// //       <section id="pricing" style={{ 
// //         padding: '80px 24px', 
// //         maxWidth: '1200px', 
// //         margin: '0 auto',
// //         position: 'relative',
// //         zIndex: 30
// //       }}>
        
// //         {/* Header */}
// //         <div style={{ textAlign: 'center', marginBottom: '60px' }}>
// //           <h2 style={{ 
// //             fontFamily: 'var(--font-playfair), serif', 
// //             fontSize: 'clamp(32px, 5vw, 48px)', 
// //             color: '#1A2E24', 
// //             marginBottom: '16px' 
// //           }}>
// //             Secure Your Space
// //           </h2>
// //           <p style={{ 
// //             color: '#2D4D3E', 
// //             fontSize: '18px', 
// //             maxWidth: '600px', 
// //             margin: '0 auto',
// //             lineHeight: '1.6'
// //           }}>
// //             Hurry, limited spaces available! All packages include meals, swimming, free transport, and a tent.
// //           </p>
// //         </div>

// //         {/* Cards Grid */}
// //         <div style={{ 
// //           display: 'flex', 
// //           flexWrap: 'wrap', 
// //           justifyContent: 'center', 
// //           gap: '32px',
// //           alignItems: 'stretch'
// //         }}>
          
// //           {/* Single Ticket */}
// //           <div style={{ 
// //             flex: '1 1 300px',
// //             maxWidth: '380px',
// //             backgroundColor: '#FFFFFF', 
// //             borderRadius: '32px', 
// //             padding: '40px 32px', 
// //             boxShadow: '0 10px 40px rgba(0,0,0,0.05)', 
// //             border: '1px solid #E5E0D8',
// //             position: 'relative',
// //             display: 'flex',
// //             flexDirection: 'column'
// //           }}>
// //             <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '28px', color: '#1A2E24', marginBottom: '8px', marginTop: 0 }}>Single</h3>
// //             <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '24px' }}>Perfect for solo adventurers</p>
            
// //             <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
// //               <span style={{ fontSize: '18px', color: '#D96C3B', fontWeight: '500' }}>UGX</span>
// //               <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '48px', color: '#1A2E24' }}>120,000</span>
// //             </div>

// //             <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
// //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
// //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Full Event Access
// //               </li>
// //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
// //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> All Meals Included
// //               </li>
// //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
// //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Tent & Swimming
// //               </li>
// //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
// //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Free Transport
// //               </li>
// //             </ul>

// //             <a 
// //               href={getWhatsAppLink("Single Ticket", "120,000")}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               style={{ 
// //                 display: 'block',
// //                 textAlign: 'center',
// //                 width: '100%', padding: '16px', borderRadius: '9999px', 
// //                 border: '2px solid #1A2E24', backgroundColor: 'transparent', 
// //                 color: '#1A2E24', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer',
// //                 marginTop: 'auto', textDecoration: 'none'
// //               }}
// //             >
// //               Select Single
// //             </a>
// //           </div>

// //           {/* Couple Ticket (Highlighted) */}
// //           <div style={{ 
// //             flex: '1 1 300px',
// //             maxWidth: '380px',
// //             backgroundColor: '#1A2E24', 
// //             borderRadius: '32px', 
// //             padding: '48px 32px', 
// //             boxShadow: '0 20px 50px rgba(26,46,36,0.3)', 
// //             position: 'relative',
// //             display: 'flex',
// //             flexDirection: 'column',
// //             transform: 'scale(1.02)' 
// //           }}>
// //             <div style={{ 
// //               position: 'absolute', top: 0, right: 0, 
// //               backgroundColor: '#D96C3B', color: '#FFF', 
// //               padding: '8px 20px', borderBottomLeftRadius: '20px', 
// //               fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em'
// //             }}>
// //               Best Value
// //             </div>
// //             <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '28px', color: '#FFFFFF', marginBottom: '8px', marginTop: 0 }}>Couple</h3>
// //             <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '24px' }}>Bring your favorite person</p>
            
// //             <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
// //               <span style={{ fontSize: '18px', color: '#F4A261', fontWeight: '500' }}>UGX</span>
// //               <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '56px', color: '#FFFFFF' }}>160,000</span>
// //             </div>

// //             <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>
// //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB', fontSize: '15px' }}>
// //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F4A261' }}></span> Full Event Access for 2
// //               </li>
// //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB', fontSize: '15px' }}>
// //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F4A261' }}></span> All Meals Included
// //               </li>
// //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB', fontSize: '15px' }}>
// //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F4A261' }}></span> Shared Tent & Swimming
// //               </li>
// //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB', fontSize: '15px' }}>
// //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F4A261' }}></span> Free Transport for 2
// //               </li>
// //             </ul>

// //             <a 
// //               href={getWhatsAppLink("Couple Ticket", "160,000")}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               style={{ 
// //                 display: 'block',
// //                 textAlign: 'center',
// //                 width: '100%', padding: '16px', borderRadius: '9999px', 
// //                 border: 'none', backgroundColor: '#D96C3B', 
// //                 color: '#FFFFFF', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer',
// //                 marginTop: 'auto', textDecoration: 'none'
// //               }}
// //             >
// //               Select Couple
// //             </a>
// //           </div>

// //           {/* Early Bird */}
// //           <div style={{ 
// //             flex: '1 1 300px',
// //             maxWidth: '380px',
// //             backgroundColor: '#FFFFFF', 
// //             borderRadius: '32px', 
// //             padding: '40px 32px', 
// //             boxShadow: '0 10px 40px rgba(0,0,0,0.05)', 
// //             border: '1px solid #E5E0D8',
// //             position: 'relative',
// //             display: 'flex',
// //             flexDirection: 'column'
// //           }}>
// //             <div style={{ 
// //               position: 'absolute', top: 0, right: 0, 
// //               backgroundColor: '#F4A261', color: '#1A2E24', 
// //               padding: '8px 20px', borderBottomLeftRadius: '20px', 
// //               fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em'
// //             }}>
// //               Limited
// //             </div>
// //             <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '28px', color: '#1A2E24', marginBottom: '8px', marginTop: 0 }}>Early Bird</h3>
// //             <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '24px' }}>Secure your spot fast</p>
            
// //             <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
// //               <span style={{ fontSize: '18px', color: '#D96C3B', fontWeight: '500' }}>UGX</span>
// //               <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '48px', color: '#1A2E24' }}>95,000</span>
// //             </div>

// //             <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
// //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
// //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Full Event Access
// //               </li>
// //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
// //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> All Meals Included
// //               </li>
// //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
// //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Tent & Swimming
// //               </li>
// //               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
// //                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Free Transport
// //               </li>
// //             </ul>

// //             <a 
// //               href={getWhatsAppLink("Early Bird Ticket", "95,000")}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               style={{ 
// //                 display: 'block',
// //                 textAlign: 'center',
// //                 width: '100%', padding: '16px', borderRadius: '9999px', 
// //                 border: '2px solid #1A2E24', backgroundColor: 'transparent', 
// //                 color: '#1A2E24', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer',
// //                 marginTop: 'auto', textDecoration: 'none'
// //               }}
// //             >
// //               Select Early Bird
// //             </a>
// //           </div>

// //         </div>
// //       </section>

// //       {/* EXPERIENCE & CONTACT SECTION */}
// //       <section id="experience" style={{ 
// //         backgroundColor: '#1A2E24', 
// //         padding: '80px 24px',
// //         borderTopLeftRadius: '50px',
// //         borderTopRightRadius: '50px',
// //         color: '#FFFFFF'
// //       }}>
// //         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
// //           {/* Activities */}
// //           <div style={{ textAlign: 'center', marginBottom: '80px' }}>
// //             <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '24px' }}>
// //               The Experience
// //             </h2>
// //             <p style={{ color: '#E5E0D8', fontSize: '18px', maxWidth: '600px', margin: '0 auto 48px auto' }}>
// //               Unplug, connect, and create memories. All these activities are included in your ticket.
// //             </p>

// //             <div style={{ 
// //               display: 'flex', 
// //               flexWrap: 'wrap', 
// //               justifyContent: 'center', 
// //               gap: '24px' 
// //             }}>
// //               <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '24px', flex: '1 1 200px', maxWidth: '250px' }}>
// //                 <h3 style={{ color: '#F4A261', fontFamily: 'var(--font-playfair), serif', fontSize: '20px', marginBottom: '8px' }}>Karaoke</h3>
// //                 <p style={{ color: '#9CA3AF', fontSize: '14px' }}>Show off your vocals around the campfire.</p>
// //               </div>
// //               <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '24px', flex: '1 1 200px', maxWidth: '250px' }}>
// //                 <h3 style={{ color: '#F4A261', fontFamily: 'var(--font-playfair), serif', fontSize: '20px', marginBottom: '8px' }}>Color War</h3>
// //                 <p style={{ color: '#9CA3AF', fontSize: '14px' }}>The ultimate daytime battle. Don't touch the color!</p>
// //               </div>
// //               <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '24px', flex: '1 1 200px', maxWidth: '250px' }}>
// //                 <h3 style={{ color: '#F4A261', fontFamily: 'var(--font-playfair), serif', fontSize: '20px', marginBottom: '8px' }}>Swimming</h3>
// //                 <p style={{ color: '#9CA3AF', fontSize: '14px' }}>Take a refreshing dip in the forest pools.</p>
// //               </div>
// //               <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '24px', flex: '1 1 200px', maxWidth: '250px' }}>
// //                 <h3 style={{ color: '#F4A261', fontFamily: 'var(--font-playfair), serif', fontSize: '20px', marginBottom: '8px' }}>Dancing</h3>
// //                 <p style={{ color: '#9CA3AF', fontSize: '14px' }}>Good music, great vibes, unlimited fun.</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Contact / Questions */}
// //           <div style={{ 
// //             backgroundColor: '#F5F0E6', 
// //             borderRadius: '32px', 
// //             padding: '40px', 
// //             textAlign: 'center',
// //             display: 'flex',
// //             flexDirection: 'column',
// //             alignItems: 'center'
// //           }}>
// //             <h2 style={{ color: '#1A2E24', fontFamily: 'var(--font-playfair), serif', fontSize: '32px', marginBottom: '16px' }}>
// //               Need Help or Have Questions?
// //             </h2>
// //             <p style={{ color: '#4B5563', marginBottom: '32px', maxWidth: '500px' }}>
// //               Speak directly to our team. We are here to help you secure your spot and answer any questions about transport, tents, or what to bring.
// //             </p>

// //             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
// //               {/* Call Button */}
// //               <a 
// //                 href="tel:0709071410"
// //                 style={{
// //                   backgroundColor: '#FFFFFF',
// //                   color: '#1A2E24',
// //                   padding: '16px 32px',
// //                   borderRadius: '9999px',
// //                   fontSize: '16px',
// //                   fontWeight: 'bold',
// //                   textDecoration: 'none',
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   gap: '8px',
// //                   boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
// //                 }}
// //               >
// //                 Call Us: 0709 071 410
// //               </a>

// //               {/* WhatsApp Button */}
// //               <a 
// //                 href="https://wa.me/256747786784?text=Hello%20Britah%20Cooked%20Events!%20I%20have%20a%20question%20about%20the%20Meet%20%26%20Camp%20event."
// //                 target="_blank"
// //                 rel="noopener noreferrer"
// //                 style={{
// //                   backgroundColor: '#25D366', // WhatsApp Green
// //                   color: '#FFFFFF',
// //                   padding: '16px 32px',
// //                   borderRadius: '9999px',
// //                   fontSize: '16px',
// //                   fontWeight: 'bold',
// //                   textDecoration: 'none',
// //                   display: 'flex',
// //                   alignItems: 'center',
// //                   gap: '8px',
// //                   boxShadow: '0 4px 10px rgba(37, 211, 102, 0.3)'
// //                 }}
// //               >
// //                 Chat on WhatsApp: 0747 786 784
// //               </a>
// //             </div>
// //           </div>

// //         </div>
// //       </section>
// //     </main>
// //   );
// // }

// "use client";

// export default function Home() {
  
//   // Helper function to generate the WhatsApp link
//   const getWhatsAppLink = (ticketType: string, price: string) => {
//     const phoneNumber = "256709071410"; // Britah's WhatsApp Number
    
//     // The message that will be pre-filled in WhatsApp
//     const message = `Hello Britah Cooked Events! I would like to book a ticket for Meet & Camp.\n\n*Ticket Type:* ${ticketType}\n*Price:* ${price} UGX\n\nPlease let me know how to complete the payment.`;
    
//     // Encode the message for the URL
//     return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//   };

//   return (
//     <main style={{ minHeight: '100vh', paddingTop: '80px', backgroundColor: '#F5F0E6' }}>
      
//       {/* HERO SECTION */}
//       <section style={{
//         position: 'relative',
//         width: '100%',
//         minHeight: '90vh',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         overflow: 'hidden',
//         paddingBottom: '40px'
//       }}>
        
//         {/* Background Image Layer */}
//         <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
//           <img 
//             src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop" 
//             alt="Forest Camping" 
//             style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
//           />
//           <div style={{ 
//             position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
//             background: 'linear-gradient(to bottom, rgba(26, 46, 36, 0.9), rgba(26, 46, 36, 0.5), rgba(26, 46, 36, 0.95))' 
//           }}></div>
//         </div>

//         {/* Content Layer */}
//         <div style={{ 
//           position: 'relative', 
//           zIndex: 10, 
//           textAlign: 'center', 
//           padding: '0 20px', 
//           maxWidth: '900px',
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           width: '100%'
//         }}>
          
//           {/* THE SMART BORDER BOX */}
//           <div style={{ 
//             border: '2px solid rgba(255, 255, 255, 0.3)', // White border with slight transparency
//             backgroundColor: 'rgba(26, 46, 36, 0.4)', // Very subtle dark tint to make text pop
//             backdropFilter: 'blur(10px)', // Frosted glass effect
//             borderRadius: '32px',
//             padding: 'clamp(30px, 5vw, 60px) clamp(20px, 5vw, 40px)', // Responsive padding
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             width: '100%',
//             boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
//           }}>
            
//             {/* UPGRADED DATE BADGE */}
//             <div style={{ 
//               backgroundColor: 'rgba(255, 255, 255, 0.1)', 
//               border: '1px solid rgba(255, 255, 255, 0.3)',
//               padding: '10px 28px',
//               borderRadius: '9999px',
//               marginBottom: '24px',
//             }}>
//               <span style={{ color: '#F4A261', letterSpacing: '0.25em', textTransform: 'uppercase', fontSize: 'clamp(14px, 3vw, 16px)', fontWeight: 'bold' }}>
//                 5th & 6th December
//               </span>
//             </div>
            
//             {/* Headline */}
//             <h1 style={{ 
//               fontFamily: 'var(--font-playfair), serif', 
//               fontSize: 'clamp(45px, 10vw, 90px)', 
//               lineHeight: '0.95', 
//               marginBottom: '24px',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               marginTop: 0
//             }}>
//               <span style={{ color: '#FFFFFF', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>Connect.</span>
//               <span style={{ color: '#F4A261', fontStyle: 'italic' }}>Chill.</span>
//               <span style={{ color: '#FFFFFF', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>Camp.</span>
//             </h1>
            
//             {/* Subtext */}
//             <p style={{ 
//               color: '#E5E7EB', 
//               fontSize: 'clamp(16px, 4vw, 20px)', 
//               maxWidth: '550px', 
//               marginBottom: '40px', 
//               fontWeight: '400', 
//               lineHeight: '1.5',
//               marginTop: 0
//             }}>
//               Leave the world behind. Unplug at "A Place To Dare."
//               <br />
//               <span style={{ color: '#F4A261', fontWeight: '600' }}>All-inclusive. Free transport. Unlimited vibes.</span>
//             </p>
            
//             {/* Hero Booking Button */}
//             <div style={{ 
//               display: 'flex', 
//               flexDirection: 'column', 
//               gap: '16px', 
//               width: '100%', 
//               maxWidth: '400px' 
//             }}>
//               <a 
//                 href="#pricing" 
//                 style={{
//                   padding: '18px 32px',
//                   borderRadius: '9999px',
//                   backgroundColor: '#D96C3B',
//                   color: '#FFFFFF',
//                   fontWeight: 'bold',
//                   textDecoration: 'none',
//                   fontSize: '20px',
//                   boxShadow: '0 10px 25px rgba(217, 108, 59, 0.4)',
//                   textAlign: 'center',
//                   display: 'block',
//                   width: '100%',
//                   border: '2px solid #D96C3B' // Extra border for the button
//                 }}
//               >
//                 Book Your Spot Now
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PRICING SECTION */}
//       <section id="pricing" style={{ 
//         padding: '80px 24px', 
//         maxWidth: '1200px', 
//         margin: '0 auto',
//         position: 'relative',
//         zIndex: 30
//       }}>
        
//         {/* Header */}
//         <div style={{ textAlign: 'center', marginBottom: '60px' }}>
//           <h2 style={{ 
//             fontFamily: 'var(--font-playfair), serif', 
//             fontSize: 'clamp(32px, 5vw, 48px)', 
//             color: '#1A2E24', 
//             marginBottom: '16px' 
//           }}>
//             Secure Your Space
//           </h2>
//           <p style={{ 
//             color: '#2D4D3E', 
//             fontSize: '18px', 
//             maxWidth: '600px', 
//             margin: '0 auto',
//             lineHeight: '1.6'
//           }}>
//             Hurry, limited spaces available! All packages include meals, swimming, free transport, and a tent.
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div style={{ 
//           display: 'flex', 
//           flexWrap: 'wrap', 
//           justifyContent: 'center', 
//           gap: '32px',
//           alignItems: 'stretch'
//         }}>
          
//           {/* Single Ticket */}
//           <div style={{ 
//             flex: '1 1 300px',
//             maxWidth: '380px',
//             backgroundColor: '#FFFFFF', 
//             borderRadius: '32px', 
//             padding: '40px 32px', 
//             boxShadow: '0 10px 40px rgba(0,0,0,0.05)', 
//             border: '1px solid #E5E0D8',
//             position: 'relative',
//             display: 'flex',
//             flexDirection: 'column'
//           }}>
//             <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '28px', color: '#1A2E24', marginBottom: '8px', marginTop: 0 }}>Single</h3>
//             <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '24px' }}>Perfect for solo adventurers</p>
            
//             <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
//               <span style={{ fontSize: '18px', color: '#D96C3B', fontWeight: '500' }}>UGX</span>
//               <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '48px', color: '#1A2E24' }}>120,000</span>
//             </div>

//             <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
//               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
//                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Full Event Access
//               </li>
//               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
//                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> All Meals Included
//               </li>
//               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
//                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Tent & Swimming
//               </li>
//               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
//                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Free Transport
//               </li>
//             </ul>

//             <a 
//               href={getWhatsAppLink("Single Ticket", "120,000")}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ 
//                 display: 'block',
//                 textAlign: 'center',
//                 width: '100%', padding: '16px', borderRadius: '9999px', 
//                 border: '2px solid #1A2E24', backgroundColor: 'transparent', 
//                 color: '#1A2E24', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer',
//                 marginTop: 'auto', textDecoration: 'none'
//               }}
//             >
//               Select Single
//             </a>
//           </div>

//           {/* Couple Ticket (Highlighted) */}
//           <div style={{ 
//             flex: '1 1 300px',
//             maxWidth: '380px',
//             backgroundColor: '#1A2E24', 
//             borderRadius: '32px', 
//             padding: '48px 32px', 
//             boxShadow: '0 20px 50px rgba(26,46,36,0.3)', 
//             position: 'relative',
//             display: 'flex',
//             flexDirection: 'column',
//             transform: 'scale(1.02)' 
//           }}>
//             <div style={{ 
//               position: 'absolute', top: 0, right: 0, 
//               backgroundColor: '#D96C3B', color: '#FFF', 
//               padding: '8px 20px', borderBottomLeftRadius: '20px', 
//               fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em'
//             }}>
//               Best Value
//             </div>
//             <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '28px', color: '#FFFFFF', marginBottom: '8px', marginTop: 0 }}>Couple</h3>
//             <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '24px' }}>Bring your favorite person</p>
            
//             <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
//               <span style={{ fontSize: '18px', color: '#F4A261', fontWeight: '500' }}>UGX</span>
//               <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '56px', color: '#FFFFFF' }}>160,000</span>
//             </div>

//             <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>
//               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB', fontSize: '15px' }}>
//                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F4A261' }}></span> Full Event Access for 2
//               </li>
//               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB', fontSize: '15px' }}>
//                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F4A261' }}></span> All Meals Included
//               </li>
//               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB', fontSize: '15px' }}>
//                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F4A261' }}></span> Shared Tent & Swimming
//               </li>
//               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#E5E7EB', fontSize: '15px' }}>
//                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#F4A261' }}></span> Free Transport for 2
//               </li>
//             </ul>

//             <a 
//               href={getWhatsAppLink("Couple Ticket", "160,000")}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ 
//                 display: 'block',
//                 textAlign: 'center',
//                 width: '100%', padding: '16px', borderRadius: '9999px', 
//                 border: 'none', backgroundColor: '#D96C3B', 
//                 color: '#FFFFFF', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer',
//                 marginTop: 'auto', textDecoration: 'none'
//               }}
//             >
//               Select Couple
//             </a>
//           </div>

//           {/* Early Bird */}
//           <div style={{ 
//             flex: '1 1 300px',
//             maxWidth: '380px',
//             backgroundColor: '#FFFFFF', 
//             borderRadius: '32px', 
//             padding: '40px 32px', 
//             boxShadow: '0 10px 40px rgba(0,0,0,0.05)', 
//             border: '1px solid #E5E0D8',
//             position: 'relative',
//             display: 'flex',
//             flexDirection: 'column'
//           }}>
//             <div style={{ 
//               position: 'absolute', top: 0, right: 0, 
//               backgroundColor: '#F4A261', color: '#1A2E24', 
//               padding: '8px 20px', borderBottomLeftRadius: '20px', 
//               fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em'
//             }}>
//               Limited
//             </div>
//             <h3 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '28px', color: '#1A2E24', marginBottom: '8px', marginTop: 0 }}>Early Bird</h3>
//             <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '24px' }}>Secure your spot fast</p>
            
//             <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '32px' }}>
//               <span style={{ fontSize: '18px', color: '#D96C3B', fontWeight: '500' }}>UGX</span>
//               <span style={{ fontFamily: 'var(--font-playfair), serif', fontSize: '48px', color: '#1A2E24' }}>95,000</span>
//             </div>

//             <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0', display: 'flex', flexDirection: 'column', gap: '12px', flexGrow: 1 }}>
//               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
//                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Full Event Access
//               </li>
//               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
//                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> All Meals Included
//               </li>
//               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
//                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Tent & Swimming
//               </li>
//               <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2D4D3E', fontSize: '15px' }}>
//                 <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#D96C3B' }}></span> Free Transport
//               </li>
//             </ul>

//             <a 
//               href={getWhatsAppLink("Early Bird Ticket", "95,000")}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{ 
//                 display: 'block',
//                 textAlign: 'center',
//                 width: '100%', padding: '16px', borderRadius: '9999px', 
//                 border: '2px solid #1A2E24', backgroundColor: 'transparent', 
//                 color: '#1A2E24', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer',
//                 marginTop: 'auto', textDecoration: 'none'
//               }}
//             >
//               Select Early Bird
//             </a>
//           </div>

//         </div>
//       </section>

//       {/* EXPERIENCE & CONTACT SECTION */}
//       <section id="experience" style={{ 
//         backgroundColor: '#1A2E24', 
//         padding: '80px 24px',
//         borderTopLeftRadius: '50px',
//         borderTopRightRadius: '50px',
//         color: '#FFFFFF'
//       }}>
//         <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
//           {/* Activities */}
//           <div style={{ textAlign: 'center', marginBottom: '80px' }}>
//             <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '24px' }}>
//               The Experience
//             </h2>
//             <p style={{ color: '#E5E0D8', fontSize: '18px', maxWidth: '600px', margin: '0 auto 48px auto' }}>
//               Unplug, connect, and create memories. All these activities are included in your ticket.
//             </p>

//             <div style={{ 
//               display: 'flex', 
//               flexWrap: 'wrap', 
//               justifyContent: 'center', 
//               gap: '24px' 
//             }}>
//               <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '24px', flex: '1 1 200px', maxWidth: '250px' }}>
//                 <h3 style={{ color: '#F4A261', fontFamily: 'var(--font-playfair), serif', fontSize: '20px', marginBottom: '8px' }}>Karaoke</h3>
//                 <p style={{ color: '#9CA3AF', fontSize: '14px' }}>Show off your vocals around the campfire.</p>
//               </div>
//               <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '24px', flex: '1 1 200px', maxWidth: '250px' }}>
//                 <h3 style={{ color: '#F4A261', fontFamily: 'var(--font-playfair), serif', fontSize: '20px', marginBottom: '8px' }}>Color War</h3>
//                 <p style={{ color: '#9CA3AF', fontSize: '14px' }}>The ultimate daytime battle. Don't touch the color!</p>
//               </div>
//               <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '24px', flex: '1 1 200px', maxWidth: '250px' }}>
//                 <h3 style={{ color: '#F4A261', fontFamily: 'var(--font-playfair), serif', fontSize: '20px', marginBottom: '8px' }}>Swimming</h3>
//                 <p style={{ color: '#9CA3AF', fontSize: '14px' }}>Take a refreshing dip in the forest pools.</p>
//               </div>
//               <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '24px', flex: '1 1 200px', maxWidth: '250px' }}>
//                 <h3 style={{ color: '#F4A261', fontFamily: 'var(--font-playfair), serif', fontSize: '20px', marginBottom: '8px' }}>Dancing</h3>
//                 <p style={{ color: '#9CA3AF', fontSize: '14px' }}>Good music, great vibes, unlimited fun.</p>
//               </div>
//             </div>
//           </div>

//           {/* Contact / Questions */}
//           <div style={{ 
//             backgroundColor: '#F5F0E6', 
//             borderRadius: '32px', 
//             padding: '40px', 
//             textAlign: 'center',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center'
//           }}>
//             <h2 style={{ color: '#1A2E24', fontFamily: 'var(--font-playfair), serif', fontSize: '32px', marginBottom: '16px' }}>
//               Need Help or Have Questions?
//             </h2>
//             <p style={{ color: '#4B5563', marginBottom: '32px', maxWidth: '500px' }}>
//               Speak directly to our team. We are here to help you secure your spot and answer any questions about transport, tents, or what to bring.
//             </p>

//             <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
//               {/* Call Button */}
//               <a 
//                 href="tel:0709071410"
//                 style={{
//                   backgroundColor: '#FFFFFF',
//                   color: '#1A2E24',
//                   padding: '16px 32px',
//                   borderRadius: '9999px',
//                   fontSize: '16px',
//                   fontWeight: 'bold',
//                   textDecoration: 'none',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
//                 }}
//               >
//                 Call Us: 0709 071 410
//               </a>

//               {/* WhatsApp Button */}
//               <a 
//                 href="https://wa.me/256747786784?text=Hello%20Britah%20Cooked%20Events!%20I%20have%20a%20question%20about%20the%20Meet%20%26%20Camp%20event."
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 style={{
//                   backgroundColor: '#25D366', // WhatsApp Green
//                   color: '#FFFFFF',
//                   padding: '16px 32px',
//                   borderRadius: '9999px',
//                   fontSize: '16px',
//                   fontWeight: 'bold',
//                   textDecoration: 'none',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   boxShadow: '0 4px 10px rgba(37, 211, 102, 0.3)'
//                 }}
//               >
//                 Chat on WhatsApp: 0747 786 784
//               </a>
//             </div>
//           </div>

//         </div>
//       </section>
//     </main>
//   );
// }

"use client";

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
    <main style={{ minHeight: '100vh', paddingTop: '80px', backgroundColor: '#F5F0E6' }}>
      
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
          {/* Dark Gradient Overlay - Just enough to make the text pop, but you can still see the people */}
          <div style={{ 
            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, 
            background: 'linear-gradient(to bottom, rgba(26, 46, 36, 0.7), rgba(26, 46, 36, 0.3), rgba(26, 46, 36, 0.8))' 
          }}></div>
        </div>

        {/* Content Layer */}
        <div style={{ 
          position: 'relative', 
          zIndex: 10, 
          textAlign: 'center', 
          padding: '0 20px', 
          maxWidth: '900px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%'
        }}>
          
          {/* THE SMART BORDER BOX - No background, no blur */}
          <div style={{ 
            border: '2px solid rgba(255, 255, 255, 0.5)', // Clear white border
            borderRadius: '32px',
            padding: 'clamp(30px, 5vw, 60px) clamp(20px, 5vw, 40px)', // Responsive padding
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            // Removed backgroundColor and backdropFilter so the image shows perfectly behind
          }}>
            
            {/* UPGRADED DATE BADGE */}
            <div style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.15)', 
              border: '1px solid rgba(255, 255, 255, 0.4)',
              padding: '10px 28px',
              borderRadius: '9999px',
              marginBottom: '24px',
            }}>
              <span style={{ color: '#F4A261', letterSpacing: '0.25em', textTransform: 'uppercase', fontSize: 'clamp(14px, 3vw, 16px)', fontWeight: 'bold' }}>
                5th & 6th December
              </span>
            </div>
            
            {/* Headline */}
            <h1 style={{ 
              fontFamily: 'var(--font-playfair), serif', 
              fontSize: 'clamp(45px, 10vw, 90px)', 
              lineHeight: '0.95', 
              marginBottom: '24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: 0
            }}>
              <span style={{ color: '#FFFFFF', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>Connect.</span>
              <span style={{ color: '#F4A261', fontStyle: 'italic', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>Chill.</span>
              <span style={{ color: '#FFFFFF', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>Camp.</span>
            </h1>
            
            {/* Subtext */}
            <p style={{ 
              color: '#E5E7EB', 
              fontSize: 'clamp(16px, 4vw, 20px)', 
              maxWidth: '550px', 
              marginBottom: '40px', 
              fontWeight: '500', 
              lineHeight: '1.5',
              marginTop: 0,
              textShadow: '0 2px 10px rgba(0,0,0,0.8)' // Shadow to keep text readable over the image
            }}>
              Leave the world behind. Unplug at "A Place To Dare."
              <br />
              <span style={{ color: '#F4A261', fontWeight: 'bold' }}>All-inclusive. Free transport. Unlimited vibes.</span>
            </p>
            
            {/* Hero Booking Button */}
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '16px', 
              width: '100%', 
              maxWidth: '400px' 
            }}>
              <a 
                href="#pricing" 
                style={{
                  padding: '18px 32px',
                  borderRadius: '9999px',
                  backgroundColor: '#D96C3B',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  fontSize: '20px',
                  boxShadow: '0 10px 25px rgba(217, 108, 59, 0.6)',
                  textAlign: 'center',
                  display: 'block',
                  width: '100%',
                  border: '2px solid #D96C3B'
                }}
              >
                Book Your Spot Now
              </a>
            </div>
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

      {/* EXPERIENCE & CONTACT SECTION */}
      <section id="experience" style={{ 
        backgroundColor: '#1A2E24', 
        padding: '80px 24px',
        borderTopLeftRadius: '50px',
        borderTopRightRadius: '50px',
        color: '#FFFFFF'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          {/* Activities */}
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontFamily: 'var(--font-playfair), serif', fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '24px' }}>
              The Experience
            </h2>
            <p style={{ color: '#E5E0D8', fontSize: '18px', maxWidth: '600px', margin: '0 auto 48px auto' }}>
              Unplug, connect, and create memories. All these activities are included in your ticket.
            </p>

            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              gap: '24px' 
            }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '24px', flex: '1 1 200px', maxWidth: '250px' }}>
                <h3 style={{ color: '#F4A261', fontFamily: 'var(--font-playfair), serif', fontSize: '20px', marginBottom: '8px' }}>Karaoke</h3>
                <p style={{ color: '#9CA3AF', fontSize: '14px' }}>Show off your vocals around the campfire.</p>
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '24px', flex: '1 1 200px', maxWidth: '250px' }}>
                <h3 style={{ color: '#F4A261', fontFamily: 'var(--font-playfair), serif', fontSize: '20px', marginBottom: '8px' }}>Color War</h3>
                <p style={{ color: '#9CA3AF', fontSize: '14px' }}>The ultimate daytime battle. Don't touch the color!</p>
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '24px', flex: '1 1 200px', maxWidth: '250px' }}>
                <h3 style={{ color: '#F4A261', fontFamily: 'var(--font-playfair), serif', fontSize: '20px', marginBottom: '8px' }}>Swimming</h3>
                <p style={{ color: '#9CA3AF', fontSize: '14px' }}>Take a refreshing dip in the forest pools.</p>
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '24px', flex: '1 1 200px', maxWidth: '250px' }}>
                <h3 style={{ color: '#F4A261', fontFamily: 'var(--font-playfair), serif', fontSize: '20px', marginBottom: '8px' }}>Dancing</h3>
                <p style={{ color: '#9CA3AF', fontSize: '14px' }}>Good music, great vibes, unlimited fun.</p>
              </div>
            </div>
          </div>

          {/* Contact / Questions */}
          <div style={{ 
            backgroundColor: '#F5F0E6', 
            borderRadius: '32px', 
            padding: '40px', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <h2 style={{ color: '#1A2E24', fontFamily: 'var(--font-playfair), serif', fontSize: '32px', marginBottom: '16px' }}>
              Need Help or Have Questions?
            </h2>
            <p style={{ color: '#4B5563', marginBottom: '32px', maxWidth: '500px' }}>
              Speak directly to our team. We are here to help you secure your spot and answer any questions about transport, tents, or what to bring.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
              {/* Call Button */}
              <a 
                href="tel:0709071410"
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#1A2E24',
                  padding: '16px 32px',
                  borderRadius: '9999px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
                }}
              >
                Call Us: 0709 071 410
              </a>

              {/* WhatsApp Button */}
              <a 
                href="https://wa.me/256747786784?text=Hello%20Britah%20Cooked%20Events!%20I%20have%20a%20question%20about%20the%20Meet%20%26%20Camp%20event."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#25D366', // WhatsApp Green
                  color: '#FFFFFF',
                  padding: '16px 32px',
                  borderRadius: '9999px',
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 10px rgba(37, 211, 102, 0.3)'
                }}
              >
                Chat on WhatsApp: 0747 786 784
              </a>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}