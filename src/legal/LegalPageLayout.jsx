import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import FloatingWA from "../shared/FloatingWA";
import CookieConsent from "../shared/CookieConsent";
import AccessibilityWidget from "../shared/AccessibilityWidget";
import GlobalStyles from "../shared/GlobalStyles";
import { C } from "../shared/constants";

export default function LegalPageLayout({ title, lastUpdated, children }) {
  return (
    <>
      <GlobalStyles />
      <Navbar basePath="/" />

      {/* Header */}
      <header style={{
        background: `linear-gradient(135deg, ${C.sage} 0%, ${C.sageDark} 100%)`,
        padding: "120px 24px 50px",
        textAlign: "center",
      }}>
        <nav style={{ marginBottom: "20px" }}>
          <a href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "13px" }}>
            דף הבית
          </a>
          <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 8px" }}>/</span>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>{title}</span>
        </nav>
        <h1 style={{
          fontSize: "clamp(28px, 5vw, 40px)", fontWeight: 800,
          color: "white", margin: "0 0 12px",
        }}>
          {title}
        </h1>
        {lastUpdated && (
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", margin: 0 }}>
            עודכן לאחרונה: {lastUpdated}
          </p>
        )}
      </header>

      {/* Content */}
      <article style={{
        maxWidth: "740px", margin: "0 auto",
        padding: "48px 24px 60px",
        fontSize: "16px", lineHeight: 1.8, color: C.bark,
      }}>
        {children}
      </article>

      <Footer />
      <FloatingWA />
      <CookieConsent />
      <AccessibilityWidget />

      <style>{`
        article h2 {
          font-size: 24px; font-weight: 800; color: ${C.bark};
          margin: 40px 0 16px; padding-top: 20px;
          border-top: 2px solid ${C.sage}20;
        }
        article h2:first-child { border-top: none; padding-top: 0; margin-top: 0; }
        article h3 {
          font-size: 19px; font-weight: 700; color: ${C.sageDark};
          margin: 28px 0 12px;
        }
        article p { margin: 0 0 16px; }
        article ul, article ol { margin: 0 0 16px; padding-right: 24px; }
        article li { margin-bottom: 8px; }
        article strong { color: ${C.sageDark}; font-weight: 700; }
      `}</style>
    </>
  );
}
