import { useState, useEffect } from "react";
import { C, WA_URL } from "./constants";

export default function Navbar({ basePath = "" }) {
  const [scrolled, setScrolled]  = useState(false);
  const [menuOpen, setMenuOpen]  = useState(false);
  const isServicePage = basePath === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "אודות",         href: `${basePath}#about`    },
    { label: "שירותים",       href: `${basePath}#services` },
    { label: "שאלות נפוצות", href: `${basePath}#faq`      },
    { label: "המלצות",        href: `${basePath}#reviews`  },
    { label: "צור קשר",       href: `${basePath}#contact`  },
  ];

  const filled = scrolled || menuOpen;

  return (
    <nav style={{
      position: "fixed", top: 0, right: 0, left: 0, zIndex: 100,
      background: filled ? "rgba(250,248,243,0.95)" : "transparent",
      backdropFilter: filled ? "blur(12px)" : "none",
      boxShadow: filled ? "0 1px 24px rgba(44,42,38,0.06)" : "none",
      transition: "all 0.4s ease",
    }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto", padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "64px",
      }}>
        {/* לוגו */}
        <a href={basePath || "#"} style={{ textDecoration: "none", marginRight: filled ? "-38px" : "-54px", marginTop: filled ? "0" : "22px", transition: "margin 0.3s" }}>
          <img src="/LOGO1.png" alt="לוגו עדי שלו  - רפואה סינית בראשון לציון" style={{
            height: filled ? "52px" : "78px", width: "auto",
            filter: filled ? "none" : "brightness(0) invert(1)",
            transition: "all 0.3s",
          }} />
        </a>

        {/* קישורים  - desktop */}
        <div style={{ display: "flex", gap: "32px", alignItems: "center" }} className="desktop-nav">
          {isServicePage ? (
            <a href="/" style={{
              display: "flex", alignItems: "center", gap: "6px",
              fontSize: "13px", fontWeight: 700,
              color: filled ? C.sage : "rgba(255,255,255,0.9)",
              textDecoration: "none", transition: "color 0.3s",
            }}>
              <span style={{ fontSize: "16px" }}>→</span>
              לדף הראשי
            </a>
          ) : links.map(l => (
            <a key={l.href} href={l.href} className="nav-link" style={{
              fontSize: "13px", fontWeight: 600,
              color: filled ? C.barkLight : "rgba(255,255,255,0.85)",
              textDecoration: "none", transition: "color 0.3s",
              letterSpacing: "0.5px",
            }}>{l.label}</a>
          ))}
        </div>

        {/* כפתור CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="desktop-nav" style={{
            background: filled ? C.sage : "rgba(255,255,255,0.15)",
            color: "white",
            padding: "8px 20px", borderRadius: "50px",
            fontSize: "13px", fontWeight: 700,
            textDecoration: "none", transition: "all 0.3s",
            border: filled ? "none" : "1px solid rgba(255,255,255,0.3)",
          }}>
            ליצירת קשר
          </a>

          {/* המבורגר  - mobile */}
          <button className="mobile-nav" onClick={() => setMenuOpen(o => !o)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: "6px",
              display: "flex", flexDirection: "column", gap: "5px" }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: "block", width: "22px", height: "2px",
                background: filled ? C.bark : "white", transition: "all 0.3s",
                transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "") : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </div>
      </div>

      {/* תפריט mobile */}
      {menuOpen && (
        <div className="mobile-nav" style={{
          background: "rgba(250,248,243,0.97)", padding: "16px 24px 24px",
          display: "flex", flexDirection: "column", gap: "4px",
          borderTop: `1px solid ${C.sand}`,
        }}>
          {isServicePage && (
            <a href="/" onClick={() => setMenuOpen(false)} style={{
              display: "flex", alignItems: "center", gap: "8px",
              fontSize: "16px", fontWeight: 700, color: C.sage,
              textDecoration: "none", padding: "12px 0",
              borderBottom: `1px solid ${C.sand}`,
            }}>
              <span style={{ fontSize: "18px" }}>→</span>
              לדף הראשי
            </a>
          )}
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontSize: "16px", fontWeight: 600, color: C.bark,
              textDecoration: "none", padding: "12px 0",
              borderBottom: `1px solid ${C.sand}`,
            }}>{l.label}</a>
          ))}
          <a href={WA_URL} target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} style={{
            background: C.sage, color: "white", padding: "14px",
            borderRadius: "50px", fontSize: "15px", fontWeight: 700,
            textDecoration: "none", textAlign: "center", marginTop: "12px",
          }}>
            ליצירת קשר
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .mobile-nav { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } }
        .nav-link:hover { opacity: 0.7; }
      `}</style>
    </nav>
  );
}
