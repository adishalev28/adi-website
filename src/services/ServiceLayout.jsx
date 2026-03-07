import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import FloatingWA from "../shared/FloatingWA";
import ContactCTA from "../shared/ContactCTA";
import GlobalStyles from "../shared/GlobalStyles";
import { C } from "../shared/constants";

export default function ServiceLayout({ children, otherServices = [] }) {
  return (
    <>
      <GlobalStyles />
      <Navbar basePath="/" />
      <div>
        {children}
      </div>

      {/* שירותים נוספים */}
      {otherServices.length > 0 && (
        <section style={{ background: C.sand, padding: "60px 24px" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 32px" }}>
              שירותים נוספים
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
              {otherServices.map(s => (
                <a key={s.href} href={s.href} style={{
                  background: "white", border: `1.5px solid ${C.sage}30`,
                  color: C.bark, padding: "12px 28px", borderRadius: "50px",
                  fontSize: "15px", fontWeight: 700, textDecoration: "none",
                  boxShadow: "0 2px 8px rgba(44,42,38,0.04)",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.sage; e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = C.sage; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = C.bark; e.currentTarget.style.borderColor = `${C.sage}30`; }}
                >{s.label}</a>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
      <Footer />
      <FloatingWA />

      {/* כפתור צף - חזרה לדף הראשי */}
      <a href="/" style={{
        position: "fixed", top: "80px", right: "16px", zIndex: 150,
        display: "flex", alignItems: "center", justifyContent: "center",
        width: "44px", height: "44px",
        background: "rgba(250,248,243,0.95)", color: C.sage,
        borderRadius: "50%",
        textDecoration: "none",
        boxShadow: "0 4px 20px rgba(44,42,38,0.12)",
        backdropFilter: "blur(8px)",
        border: `1.5px solid ${C.sage}30`,
        transition: "all 0.2s",
      }}
        onMouseEnter={e => { e.currentTarget.style.background = C.sage; e.currentTarget.style.color = "white"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "rgba(250,248,243,0.95)"; e.currentTarget.style.color = C.sage; }}
        title="דף הבית"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      </a>
    </>
  );
}
