import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import FloatingWA from "../shared/FloatingWA";
import ContactCTA from "../shared/ContactCTA";
import GlobalStyles from "../shared/GlobalStyles";
import { C } from "../shared/constants";

const ARTICLES = [
  {
    slug: "what-is-acupuncture",
    title: "מה זה דיקור סיני? מדריך מקיף למתחילים",
    description: "כל מה שצריך לדעת לפני הטיפול הראשון  - איך דיקור עובד, למי מתאים, מה מרגישים, וכמה טיפולים צריך.",
    tag: "דיקור סיני",
    date: "מרץ 2026",
    readTime: "5",
  },
  {
    slug: "back-pain",
    title: "דיקור סיני לכאבי גב  - איך זה עובד ולמי מתאים?",
    description: "כאבי גב הם הסיבה מספר 1 לפנייה לרפואה סינית. למדו איך דיקור סיני מטפל בכאבי גב תחתון, פריצת דיסק, כאבי צוואר וכאבי גב בהריון.",
    tag: "דיקור סיני",
    date: "מרץ 2026",
    readTime: "5",
  },
  {
    slug: "faq-complete",
    title: "שאלות ותשובות על רפואה סינית  - המדריך המלא",
    description: "20 השאלות הנפוצות ביותר על דיקור סיני, שיאצו ורפואה משלימה  - עם תשובות מקצועיות ומפורטות.",
    tag: "שאלות ותשובות",
    date: "מרץ 2026",
    readTime: "7",
  },
];

export default function BlogIndex() {
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
        <nav style={{ marginBottom: "20px" }}>
          <a href="/" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "13px" }}>
            דף הבית
          </a>
          <span style={{ color: "rgba(255,255,255,0.4)", margin: "0 8px" }}>/</span>
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px" }}>מאמרים</span>
        </nav>
        <h1 style={{
          fontSize: "clamp(32px, 5vw, 46px)", fontWeight: 800,
          color: "white", margin: "0 0 12px",
        }}>
          מאמרים ומידע מקצועי
        </h1>
        <p style={{
          fontSize: "17px", color: "rgba(255,255,255,0.7)",
          maxWidth: "500px", margin: "0 auto",
        }}>
          מידע מקצועי על רפואה סינית, דיקור, שיאצו ובריאות טבעית
        </p>
      </header>

      {/* רשימת מאמרים */}
      <section style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 24px 60px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {ARTICLES.map(a => (
            <a key={a.slug} href={`/blog/${a.slug}/`} style={{
              background: "white", borderRadius: "20px", padding: "28px 32px",
              textDecoration: "none", display: "block",
              border: `1px solid ${C.sage}15`,
              boxShadow: "0 2px 12px rgba(44,42,38,0.04)",
              transition: "all 0.25s",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 8px 28px rgba(44,42,38,0.1)";
                e.currentTarget.style.borderColor = C.sage;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "none";
                e.currentTarget.style.boxShadow = "0 2px 12px rgba(44,42,38,0.04)";
                e.currentTarget.style.borderColor = `${C.sage}15`;
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                <span style={{
                  background: `${C.sage}15`, color: C.sage,
                  padding: "4px 14px", borderRadius: "20px",
                  fontSize: "12px", fontWeight: 700,
                }}>
                  {a.tag}
                </span>
                <span style={{ fontSize: "12px", color: C.barkLight }}>
                  {a.date} · {a.readTime} דק׳
                </span>
              </div>
              <h2 style={{
                fontSize: "20px", fontWeight: 800, color: C.bark,
                margin: "0 0 8px", lineHeight: 1.4,
              }}>
                {a.title}
              </h2>
              <p style={{
                fontSize: "14px", color: C.barkLight, margin: 0, lineHeight: 1.6,
              }}>
                {a.description}
              </p>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                marginTop: "14px", fontSize: "14px", fontWeight: 700, color: C.sage,
              }}>
                קראו עוד
                <span style={{ fontSize: "16px" }}>←</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <ContactCTA />
      <Footer />
      <FloatingWA />
    </>
  );
}
