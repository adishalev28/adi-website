import { useState, useEffect } from "react";

const C = {
  cream:       "#FAF8F3",
  parchment:   "#F0EBE0",
  olive:       "#6B7A5A",
  oliveDark:   "#4A5640",
  gold:        "#C4A96D",
  goldDark:    "#A8894A",
  bark:        "#2C2A26",
  barkLight:   "#6B6560",
};

// ─── Navbar ───────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const isMobile = () => window.innerWidth < 768;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "אודות",   href: "#about"    },
    { label: "שירותים", href: "#services" },
    { label: "המלצות",  href: "#reviews"  },
    { label: "צור קשר", href: "#contact"  },
  ];

  const textColor = scrolled || menuOpen ? C.bark : "rgba(255,255,255,0.9)";

  return (
    <nav style={{
      position: "fixed", top: 0, right: 0, left: 0, zIndex: 100,
      background: scrolled || menuOpen ? "rgba(250,248,243,0.97)" : "transparent",
      backdropFilter: scrolled || menuOpen ? "blur(8px)" : "none",
      boxShadow: scrolled || menuOpen ? "0 1px 20px rgba(44,42,38,0.08)" : "none",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        maxWidth: "1100px", margin: "0 auto", padding: "0 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "68px",
      }}>
        {/* לוגו */}
        <div style={{ lineHeight: 1.1 }}>
          <div style={{ fontSize: "18px", fontWeight: 800, color: scrolled || menuOpen ? C.oliveDark : "white" }}>עדי שלו</div>
          <div style={{ fontSize: "11px", color: C.gold, fontWeight: 500, letterSpacing: "1px" }}>רפואה סינית</div>
        </div>

        {/* קישורים — desktop */}
        <div style={{ display: "flex", gap: "32px", "@media (max-width: 767px)": { display: "none" } }}
          className="desktop-nav">
          {links.map(l => (
            <a key={l.href} href={l.href} style={{
              fontSize: "14px", fontWeight: 600, color: textColor,
              textDecoration: "none", transition: "color 0.2s",
            }}>{l.label}</a>
          ))}
        </div>

        {/* כפתורי ימין */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a href="#contact" className="desktop-nav" style={{
            background: C.gold, color: C.bark, padding: "9px 22px",
            borderRadius: "50px", fontSize: "14px", fontWeight: 700,
            textDecoration: "none",
          }}>
            קביעת תור
          </a>

          {/* המבורגר — mobile בלבד */}
          <button
            className="mobile-nav"
            onClick={() => setMenuOpen(o => !o)}
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "6px", display: "flex", flexDirection: "column", gap: "5px",
            }}
          >
            <span style={{ display: "block", width: "24px", height: "2px", background: textColor, transition: "all 0.3s",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: textColor, transition: "all 0.3s",
              opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "24px", height: "2px", background: textColor, transition: "all 0.3s",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* תפריט פתוח — mobile */}
      {menuOpen && (
        <div className="mobile-nav" style={{
          background: "rgba(250,248,243,0.97)", padding: "16px 24px 24px",
          display: "flex", flexDirection: "column", gap: "4px",
          borderTop: `1px solid ${C.parchment}`,
        }}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontSize: "16px", fontWeight: 600, color: C.bark,
              textDecoration: "none", padding: "12px 0",
              borderBottom: `1px solid ${C.parchment}`,
            }}>{l.label}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} style={{
            background: C.gold, color: C.bark, padding: "14px",
            borderRadius: "50px", fontSize: "15px", fontWeight: 700,
            textDecoration: "none", textAlign: "center", marginTop: "12px",
          }}>
            קביעת תור
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) { .mobile-nav { display: none !important; } }
        @media (max-width: 767px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section style={{
      minHeight: "100vh",
      background: `linear-gradient(160deg, ${C.oliveDark} 0%, #3D4A30 50%, #5C4A2A 100%)`,
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: "100px 24px 60px", position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: "-80px", left: "-80px",
        width: "400px", height: "400px", borderRadius: "50%",
        border: "1px solid rgba(196,169,109,0.15)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-120px", right: "-60px",
        width: "500px", height: "500px", borderRadius: "50%",
        border: "1px solid rgba(196,169,109,0.1)", pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "700px", textAlign: "center", position: "relative" }}>
        <div style={{
          display: "inline-block", marginBottom: "24px",
          background: "rgba(196,169,109,0.15)", border: "1px solid rgba(196,169,109,0.3)",
          borderRadius: "50px", padding: "6px 20px",
          fontSize: "13px", color: C.gold, fontWeight: 600,
        }}>
          🌿 רפואה סינית מסורתית
        </div>

        <h1 style={{
          fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900,
          color: "white", margin: "0 0 20px", lineHeight: 1.15,
        }}>
          הגוף שלך יודע<br />
          <span style={{ color: C.gold }}>איך להירפא</span>
        </h1>

        <p style={{
          fontSize: "clamp(16px, 2.5vw, 20px)", color: "rgba(255,255,255,0.8)",
          lineHeight: 1.7, margin: "0 auto 40px", maxWidth: "520px",
        }}>
          8 שנות ניסיון בדיקור סיני, שיאצו וצמחי מרפא —<br />
          טיפול שמטפל בשורש, לא רק בסימפטום.
        </p>

        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#contact" style={{
            background: C.gold, color: C.bark, padding: "14px 36px",
            borderRadius: "50px", fontSize: "16px", fontWeight: 800,
            textDecoration: "none", boxShadow: "0 4px 24px rgba(196,169,109,0.4)",
          }}>
            קביעת תור
          </a>
          <a href="#about" style={{
            background: "transparent", color: "white", padding: "14px 36px",
            borderRadius: "50px", fontSize: "16px", fontWeight: 600,
            textDecoration: "none", border: "1.5px solid rgba(255,255,255,0.4)",
          }}>
            קצת עליי
          </a>
        </div>

        <div style={{
          display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap",
          marginTop: "60px", paddingTop: "40px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}>
          {[["8+", "שנות ניסיון"], ["500+", "מטופלים"], ["4", "תחומי טיפול"]].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "32px", fontWeight: 900, color: C.gold }}>{num}</div>
              <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "2px" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" style={{ background: C.cream, padding: "90px 24px" }}>
      <style>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .about-photo {
          aspect-ratio: 4/5;
        }
        @media (max-width: 767px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-photo {
            aspect-ratio: 3/2 !important;
            max-height: 240px;
          }
        }
      `}</style>
      <div style={{ maxWidth: "900px", margin: "0 auto" }} className="about-grid">
        <div className="about-photo" style={{
          background: `linear-gradient(135deg, ${C.parchment}, ${C.olive}22)`,
          borderRadius: "24px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "80px", boxShadow: "0 8px 40px rgba(44,42,38,0.08)",
        }}>
          🌿
        </div>

        <div>
          <div style={{ color: C.gold, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", marginBottom: "12px" }}>
            אודות
          </div>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: C.bark, margin: "0 0 16px", lineHeight: 1.2 }}>
            עדי שלו
          </h2>
          <div style={{ width: "48px", height: "3px", background: C.gold, borderRadius: "2px", marginBottom: "24px" }} />
          <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.8, margin: "0 0 16px" }}>
            מטפל מוסמך ברפואה סינית עם ניסיון של למעלה מ-8 שנים. מאמין עמוקות בגישה הוליסטית — טיפול בשורש הבעיה ולא רק בסימפטום.
          </p>
          <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.8, margin: "0 0 32px" }}>
            מתמחה בדיקור סיני, שיאצו, צמחי מרפא סיניים וכוסות רוח. כל טיפול מותאם אישית לכל מטופל ומטופלת.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["דיקור סיני", "שיאצו", "צמחי מרפא", "כוסות רוח"].map(tag => (
              <span key={tag} style={{
                background: C.parchment, color: C.oliveDark,
                padding: "6px 16px", borderRadius: "50px", fontSize: "13px", fontWeight: 600,
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────
const SERVICES = [
  { icon: "🪡", title: "דיקור סיני",        text: "שיטה עתיקה המאזנת את זרימת האנרגיה בגוף. יעילה לכאבים, עייפות, חרדה ובעיות שינה." },
  { icon: "🤲", title: "שיאצו",             text: "עיסוי יפני עמוק לאורך מרידיאנים בגוף. משחרר מתח, מפחית כאבים ומשפר את מצב הרוח." },
  { icon: "🌿", title: "צמחי מרפא סיניים", text: "תרכובות צמחיות מותאמות אישית שתומכות בטיפול ומחזקות את הגוף מבפנים." },
  { icon: "🫧", title: "כוסות רוח",         text: "טכניקה שמגבירה זרימת הדם, מפחיתה כאבי שרירים ומסייעת לסילוק חסימות אנרגטיות." },
];

function Services() {
  return (
    <section id="services" style={{ background: C.parchment, padding: "90px 24px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ color: C.gold, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", marginBottom: "12px" }}>השירותים שלי</div>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: C.bark, margin: "0 0 16px" }}>כל הגוף, כל הנפש</h2>
          <p style={{ fontSize: "16px", color: C.barkLight, maxWidth: "460px", margin: "0 auto", lineHeight: 1.7 }}>
            שילוב של שיטות רפואה סינית מסורתיות לטיפול הוליסטי ומותאם אישית
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px" }}>
          {SERVICES.map(s => (
            <div key={s.title} style={{
              background: "white", borderRadius: "20px", padding: "32px 24px",
              boxShadow: "0 2px 20px rgba(44,42,38,0.06)", border: `1px solid ${C.parchment}`,
            }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>{s.icon}</div>
              <h3 style={{ fontSize: "18px", fontWeight: 800, color: C.bark, margin: "0 0 12px" }}>{s.title}</h3>
              <p style={{ fontSize: "14px", color: C.barkLight, lineHeight: 1.7, margin: 0 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── For Whom ─────────────────────────────────────────────────────────────
function ForWhom() {
  const conditions = [
    "כאבי גב וצוואר", "כאבי ראש ומיגרנות", "עייפות כרונית",
    "חרדה ולחץ נפשי", "בעיות שינה", "כאבי מפרקים",
    "בעיות עיכול", "תמיכה בפוריות", "שיקום לאחר פציעה",
  ];
  return (
    <section style={{ background: C.cream, padding: "90px 24px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ color: C.gold, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", marginBottom: "12px" }}>למי זה מתאים</div>
        <h2 style={{ fontSize: "36px", fontWeight: 800, color: C.bark, margin: "0 0 16px" }}>מגיעים אלינו עם כל מיני בעיות</h2>
        <p style={{ fontSize: "16px", color: C.barkLight, margin: "0 0 48px", lineHeight: 1.7 }}>
          רפואה סינית יכולה לסייע במגוון רחב של מצבים — כטיפול עיקרי או כתמיכה לצד הרפואה הקונבנציונלית
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
          {conditions.map(c => (
            <span key={c} style={{
              background: C.parchment, border: `1.5px solid ${C.gold}44`,
              color: C.oliveDark, padding: "10px 20px", borderRadius: "50px",
              fontSize: "14px", fontWeight: 600,
            }}>{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Reviews ──────────────────────────────────────────────────────────────
const REVIEWS = [
  { text: "אחרי שנים של כאבי גב שלא מצאו להם פתרון, עדי עזר לי להגיע לשיפור משמעותי תוך כמה טיפולים. מומלץ בחום!", name: "מיכל כ.", sub: "כאבי גב כרוניים" },
  { text: "הטיפולים עם עדי שינו לי את החיים. עייפות שסבלתי ממנה שנים נעלמה. הגישה האישית והקשבה שלו פשוט מדהימה.", name: "יוסי ל.", sub: "עייפות כרונית" },
  { text: "הגעתי עם חרדות וקשיי שינה. השילוב של דיקור וצמחי מרפא פעל יפה מאוד. מרגיש הבדל אמיתי.", name: "שירה מ.", sub: "חרדה ובעיות שינה" },
];

function Reviews() {
  return (
    <section id="reviews" style={{ background: C.oliveDark, padding: "90px 24px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{ color: C.gold, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", marginBottom: "12px" }}>מה אומרים המטופלים</div>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: "white", margin: 0 }}>המלצות</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
          {REVIEWS.map(r => (
            <div key={r.name} style={{
              background: "rgba(255,255,255,0.06)", borderRadius: "20px", padding: "32px 28px",
              border: "1px solid rgba(196,169,109,0.2)",
            }}>
              <div style={{ fontSize: "28px", color: C.gold, marginBottom: "16px" }}>"</div>
              <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", lineHeight: 1.8, margin: "0 0 24px" }}>{r.text}</p>
              <div style={{ fontWeight: 700, color: "white", fontSize: "14px" }}>{r.name}</div>
              <div style={{ color: C.gold, fontSize: "12px", marginTop: "2px" }}>{r.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WhatsApp SVG (shared) ────────────────────────────────────────────────
const WaSvg = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// ─── Floating WhatsApp Button ─────────────────────────────────────────────
function FloatingWA() {
  const [visible, setVisible] = useState(false);
  const waUrl = `https://wa.me/972XXXXXXXXX?text=${encodeURIComponent("שלום עדי, אשמח לקבוע תור 🙂")}`;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .wa-float {
          position: fixed;
          bottom: 24px;
          left: 24px;
          z-index: 200;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #25D366;
          color: white;
          padding: 14px 22px;
          border-radius: 50px;
          font-size: 15px;
          font-weight: 800;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(37,211,102,0.45);
          transition: opacity 0.3s, transform 0.3s;
          white-space: nowrap;
        }
        .wa-float:hover { transform: scale(1.05); }
        .wa-float-hidden { opacity: 0; pointer-events: none; transform: translateY(16px); }
        @media (min-width: 768px) {
          .wa-float span.wa-label { display: inline; }
        }
        @media (max-width: 767px) {
          .wa-float { padding: 14px 18px; }
          .wa-float span.wa-label { display: none; }
        }
      `}</style>
      <a href={waUrl} target="_blank" rel="noreferrer"
        className={`wa-float${visible ? "" : " wa-float-hidden"}`}>
        <WaSvg size={22} />
        <span className="wa-label">קביעת תור</span>
      </a>
    </>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────
function Contact() {
  const waUrl = `https://wa.me/972XXXXXXXXX?text=${encodeURIComponent("שלום עדי, אשמח לקבוע תור 🙂")}`;
  return (
    <section id="contact" style={{ background: C.cream, padding: "90px 24px" }}>
      <style>{`
        .contact-btn { width: auto; }
        @media (max-width: 767px) { .contact-btn { width: 100%; justify-content: center; } }
      `}</style>
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ color: C.gold, fontSize: "13px", fontWeight: 700, letterSpacing: "2px", marginBottom: "12px" }}>צור קשר</div>
        <h2 style={{ fontSize: "36px", fontWeight: 800, color: C.bark, margin: "0 0 16px" }}>מוכנים להתחיל?</h2>
        <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.7, margin: "0 0 48px" }}>
          צרו קשר ונקבע לכם תור בהקדם האפשרי.<br />אשמח לענות על כל שאלה.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "stretch" }}>
          <a href={waUrl} target="_blank" rel="noreferrer" className="contact-btn" style={{
            background: "#25D366", color: "white", padding: "16px 40px",
            borderRadius: "50px", fontSize: "16px", fontWeight: 800,
            textDecoration: "none", display: "flex", alignItems: "center", gap: "10px",
            boxShadow: "0 4px 24px rgba(37,211,102,0.35)",
          }}>
            <WaSvg size={22} />
            שלחו הודעה ב-WhatsApp
          </a>
          <a href="https://adi-clinic-app-4c95.vercel.app/intake" target="_blank" rel="noreferrer" className="contact-btn" style={{
            background: C.parchment, color: C.oliveDark, padding: "16px 40px",
            borderRadius: "50px", fontSize: "16px", fontWeight: 700,
            textDecoration: "none", border: `1.5px solid ${C.gold}66`,
            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
          }}>
            📋 מלאו שאלון מטופל
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      background: C.bark, color: "rgba(255,255,255,0.5)",
      padding: "28px 24px", textAlign: "center", fontSize: "13px",
    }}>
      © {new Date().getFullYear()} עדי שלו — רפואה סינית. כל הזכויות שמורות.
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <ForWhom />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingWA />
    </>
  );
}
