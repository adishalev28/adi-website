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
      <div style={{ paddingTop: "64px" }}>
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
    </>
  );
}
