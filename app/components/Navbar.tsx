// import Link from 'next/link';

// export default function Navbar() {
//   return (
//     <header style={{
//       position: 'fixed',
//       top: 0,
//       left: 0,
//       width: '100%',
//       zIndex: 100,
//       backgroundColor: '#F5F0E6',
//       borderBottom: '1px solid #E5E0D8',
//     }}>
//       <div style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '0 24px',
//         height: '80px',
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//       }}>
        
//         {/* Logo */}
//         <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
//           <span style={{ 
//             fontFamily: 'var(--font-playfair), serif', 
//             fontSize: '24px', 
//             fontWeight: 'bold', 
//             color: '#1A2E24', 
//             lineHeight: '1' 
//           }}>
//             Meet & Camp
//           </span>
//           <span style={{ 
//             fontSize: '10px', 
//             textTransform: 'uppercase', 
//             letterSpacing: '0.2em', 
//             color: '#D96C3B', 
//             fontWeight: '600', 
//             marginTop: '4px' 
//           }}>
//             By Britah Cooked Events
//           </span>
//         </Link>

//         {/* Desktop Links (Hidden on Mobile using standard CSS media query logic via class) */}
//         <nav className="hidden md:flex" style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           gap: '32px',
//           fontSize: '14px',
//           fontWeight: '500',
//         }}>
//           <Link href="#experience" style={{ color: '#1A2E24', textDecoration: 'none' }}>
//             The Experience
//           </Link>
//           <Link href="#included" style={{ color: '#1A2E24', textDecoration: 'none' }}>
//             What's Included
//           </Link>
//           <Link href="#pricing" style={{ color: '#1A2E24', textDecoration: 'none' }}>
//             Tickets
//           </Link>
//         </nav>

//         {/* Desktop Book Now Button (Hidden on Mobile) */}
//         <div className="hidden md:block">
//           <Link 
//             href="#pricing" 
//             style={{
//               backgroundColor: '#D96C3B',
//               color: '#FFFFFF',
//               padding: '10px 24px',
//               borderRadius: '9999px',
//               fontSize: '14px',
//               fontWeight: 'bold',
//               textDecoration: 'none',
//               display: 'inline-block',
//             }}
//           >
//             Book Now
//           </Link>
//         </div>

//         {/* Mobile Book Button (Visible only on small screens) */}
//         <div className="block md:hidden">
//           <Link 
//             href="#pricing" 
//             style={{
//               backgroundColor: '#D96C3B',
//               color: '#FFFFFF',
//               padding: '8px 16px',
//               borderRadius: '9999px',
//               fontSize: '14px',
//               fontWeight: 'bold',
//               textDecoration: 'none',
//               display: 'inline-block',
//             }}
//           >
//             Book
//           </Link>
//         </div>

//       </div>
//     </header>
//   );
// }

import Link from 'next/link';

export default function Navbar() {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      zIndex: 100,
      backgroundColor: '#F5F0E6',
      borderBottom: '1px solid #E5E0D8',
    }}>
      {/* 
        We use inline styles for the layout to guarantee it works.
        We use a <style> tag here to handle the mobile/desktop switching cleanly.
      */}
      <style>{`
        .desktop-only { display: flex; }
        .mobile-only { display: none; }
        
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
        }
      `}</style>

      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        height: '80px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
          <span style={{ 
            fontFamily: 'var(--font-playfair), serif', 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#1A2E24', 
            lineHeight: '1' 
          }}>
            Meet & Camp
          </span>
          <span style={{ 
            fontSize: '10px', 
            textTransform: 'uppercase', 
            letterSpacing: '0.2em', 
            color: '#D96C3B', 
            fontWeight: '600', 
            marginTop: '4px' 
          }}>
            By Britah Cooked Events
          </span>
        </Link>

        {/* DESKTOP LINKS & BUTTON (Hidden on Mobile via CSS) */}
        <div className="desktop-only" style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: '32px',
        }}>
          <nav style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '32px',
            fontSize: '14px',
            fontWeight: '500',
          }}>
            <Link href="#experience" style={{ color: '#1A2E24', textDecoration: 'none' }}>
              The Experience
            </Link>
            <Link href="#included" style={{ color: '#1A2E24', textDecoration: 'none' }}>
              What's Included
            </Link>
            <Link href="#pricing" style={{ color: '#1A2E24', textDecoration: 'none' }}>
              Tickets
            </Link>
          </nav>

          <Link 
            href="#pricing" 
            style={{
              backgroundColor: '#D96C3B',
              color: '#FFFFFF',
              padding: '10px 24px',
              borderRadius: '9999px',
              fontSize: '14px',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Book Now
          </Link>
        </div>

        {/* MOBILE BUTTON (Hidden on Desktop via CSS) */}
        <div className="mobile-only">
          <Link 
            href="#pricing" 
            style={{
              backgroundColor: '#D96C3B',
              color: '#FFFFFF',
              padding: '8px 20px',
              borderRadius: '9999px',
              fontSize: '14px',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Book Now
          </Link>
        </div>

      </div>
    </header>
  );
}