import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import FloatingWA from "../shared/FloatingWA";
import ContactCTA from "../shared/ContactCTA";
import GlobalStyles from "../shared/GlobalStyles";
import { C, WA_URL } from "../shared/constants";
import Section from "../shared/Section";

/* ─── תבנית מאמר בודד ─── */
export default function ArticleLayout({ title, subtitle, date, readTime, children, relatedArticles = [] }) {
  return (
    <>
      <GlobalStyles />
      <Navbar basePath="/" />

      {/* Hero */}
      <header style={{
        background: `linear-gradient(135deg, ${C.sage} 0%, ${C.sageDark} 100%)`,
        padding: "120px 24px 60px",
        textAlign: "center",
      }}>
        {/* Breadcrumbs */}
        <nav style={{ marginBottom: "20px" }}>
          <a href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "13px" }}>
            דף הבית
          </a>
          <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 8px" }}>/</span>
          <a href="/blog/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "13px" }}>
            מאמרים
          </a>
          <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 8px" }}>/</span>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>{title}</span>
        </nav>

        <h1 style={{
          fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 800,
          color: "white", maxWidth: "700px", margin: "0 auto 12px",
          lineHeight: 1.3,
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            fontSize: "17px", color: "rgba(255,255,255,0.75)",
            maxWidth: "600px", margin: "0 auto 20px", lineHeight: 1.6,
          }}>
            {subtitle}
          </p>
        )}
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
          {date && <span>{date}</span>}
          {readTime && <span>· {readTime} דקות קריאה</span>}
        </div>
      </header>

      {/* תוכן המאמר */}
      <article style={{
        maxWidth: "740px", margin: "0 auto",
        padding: "48px 24px 60px",
        fontSize: "16px", lineHeight: 1.8, color: C.bark,
      }}>
        {children}
      </article>

      {/* מאמרים נוספים */}
      {relatedArticles.length > 0 && (
        <Section bg={C.sand}>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 32px" }}>
              מאמרים נוספים
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
              {relatedArticles.map(a => (
                <a key={a.href} href={a.href} style={{
                  background: "white", borderRadius: "16px", padding: "24px",
                  textDecoration: "none", textAlign: "right",
                  border: `1px solid ${C.sage}15`,
                  boxShadow: "0 2px 12px rgba(44,42,38,0.04)",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(44,42,38,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(44,42,38,0.04)"; }}
                >
                  <p style={{ fontSize: "13px", color: C.sage, fontWeight: 600, margin: "0 0 6px" }}>
                    {a.tag}
                  </p>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: C.bark, margin: 0, lineHeight: 1.4 }}>
                    {a.title}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </Section>
      )}

      <ContactCTA title="רוצים לדעת עוד?" subtitle="צרו קשר ונשמח לענות על כל שאלה" />
      <Footer />
      <FloatingWA />

      <style>{`
        article h2 {
          font-size: 24px;
          font-weight: 800;
          color: ${C.bark};
          margin: 40px 0 16px;
          padding-top: 20px;
          border-top: 2px solid ${C.sage}20;
        }
        article h3 {
          font-size: 19px;
          font-weight: 700;
          color: ${C.sageDark};
          margin: 28px 0 12px;
        }
        article p {
          margin: 0 0 16px;
        }
        article ul, article ol {
          margin: 0 0 16px;
          padding-right: 24px;
        }
        article li {
          margin-bottom: 8px;
        }
        article strong {
          color: ${C.sageDark};
          font-weight: 700;
        }
        article blockquote {
          background: ${C.sand};
          border-right: 4px solid ${C.sage};
          padding: 16px 20px;
          margin: 24px 0;
          border-radius: 0 12px 12px 0;
          font-style: italic;
          color: ${C.barkLight};
        }
      `}</style>
    </>
  );
}
