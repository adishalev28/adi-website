import { useState, useEffect, useRef } from "react";
import { C, PHONE, WA_URL } from "./shared/constants";
import useFadeIn from "./shared/useFadeIn";
import Section from "./shared/Section";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import FloatingWA from "./shared/FloatingWA";
import WaSvg from "./shared/WaSvg";
import CookieConsent from "./shared/CookieConsent";
import AccessibilityWidget from "./shared/AccessibilityWidget";

// ─── Hero  - full-screen image with warm overlay ──────────────────────────
function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const heroSrc = isMobile ? "/hero-mobile.jpg" : "/clinic-room.jpg";
    const img = new Image();
    img.src = heroSrc;
    img.onload = () => setLoaded(true);
    const t = setTimeout(() => setLoaded(true), 2000);
    return () => clearTimeout(t);
  }, [isMobile]);

  const heroSrc = isMobile ? "/hero-mobile.jpg" : "/clinic-room.jpg";

  return (
    <section className="hero-section" style={{
      minHeight: "100vh", position: "relative", overflow: "hidden",
      display: "flex", alignItems: "center", justifyContent: "center",
    }}>
      {/* Background image  - desktop: clinic-room, mobile: portrait hero */}
      <div className="hero-bg" style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${heroSrc})`,
        backgroundSize: "cover", backgroundPosition: isMobile ? "center 8%" : "center 40%",
        filter: "brightness(0.85)",
        transition: "opacity 1.2s ease",
        opacity: loaded ? 1 : 0,
      }} />

      {/* Warm overlay gradient */}
      <div style={{
        position: "absolute", inset: 0,
        background: isMobile
          ? "linear-gradient(to bottom, rgba(44,42,38,0.5) 0%, rgba(44,42,38,0.3) 50%, rgba(44,42,38,0.7) 92%, rgba(44,42,38,0.95) 100%)"
          : "linear-gradient(to bottom, rgba(44,42,38,0.55) 0%, rgba(44,42,38,0.35) 40%, rgba(44,42,38,0.7) 90%, rgba(44,42,38,0.95) 100%)",
      }} />

      {/* Content */}
      <div className="hero-content" style={{
        position: "relative", maxWidth: "680px", textAlign: "center",
        padding: isMobile ? "210px 24px 40px" : "220px 24px 80px",
        opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s",
      }}>
        <div style={{
          display: "inline-block", marginBottom: "16px",
          fontSize: "clamp(13px, 2.5vw, 18px)", color: "rgba(255,255,255,0.9)", fontWeight: 500,
          letterSpacing: "2px", whiteSpace: "nowrap",
        }}>
          ✦ רפואה סינית מסורתית · ראשון לציון ✦
        </div>
        <h1 style={{
          fontSize: "clamp(42px, 7vw, 68px)", fontWeight: 900,
          color: C.goldLight, margin: "0 0 8px", lineHeight: 1.1,
          textShadow: "0 2px 20px rgba(0,0,0,0.15)",
        }}>
          עדי שלו
        </h1>
        <p style={{
          fontSize: "clamp(18px, 3vw, 24px)", fontWeight: 500,
          color: "rgba(255,255,255,0.85)", margin: "0 0 28px",
          letterSpacing: "1px",
        }}>
          מטפל ברפואה סינית
        </p>

        {/* Treatment bullets  - clickable */}
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px",
          margin: "0 auto 36px", maxWidth: "480px",
        }}>
          {[
            { label: "דיקור סיני", href: "#svc-acupuncture" },
            { label: "שיאצו", href: "#svc-shiatsu" },
            { label: "כוסות רוח", href: "#svc-cupping" },
            { label: "צמחי מרפא", href: "#svc-herbs" },
          ].map(t => (
            <a key={t.label} href={t.href} style={{
              background: "rgba(255,255,255,0.12)", backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "50px", padding: "8px 20px",
              fontSize: "14px", color: "rgba(255,255,255,0.9)", fontWeight: 500,
              textDecoration: "none", transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.22)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; }}
            >{t.label}</a>
          ))}
        </div>
        <br />

        <a id="hero-cta" href={WA_URL} target="_blank" rel="noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          background: "linear-gradient(135deg, #34A853, #2D9248)",
          color: "white", padding: "18px 44px",
          borderRadius: "50px", fontSize: "16px", fontWeight: 700,
          textDecoration: "none",
          boxShadow: "0 6px 32px rgba(52,168,83,0.45)",
          transition: "transform 0.2s, box-shadow 0.2s",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 44px rgba(52,168,83,0.55)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 6px 32px rgba(52,168,83,0.45)"; }}
        >
          <WaSvg size={20} />
          ליצירת קשר
        </a>

        {/* scroll indicator */}
        <div className="scroll-hint" style={{
          marginTop: "60px", display: "flex", flexDirection: "column",
          alignItems: "center", gap: "8px",
        }}>
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", letterSpacing: "2px" }}>גללו למטה</span>
          <div style={{
            width: "1px", height: "32px",
            background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)",
          }} />
        </div>
      </div>
    </section>
  );
}

// ─── Stats strip ─────────────────────────────────────────────────────────
function Stats() {
  const ref = useFadeIn();
  return (
    <div ref={ref} className="fade-section" style={{
      background: C.bark, padding: "20px 24px",
    }}>
      <div className="stats-grid" style={{
        maxWidth: "600px", margin: "0 auto",
        display: "flex", justifyContent: "center", gap: "48px", flexWrap: "wrap",
      }}>
        {[["8+", "שנות ניסיון"], ["+500", "מטופלים מרוצים"], ["4", "שיטות טיפול"]].map(([num, label]) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "26px", fontWeight: 900, color: C.goldLight }}>{num}</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginTop: "2px", letterSpacing: "1px" }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── About ────────────────────────────────────────────────────────────────
function About() {
  return (
    <Section id="about" bg={C.sand} style={{ padding: "20px 24px 60px" }}>
      <style>{`
        .about-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 64px; align-items: center; max-width: 920px; margin: 0 auto; }
        .about-photo { aspect-ratio: 4/5; border-radius: 20px; overflow: hidden; box-shadow: 0 12px 48px rgba(44,42,38,0.12); }
        .about-photo img { width: 100%; height: 100%; object-fit: cover; display: block; }
        @media (max-width: 767px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 32px !important; max-width: 100% !important; text-align: center !important; }
          .about-photo { aspect-ratio: 16/9 !important; border-radius: 0 !important; margin: 0 -24px !important; width: calc(100% + 48px) !important; box-shadow: none !important; }
          .about-grid .about-text-tags { justify-content: center !important; }
          .about-grid .about-divider { margin-inline: auto !important; }
        }
      `}</style>
      <div className="about-grid">
        <div className="about-photo">
          <img src="/adi-portrait.jpg" alt="עדי שלו  - מטפל ברפואה סינית מוסמך, בוגר מכללת רידמן, ראשון לציון" loading="lazy" />
        </div>
        <div>
          <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px", textTransform: "uppercase" }}>
            קצת עליי
          </div>
          <h2 style={{ fontSize: "36px", fontWeight: 800, color: C.bark, margin: "0 0 16px", lineHeight: 1.2 }}>
            עדי שלו
          </h2>
          <div className="about-divider" style={{ width: "40px", height: "3px", background: C.gold, borderRadius: "2px", marginBottom: "24px" }} />
          <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
            בוגר <strong style={{ color: C.bark }}>מכללת רידמן</strong> לרפואה סינית, עם למעלה מ-8 שנות ניסיון קליני ומעל 500 מטופלים. מתמחה בדיקור סיני, שיאצו, כוסות רוח וצמחי מרפא סיניים.
          </p>
          <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
            בקליניקה שלי ב<strong style={{ color: C.bark }}>ראשון לציון</strong> אני מעניק לכל מטופל יחס אישי ומקצועי. בטיפול הראשון אני מבצע אבחון מעמיק  - שיחה, בדיקת דופק ולשון  - ובונה תוכנית טיפול מותאמת שמשלבת בין השיטות השונות לפי הצורך.
          </p>
          <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 32px" }}>
            המטופלים שלי מגיעים עם כאבי גב, מיגרנות, מתח נפשי, בעיות שינה ועוד  - ורבים מהם חווים הקלה משמעותית כבר אחרי מספר טיפולים בודדים. המטרה שלי היא לא רק להקל בכאב, אלא לטפל בשורש הבעיה ולשפר את איכות החיים לאורך זמן.
          </p>
          <div className="about-text-tags" style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {["דיקור סיני", "שיאצו", "צמחי מרפא", "כוסות רוח"].map(tag => (
              <span key={tag} style={{
                background: `${C.sage}15`, color: C.sageDark,
                padding: "7px 18px", borderRadius: "50px", fontSize: "13px", fontWeight: 600,
                border: `1px solid ${C.sage}30`,
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── Service SVG Icons ────────────────────────────────────────────────────
const AcupunctureIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke={C.sage} strokeWidth="1.5" strokeLinecap="round">
    <line x1="10" y1="6" x2="14" y2="28" /><circle cx="9.5" cy="4" r="2" fill={C.sage} stroke="none" />
    <line x1="22" y1="6" x2="18" y2="28" /><circle cx="22.5" cy="4" r="2" fill={C.sage} stroke="none" />
  </svg>
);
const ShiatsuIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke={C.sage} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 28c0-5-3-8-3-13a3 3 0 016 0v-3a3 3 0 016 0v-2a3 3 0 016 0v8" />
    <path d="M23 18c2-2 4-2 5 0s-1 6-5 10H8" />
  </svg>
);
const HerbsIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke={C.sage} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 28V8" />
    <path d="M16 12c-5-2-10-1-11 3 4 0 8-1 11-3" />
    <path d="M16 20c5-2 10-1 11 3-4 0-8-1-11-3" />
    <path d="M16 7c-3-3-7-3-8 0 3 1 6 0 8 0" />
  </svg>
);
const CuppingIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" stroke={C.sage} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 22c0-10 3-16 8-16s8 6 8 16" />
    <line x1="6" y1="22" x2="26" y2="22" />
    <path d="M10 25c3 3 9 3 12 0" />
  </svg>
);

// ─── Services ─────────────────────────────────────────────────────────────
const SERVICES = [
  { id: "svc-acupuncture", icon: <AcupunctureIcon />, title: "דיקור סיני",        href: "/dikur-sini/", text: "שיטה עתיקה המכוונת לשיפור זרימת האנרגיה בגוף, הפגת כאבים וטיפול בבעיות רפואיות שונות. הטיפול מותאם אישית לכל מטופל ומשפיע לטווח ארוך על הבריאות הכללית." },
  { id: "svc-shiatsu",     icon: <ShiatsuIcon />,     title: "שיאצו",             href: "/shiatsu/", text: "לחיצות ממוקדות לאורך מרידיאנים בגוף, במטרה לשחרר מתח, לשפר את זרימת הדם ולהקל על כאבים. שיאצו הוא פתרון טבעי ויעיל לשיפור הבריאות הפיזית והרגשית." },
  { id: "svc-herbs",       icon: <HerbsIcon />,       title: "צמחי מרפא סיניים", href: "/herbs/", text: "צמחי מרפא סיניים, הנבחרים בקפידה על פי הצרכים האישיים של כל מטופל. הצמחים תורמים לשיפור המערכת החיסונית, הפחתת דלקות ושיפור הבריאות הכללית בצורה טבעית." },
  { id: "svc-cupping",     icon: <CuppingIcon />,     title: "כוסות רוח",         href: "/cupping/", text: "שימוש בכוסות רוח לשיפור זרימת הדם ולהפחתת כאבים ודלקת. הטיפול, המבוצע באמצעות יצירת ואקום, מסייע בהקלה על כאבים כרוניים ובשיפור התחושה הכללית." },
];

function Services() {
  return (
    <Section id="services" bg={C.sand} style={{ padding: "100px 24px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>השירותים שלי</div>
          <h2 className="section-title" style={{ fontSize: "36px", fontWeight: 800, color: C.bark, margin: "0 0 16px" }}>שיטות הטיפול</h2>
          <p style={{ fontSize: "16px", color: C.barkLight, maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            בקליניקה בראשון לציון אני משלב בין שיטות רפואה סינית מסורתיות לטיפול מותאם אישית לכל מטופל
          </p>
        </div>
        <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
          {SERVICES.map(s => (
            <div key={s.title} id={s.id} className="service-card" style={{
              background: "white", borderRadius: "20px", padding: "32px 28px",
              boxShadow: "0 2px 24px rgba(44,42,38,0.06)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "default", scrollMarginTop: "100px",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(44,42,38,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 2px 24px rgba(44,42,38,0.06)"; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px" }}>
                <div style={{
                  width: "52px", height: "52px", borderRadius: "50%",
                  background: `${C.sage}15`, border: `1px solid ${C.sage}25`,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 800, color: C.bark, margin: 0 }}>{s.title}</h3>
              </div>
              <p style={{ fontSize: "14px", color: C.barkLight, lineHeight: 1.8, margin: "0 0 16px" }}>{s.text}</p>
              <a href={s.href} style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                fontSize: "14px", fontWeight: 700, color: C.sage,
                textDecoration: "none", transition: "gap 0.2s",
              }}
                onMouseEnter={e => e.currentTarget.style.gap = "10px"}
                onMouseLeave={e => e.currentTarget.style.gap = "6px"}
              >
                קראו עוד
                <span style={{ fontSize: "18px" }}>←</span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 767px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
}

// ─── Weekly Treatment ─────────────────────────────────────────────────────
const WEEKLY_TREATMENT = {
  title: "כאבי צוואר כרוניים",
  patient: "מטופלת בת 42",
  description: "הגיעה עם כאבי צוואר כרוניים שלא הגיבו לפיזיותרפיה. שילבתי דיקור סיני בנקודות מקומיות עם כוסות רוח לשחרור השרירים התפוסים באזור הצוואר והכתפיים.",
  result: "אחרי 3 טיפולים דיווחה על ירידה משמעותית בכאב ושיפור בטווח התנועה.",
  methods: ["דיקור סיני", "כוסות רוח"],
  date: "מרץ 2026",
};

function WeeklyTreatment() {
  const t = WEEKLY_TREATMENT;
  return (
    <Section bg={C.cream} style={{ padding: "80px 24px" }}>
      <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>מהקליניקה שלי</div>
        <h2 className="section-title" style={{ fontSize: "36px", fontWeight: 800, color: C.bark, margin: "0 0 48px" }}>הצצה לטיפול אחרון</h2>

        <div style={{
          background: "white", borderRadius: "20px", padding: "40px 32px",
          boxShadow: "0 4px 32px rgba(44,42,38,0.06)",
          border: `1px solid ${C.sand}`, textAlign: "right",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <div style={{
              width: "44px", height: "44px", borderRadius: "50%",
              background: `${C.sage}15`, display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.sage} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>
                <rect x="8" y="2" width="8" height="4" rx="1"/>
                <path d="M9 14l2 2 4-4"/>
              </svg>
            </div>
            <div>
              <div style={{ fontSize: "18px", fontWeight: 700, color: C.bark }}>{t.title}</div>
              <div style={{ fontSize: "13px", color: C.barkLight }}>{t.patient}</div>
            </div>
          </div>

          <p style={{ fontSize: "15px", color: C.barkLight, lineHeight: 1.8, margin: "0 0 16px" }}>
            {t.description}
          </p>
          <p style={{ fontSize: "15px", color: C.sage, lineHeight: 1.8, margin: "0 0 24px", fontWeight: 600 }}>
            {t.result}
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {t.methods.map(m => (
                <span key={m} style={{
                  background: `${C.sage}12`, color: C.sageDark,
                  padding: "6px 16px", borderRadius: "50px", fontSize: "13px", fontWeight: 600,
                  border: `1px solid ${C.sage}25`,
                }}>{m}</span>
              ))}
            </div>
            <span style={{ fontSize: "13px", color: C.barkLight }}>{t.date}</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── For Whom ─────────────────────────────────────────────────────────────
function ForWhom() {
  const conditions = [
    "כאבי גב, צוואר וכתפיים", "סיאטיקה ופריצות דיסק", "כאב מקרין",
    "כאבי ברכיים ומרפק", "כתף קפואה", "מיגרנות וכאבי ראש חוזרים",
    "מתח נפשי וחרדה", "קושי להירגע", "בעיות שינה",
    "עייפות כרונית", "נפיחות ועצירות", "בעיות עיכול",
    "איזון הורמונלי ופריון",
  ];
  return (
    <Section bg={C.cream} style={{ paddingTop: "60px" }} id="for-whom">
      <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>למי זה מתאים</div>
        <h2 className="section-title" style={{ fontSize: "36px", fontWeight: 800, color: C.bark, margin: "0 0 16px" }}>במה רפואה סינית יכולה לעזור?</h2>
        <p style={{ fontSize: "16px", color: C.barkLight, margin: "0 0 48px", lineHeight: 1.7, maxWidth: "560px", marginInline: "auto" }}>
          רפואה סינית מטפלת במגוון רחב של מצבים  - הנה חלק מהנפוצים. לא מצאתם את מה שאתם מחפשים? צרו קשר ונבדוק יחד
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
          {conditions.map(c => (
            <span key={c} className="condition-pill" style={{
              background: "white", border: `1.5px solid ${C.sage}30`,
              color: C.bark, padding: "10px 22px", borderRadius: "50px",
              fontSize: "14px", fontWeight: 600,
              boxShadow: "0 2px 8px rgba(44,42,38,0.04)",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = C.sage; e.currentTarget.style.color = "white"; e.currentTarget.style.borderColor = C.sage; }}
              onMouseLeave={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = C.bark; e.currentTarget.style.borderColor = `${C.sage}30`; }}
            >{c}</span>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Photo Lightbox  - full-screen horizontal scroll gallery ─────────────
function PhotoLightbox({ photos, startIndex, onClose }) {
  const scrollRef = useRef(null);
  const [currentIdx, setCurrentIdx] = useState(startIndex);

  /* Lock body scroll, close on Escape */
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [onClose]);

  /* Scroll to the clicked photo on open */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const slide = el.children[startIndex];
    if (slide) slide.scrollIntoView({ behavior: "instant", inline: "start", block: "nearest" });
  }, [startIndex]);

  /* Track which photo is visible */
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const w = el.clientWidth;
        /* RTL: scrollLeft is 0 at start (right), negative as you scroll left */
        const idx = Math.round(Math.abs(el.scrollLeft) / w);
        setCurrentIdx(Math.min(idx, photos.length - 1));
        ticking = false;
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [photos.length]);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      background: "rgba(250,248,243,0.97)",
      backdropFilter: "blur(20px)",
      animation: "lbFadeIn .3s ease",
      display: "flex", flexDirection: "column",
    }}>

      {/* Top bar  - close + counter */}
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "16px 20px", flexShrink: 0,
      }}>
        <button onClick={onClose} style={{
          background: "none", border: `1.5px solid ${C.sand}`, borderRadius: "50%",
          width: "40px", height: "40px", cursor: "pointer", display: "flex",
          alignItems: "center", justifyContent: "center",
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={C.bark} strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <span style={{ fontSize: "14px", fontWeight: 600, color: C.barkLight }}>
          {currentIdx + 1} / {photos.length}
        </span>
      </div>

      {/* Scrollable photo strip  - each slide is 100vw */}
      <div ref={scrollRef} className="lb-scroll" style={{
        flex: 1, display: "flex", overflowX: "auto",
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
      }}>
        {photos.map((p, i) => (
          <div key={p.src} style={{
            flexShrink: 0, width: "100vw",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "0 16px",
            scrollSnapAlign: "start",
          }}>
            <img src={p.src} alt={p.alt} style={{
              maxWidth: "100%", maxHeight: "calc(100vh - 140px)",
              objectFit: "contain", borderRadius: "12px",
              userSelect: "none",
              boxShadow: "0 8px 40px rgba(44,42,38,0.12)",
            }} />
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div style={{
        display: "flex", gap: "8px", justifyContent: "center",
        padding: "16px", flexShrink: 0,
      }}>
        {photos.map((_, i) => (
          <div key={i} style={{
            width: currentIdx === i ? "24px" : "8px", height: "8px",
            borderRadius: "4px",
            background: currentIdx === i ? C.sage : C.sand,
            transition: "all 0.3s ease",
          }} />
        ))}
      </div>

      <style>{`
        @keyframes lbFadeIn { from { opacity: 0 } to { opacity: 1 } }
        .lb-scroll::-webkit-scrollbar { display: none; }
        .lb-scroll { scrollbar-width: none; }
      `}</style>
    </div>
  );
}

// ─── Clinic Photos  - horizontal scroll strip with auto-scroll ────────────
function ClinicPhotos() {
  const allPhotos = [
    { src: "/clinic-room.jpg", alt: "חדר טיפולים בקליניקה לרפואה סינית של עדי שלו בראשון לציון" },
    { src: "/adi-acupuncture.jpg", alt: "עדי שלו מבצע טיפול דיקור סיני בקליניקה בראשון לציון" },
    { src: "/adi-desk.jpg", alt: "חדר ייעוץ ואבחון בקליניקה לרפואה סינית  - עדי שלו" },
    { src: "/clinic-entrance.jpg", alt: "כניסה לקליניקת רפואה סינית עדי שלו בראשון לציון" },
    { src: "/adi-treatment.jpg", alt: "טיפול בכוסות רוח בקליניקה לרפואה סינית בראשון לציון" },
    { src: "/adi-shiatsu.jpg", alt: "טיפול שיאצו  - עיסוי יפני מקצועי בקליניקת עדי שלו" },
  ];
  const landscape = allPhotos.filter((_, i) => [0, 1, 2].includes(i)); // clinic-room, acupuncture, desk
  const portrait  = allPhotos.filter((_, i) => [3, 4, 5].includes(i)); // shiatsu, treatment, entrance

  const scrollRefL = useRef(null);
  const scrollRefP = useRef(null);
  const userTouchedL = useRef(false);
  const userTouchedP = useRef(false);
  const [lbIndex, setLbIndex] = useState(null);

  // Auto-scroll hook for a carousel  - only stops on intentional horizontal interaction
  const useAutoScroll = (ref, touched, interval) => {
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      let startX = 0, startY = 0;
      const onDown = (e) => { startX = e.clientX || e.touches?.[0]?.clientX || 0; startY = e.clientY || e.touches?.[0]?.clientY || 0; };
      const onMove = (e) => {
        if (touched.current) return;
        const cx = e.clientX || e.touches?.[0]?.clientX || 0;
        const cy = e.clientY || e.touches?.[0]?.clientY || 0;
        const dx = Math.abs(cx - startX), dy = Math.abs(cy - startY);
        if (dx > 15 && dx > dy) touched.current = true; // horizontal swipe  - stop auto-scroll
      };
      el.addEventListener("pointerdown", onDown);
      el.addEventListener("pointermove", onMove);

      let iv = null;
      const startScroll = () => {
        if (iv) return;
        iv = setInterval(() => {
          if (touched.current) return;
          const card = el.querySelector(".clinic-photo-l, .clinic-photo-p");
          if (!card) return;
          const step = card.offsetWidth + 16;
          const maxScroll = el.scrollWidth - el.clientWidth;
          if (el.scrollLeft <= -maxScroll + 10) el.scrollTo({ left: 0, behavior: "smooth" });
          else el.scrollBy({ left: -step, behavior: "smooth" });
        }, interval);
      };
      const stopScroll = () => { clearInterval(iv); iv = null; };

      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) startScroll(); else stopScroll(); },
        { threshold: 0.3 }
      );
      obs.observe(el);

      return () => { stopScroll(); obs.disconnect(); el.removeEventListener("pointerdown", onDown); el.removeEventListener("pointermove", onMove); };
    }, []);
  };

  useAutoScroll(scrollRefL, userTouchedL, 2500);
  useAutoScroll(scrollRefP, userTouchedP, 3000);

  const closeLb = () => setLbIndex(null);

  return (
    <>
      <div style={{ background: C.cream, padding: "40px 0 0" }}>
        {/* קרוסל רוחב */}
        <div ref={scrollRefL} className="clinic-carousel" style={{
          display: "flex", gap: "16px", overflowX: "auto",
          padding: "0 24px 20px",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}>
          {landscape.map((p) => {
            const allIdx = allPhotos.findIndex(a => a.src === p.src);
            return (
              <div key={p.src} className="clinic-photo-l" onClick={() => setLbIndex(allIdx)} style={{
                flexShrink: 0, scrollSnapAlign: "start",
                borderRadius: "12px", overflow: "hidden",
                width: "420px", height: "280px", cursor: "pointer",
              }}>
                <img src={p.src} alt={p.alt} loading="lazy" style={{
                  width: "100%", height: "100%",
                  display: "block", objectFit: "cover",
                  transition: "transform 0.3s",
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
              </div>
            );
          })}
        </div>

        {/* קרוסל אורך */}
        <div ref={scrollRefP} className="clinic-carousel" style={{
          display: "flex", gap: "16px", overflowX: "auto",
          padding: "0 24px 40px",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}>
          {portrait.map((p) => {
            const allIdx = allPhotos.findIndex(a => a.src === p.src);
            return (
              <div key={p.src} className="clinic-photo-p" onClick={() => setLbIndex(allIdx)} style={{
                flexShrink: 0, scrollSnapAlign: "start",
                borderRadius: "12px", overflow: "hidden",
                width: "240px", height: "340px", cursor: "pointer",
              }}>
                <img src={p.src} alt={p.alt} loading="lazy" style={{
                  width: "100%", height: "100%",
                  display: "block", objectFit: "cover", objectPosition: "top",
                  transition: "transform 0.3s",
                }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {lbIndex !== null && (
        <PhotoLightbox photos={allPhotos} startIndex={lbIndex} onClose={closeLb} />
      )}

      <style>{`
        .clinic-carousel::-webkit-scrollbar { display: none; }
        .clinic-carousel { scrollbar-width: none; }
        @media (max-width: 767px) {
          .clinic-photo-l { width: 320px !important; height: 210px !important; }
          .clinic-photo-p { width: 200px !important; height: 280px !important; }
        }
      `}</style>
    </>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  { q: "האם דיקור סיני כואב?", a: "בדרך כלל לא. המחטים דקות מאוד ורוב המטופלים מרגישים תחושה קלה של עקצוץ או כבדות  - אבל לא כאב. רבים אפילו נרדמים במהלך הטיפול." },
  { q: "כמה טיפולים צריך?", a: "זה תלוי בבעיה ובמטופל. מצבים חריפים (כמו כאב גב חד) יכולים להשתפר תוך 3–5 טיפולים. מצבים כרוניים בדרך כלל דורשים סדרה ארוכה יותר. בטיפול הראשון נקבע יחד תוכנית מותאמת." },
  { q: "מה ההבדל בין דיקור לשיאצו?", a: "דיקור סיני משתמש במחטים דקות לאורך נקודות על מרידיאנים בגוף. שיאצו הוא עיסוי לחץ ידני באותן נקודות  - ללא מחטים. שתי השיטות מבוססות על אותם עקרונות של רפואה סינית." },
  { q: "מה לצפות בטיפול הראשון?", a: "הטיפול הראשון כולל שיחה מקיפה על הבעיה, ההיסטוריה הרפואית ואורח החיים. לאחר מכן הטיפול עצמו  - כ-60 דקות, לפעמים טיפה יותר. מומלץ להגיע לא רעבים ולא מלאים." },
  { q: "האם הטיפול מתאים לי אם אני לוקח תרופות?", a: "ברוב המקרים כן. רפואה סינית יכולה לפעול בצוותא עם טיפול קונבנציונלי. חשוב לציין את כל התרופות בשיחת המיון הראשונה." },
  { q: "איפה הקליניקה?", a: "הקליניקה ממוקמת במערב ראשון לציון. לכתובת המדויקת ולתיאום הגעה  - שלחו הודעת WhatsApp ואחזור אליכם." },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <Section id="faq" bg={C.sand}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>שאלות נפוצות</div>
          <h2 className="section-title" style={{ fontSize: "36px", fontWeight: 800, color: C.bark, margin: 0 }}>יש לכם שאלות?</h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} style={{
              background: "white", borderRadius: "16px",
              border: open === i ? `1.5px solid ${C.sage}50` : "1.5px solid transparent",
              boxShadow: open === i ? "0 4px 24px rgba(44,42,38,0.08)" : "0 1px 8px rgba(44,42,38,0.04)",
              overflow: "hidden", transition: "all 0.2s",
            }}>
              <button className="faq-btn" onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", background: "none", border: "none", cursor: "pointer",
                  padding: "20px 24px", display: "flex", justifyContent: "space-between",
                  alignItems: "center", gap: "16px", textAlign: "right",
                }}>
                <span style={{ fontSize: "16px", fontWeight: 700, color: C.bark, flex: 1 }}>{item.q}</span>
                <span style={{
                  width: "28px", height: "28px", borderRadius: "50%",
                  background: open === i ? C.sage : C.sand,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, transition: "all 0.3s", fontSize: "14px",
                  color: open === i ? "white" : C.barkLight,
                  transform: open === i ? "rotate(45deg)" : "none",
                }}>+</span>
              </button>
              <div style={{
                maxHeight: open === i ? "300px" : "0",
                overflow: "hidden", transition: "max-height 0.3s ease",
              }}>
                <div style={{ padding: "0 24px 20px", fontSize: "15px", color: C.barkLight, lineHeight: 1.8 }}>
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <p style={{ fontSize: "15px", color: C.barkLight, marginBottom: "16px" }}>
            לא מצאתם תשובה? שלחו הודעה ואחזור אליכם
          </p>
          <a href={WA_URL} target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: C.bark, color: "white", padding: "12px 28px",
            borderRadius: "50px", fontSize: "14px", fontWeight: 700,
            textDecoration: "none", transition: "background 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.background = C.sageDark}
            onMouseLeave={e => e.currentTarget.style.background = C.bark}
          >
            <WaSvg size={18} />
            שאלו אותי ב-WhatsApp
          </a>
        </div>
      </div>
    </Section>
  );
}

// ─── Reviews  - real Google reviews ────────────────────────────────────────
const REVIEWS = [
  {
    text: "הגעתי לעדי אחרי שעברתי אצל מספר נוירולוגים בניסיון לטפל במיגרנות שהלכו והחמירו. המיגרנות היו בתדירות של 3-4 פעמים בשבוע. כעבור מספר טיפולים קטן יכולתי לראות כבר ירידה משמעותית ובסוף הפסקתי לחלוטין לסבול ממיגרנות. עדי תמיד סבלני, מקשיב ומסביר כל דבר שעושה.",
    name: "Itamar Burger", sub: "מיגרנות כרוניות",
  },
  {
    text: "הגעתי לעדי לטיפול בדיקור ושיאצו לפני שנים וגיליתי מטפל נדיר. מעבר להיותו מקצועי ומוכשר ברמות הגבוהות ביותר, הוא אנושי וקשוב בצורה יוצאת דופן. אני תמיד יוצאת מהקליניקה בהרגשה טובה יותר, פיזית ונפשית. ממליצה בחום לכל מי שמחפש ידיים טובות ולב רחב!",
    name: "סופיה טרסוב", sub: "דיקור ושיאצו",
  },
  {
    text: "אני ממליצה מאוד לקבל טיפול דיקור אצל עדי. אני עושה טיפולי דיקור קבועים אחת לשבוע על ידו. עדי מטפל נעים הליכות, מקצועי, אינו מתעצל לרגע אם יש צורך בתוספת מחט, הכל באדיבות יסודיות ומקצועיות. עדי מגלה ידע עמוק במקצוע אותו בחר ואני מרגישה את תוצאות הטיפול הרבה זמן. יישר כוח עדי! אני מקווה שתלווה אותי עוד הרבה זמן!",
    name: "ריטה שלחון", sub: "דיקור קבוע",
  },
  {
    text: "אני חיפשתי מישהו שיוכל לתת לי מענה להרגעת הגוף והנפש תוך שחרור השרירים ודיקור. ואחרי הרבה חיפושים הגעתי לעדי עם ידי הזהב, כל טיפול הוא התמסרות טוטלית לרצונות המטופל, יודע בדיוק באיזה מקומות לטפל ואותי מוציא כמו חדשה. עדי מודה על היום בו הכרתי את ידיך. מחכה ומצפה לטיפול הבא. תודה רבה",
    name: "מלי דיין", sub: "שחרור שרירים ודיקור",
  },
  {
    text: "אני רוצה להמליץ על עדי המטפל ברפואה סינית. הגעתי אליו לאחר נסיון עם מטפלים אחרים ועדי הכי מיומן ובקיא ברפואה הסינית. הוא מטפל בשלל שיטות עם טונות נסיון ועוזר לי מאוד בבעיות האורתופדיות שיש לי. אני מטופלת בדיקור סיני ובכוסות רוח, והטיפול מאוד יעיל. בזכותו אני מצליחה לתפקד כרגיל והולכת מעל 10 ק\"מ ביום, בנוסף לטיולים אתגריים בטבע. ממליצה עליו מאוד.",
    name: "Claude Tut", sub: "בעיות אורתופדיות",
  },
  {
    text: "הגעתי לעדי לטיפול בכאבי גב חוזרים, תוך 3 טיפולים הרגשתי שיפור משמעותי ויכולתי לחזור לפעילות גופנית! ממולץ ממולץ ממולץ!!",
    name: "Ron Ben Bachar", sub: "כאבי גב",
  },
  {
    text: "הגעתי לעדי אחרי תקופה עמוסה במילואים ובחיים עם עייפות מתמשכת וכאבי שכמו וגב כרוניים שהשפיעו עליי. עדי עזר לי גם עם הכאב, איזון הסטרס ובעיקר השינה שלי השתפרה פלאים!! מומלץ בחום",
    name: "eliya bitton", sub: "עייפות וכאבי גב",
  },
  {
    text: "אני הגעתי לעדי כדי לעשות דיקור לכתף ולאחר שיחה איתו הבנתי שגם ניתן לעשות איזון הורמונלי. אחרי 3 טיפולים נכנסתי להריון! היום אני בחודש שמיני וכל שבוע אני מגיעה אליו. הטיפול מסור ומקצועי מאוד, ממליצה מאוד!",
    name: "מלכה יחייס מדר", sub: "איזון הורמונלי והריון",
  },
  {
    text: "בתור מטופל קבוע אצל עדי, אני מאוד ממליץ עליו. הטיפולים בשיאצו ודיקור מותאמים אישית, נעשים ברוגע וביטחון ונותנים תחושה שאתה בידיים טובות באמת. הקליניקה נעימה, האווירה רגועה והיחס אישי מכבד ומקצועי מאוד.",
    name: "Mark Shvartsman", sub: "שיאצו ודיקור",
  },
  {
    text: "אני מכיר את עדי מעל שנתיים מגיע אליו לטיפולים פעם בשבוע באופן קבוע, חוץ מזה שהבן אדם מקצוען וידע לטפל בדיוק בבעיה ולהגיע לנקודות הנכונות הוא גם איש מאוד נחמד ונעים שכיף לבלות אצלו את הזמן הזה. ממליץ בחום!",
    name: "Roman Khit", sub: "טיפולים קבועים",
  },
  {
    text: "לעדי היקר, ברצוני להודות לך מקרב לב על הטיפול המסור, המקצועיות והאכפתיות שאתה מעניק לאורך השנים. הטיפול שלך מהווה עבורי עוגן של רוגע, הקלה ובריאות. תודה על הסבלנות והידיים הטובות. בהערכה רבה, נטלי",
    name: "Natalie Huzman Maidanik", sub: "טיפול לאורך שנים",
  },
  {
    text: "אני מטופל בשיאצו אצל עדי בקביעות כבר מספר חודשים ומרגיש שיפור גדול בכאבי הכתפיים, השכמות, הצואר והעורף שבגללם הגעתי אליו. קסם של איש וקסם של ידיים. ממליץ בחום!",
    name: "Yishai Steckler", sub: "כאבי כתפיים וצוואר",
  },
  {
    text: "המלצה חמה על עדי האלוף! מקצועי, אדיב ומשרה אווירת ביטחון. עזר לי להגיע לאיזון הורמונלי, הורדת מתחים, הפחתת כאבים ולהכנס להריון. הקליניקה שלו מרגיעה ונעימה.",
    name: "nati malachi", sub: "איזון הורמונלי וכאבים",
  },
  {
    text: "הגעתי לעדי אחרי תקופה ארוכה עם מיגרנות בתדירות של 2-3 לשבוע. כבר אחרי כמה טיפולים בודדים ראיתי ירידה משמעותית בעוצמת המיגרנות, וכעבור כמה חודשי טיפול ירדה התדירות שלהן משמעותית. ממליצה מאוד!",
    name: "Dana Rabinovich", sub: "מיגרנות",
  },
  {
    text: "עדי מטפל מקצועי ונעים, מסור ורגיש. בכל פעם כיף להגיע לטיפול אצלו ובסיום יוצאת כמו חדשה (: המלצה חמה מכל הלב!",
    name: "Eden Sade", sub: "טיפול כללי",
  },
];

/* Google icon SVG */
const GoogleSvg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" style={{ flexShrink: 0 }}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

/* Star rating component */
const Stars = ({ count = 5 }) => (
  <div style={{ display: "flex", gap: "2px" }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBC05">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

/* Single review card  - Itamar's length (255 chars) is the visible standard */
function ReviewCard({ r }) {
  const [collapsed, setCollapsed] = useState(false);
  const isLong = r.text.length > 255;

  return (
    <div className="review-card" style={{
      flexShrink: 0, width: "380px",
      background: "white", borderRadius: "20px", padding: "28px 24px",
      boxShadow: "0 2px 20px rgba(44,42,38,0.06)",
      border: `1px solid ${C.sand}`,
      display: "flex", flexDirection: "column",
      scrollSnapAlign: "start",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
        <Stars />
        <GoogleSvg />
      </div>
      <div style={{ margin: "0 0 20px", flex: 1 }}>
        <p style={{
          fontSize: "14px", color: C.barkLight, lineHeight: 1.8, margin: 0,
          ...(isLong && collapsed ? {
            display: "-webkit-box", WebkitLineClamp: 7, WebkitBoxOrient: "vertical",
            overflow: "hidden",
          } : {}),
        }}>{r.text}</p>
        {isLong && (
          <button onClick={() => setCollapsed(c => !c)} style={{
            background: "none", border: "none", cursor: "pointer",
            color: C.sage, fontSize: "13px", fontWeight: 700,
            padding: "6px 0 0", display: "inline-block",
          }}>
            {collapsed ? "קרא עוד..." : "הצג פחות"}
          </button>
        )}
      </div>
      <div style={{ borderTop: `1px solid ${C.sand}`, paddingTop: "14px" }}>
        <div style={{ fontWeight: 700, color: C.bark, fontSize: "14px" }}>{r.name}</div>
        <div style={{ color: C.sage, fontSize: "12px", marginTop: "2px", fontWeight: 600 }}>{r.sub}</div>
      </div>
    </div>
  );
}

function Reviews() {
  const scrollRef = useRef(null);
  const userTouched = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onTouch = () => { userTouched.current = true; };
    el.addEventListener("pointerdown", onTouch);

    let iv = null;
    const startScroll = () => {
      if (iv) return;
      iv = setInterval(() => {
        if (userTouched.current) return;
        const card = el.querySelector(".review-card");
        if (!card) return;
        const step = card.offsetWidth + 20;
        const maxScroll = el.scrollWidth - el.clientWidth;
        if (el.scrollLeft <= -maxScroll + 10) el.scrollTo({ left: 0, behavior: "smooth" });
        else el.scrollBy({ left: -step, behavior: "smooth" });
      }, 3000);
    };
    const stopScroll = () => { clearInterval(iv); iv = null; };

    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) startScroll(); else stopScroll(); },
      { threshold: 0.3 }
    );
    obs.observe(el);

    return () => { stopScroll(); obs.disconnect(); el.removeEventListener("pointerdown", onTouch); };
  }, []);

  return (
    <Section id="reviews" bg={C.cream}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header with Google badge */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>מה אומרים המטופלים</div>
          <h2 className="section-title" style={{ fontSize: "36px", fontWeight: 800, color: C.bark, margin: "0 0 20px" }}>ביקורות Google</h2>
          <a href="https://www.google.com/search?ie=UTF-8&q=%D7%A2%D7%93%D7%99+%D7%A9%D7%9C%D7%95#ebo=0&mpd=~16663539272075685089/customers/reviews" target="_blank" rel="noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: "12px",
            background: "white", padding: "12px 24px", borderRadius: "50px",
            boxShadow: "0 2px 12px rgba(44,42,38,0.08)",
            textDecoration: "none", cursor: "pointer", transition: "box-shadow 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 18px rgba(44,42,38,0.15)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "0 2px 12px rgba(44,42,38,0.08)"}
          >
            <GoogleSvg />
            <span style={{ fontSize: "22px", fontWeight: 900, color: C.bark }}>5.0</span>
            <Stars />
            <span style={{ fontSize: "13px", color: C.barkLight, fontWeight: 500 }}>מבוסס על 26 ביקורות</span>
          </a>
        </div>
      </div>

      {/* Horizontal scrolling carousel */}
      <div ref={scrollRef} className="reviews-carousel" style={{
        display: "flex", gap: "20px", overflowX: "auto",
        paddingRight: "max(16px, calc((100vw - 1000px) / 2))",
        paddingLeft: "max(16px, calc((100vw - 1000px) / 2))",
        paddingBottom: "8px",
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
      }}>
        {REVIEWS.map(r => <ReviewCard key={r.name} r={r} />)}
      </div>

      {/* Scroll hint  - animated arrow */}
      <div className="scroll-hint-row" style={{ textAlign: "center", marginTop: "16px", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
        margin: "16px auto 0", padding: "8px 20px", borderRadius: "50px", background: "rgba(107,122,90,0.08)",
      }}>
        <span style={{ fontSize: "14px", fontWeight: 700 }}>👈 גלול לעוד ביקורות</span>
      </div>
      <style>{`
        @keyframes hintPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.03); }
        }
        .scroll-hint-row { color: ${C.sage}; animation: hintPulse 2s ease-in-out infinite; display: flex; }
      `}</style>

      {/* Google link */}
      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <a href="https://www.google.com/search?ie=UTF-8&q=%D7%A2%D7%93%D7%99+%D7%A9%D7%9C%D7%95#ebo=0&mpd=~16663539272075685089/customers/reviews" target="_blank" rel="noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "white", color: C.barkLight, padding: "12px 24px",
          borderRadius: "50px", fontSize: "13px", fontWeight: 600,
          textDecoration: "none", border: `1.5px solid ${C.sand}`,
          transition: "all 0.2s",
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = C.sage; e.currentTarget.style.color = C.bark; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = C.sand; e.currentTarget.style.color = C.barkLight; }}
        >
          <GoogleSvg />
          ראו את כל הביקורות ב-Google
        </a>
      </div>

      <style>{`
        .reviews-carousel::-webkit-scrollbar { display: none; }
        .reviews-carousel { scrollbar-width: none; }
        @media (max-width: 767px) {
          .review-card { width: 78vw !important; }
        }
      `}</style>
    </Section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────
function Contact() {
  return (
    <Section id="contact" bg={C.bark} style={{ padding: "100px 24px" }}>
      <style>{`
        .contact-btn { width: auto; }
        @media (max-width: 767px) { .contact-btn { width: 100%; justify-content: center; } }
      `}</style>
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ color: C.goldLight, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>צור קשר</div>
        <h2 className="section-title" style={{ fontSize: "36px", fontWeight: 800, color: "white", margin: "0 0 16px" }}>מוכנים להתחיל?</h2>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: "0 0 48px" }}>
          צרו קשר לתיאום תור בקליניקה לרפואה סינית בראשון לציון.<br />אשמח לענות על כל שאלה ולהתאים לכם את הטיפול המתאים ביותר.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "stretch" }}>
          <a href={WA_URL} target="_blank" rel="noreferrer" className="contact-btn" style={{
            background: "#25D366", color: "white", padding: "16px 40px",
            borderRadius: "50px", fontSize: "16px", fontWeight: 800,
            textDecoration: "none", display: "flex", alignItems: "center", gap: "10px",
            boxShadow: "0 4px 24px rgba(37,211,102,0.35)",
            transition: "transform 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.currentTarget.style.transform = ""}
          >
            <WaSvg size={22} />
            שלחו הודעה ב-WhatsApp
          </a>
        </div>
      </div>
    </Section>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────
export default function App() {
  /* Scroll to #hash on external entry (Google Ads sitelinks, shared links etc.)
     The browser's native anchor-scroll fires before React finishes rendering,
     so we retry several times until the layout stabilises. */
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const id = hash.slice(1);
    const navbarHeight = 80;
    let attempts = 0;
    let lastTop = -1;

    function tryScroll() {
      const el = document.getElementById(id);
      if (!el) { if (attempts < 10) { attempts++; setTimeout(tryScroll, 300); } return; }

      const top = Math.round(el.getBoundingClientRect().top + window.scrollY - navbarHeight);
      window.scrollTo({ top, behavior: "instant" });

      // If position changed since last attempt, layout is still shifting — try again
      if (top !== lastTop && attempts < 10) {
        lastTop = top;
        attempts++;
        setTimeout(tryScroll, 400);
      }
    }

    // First attempt after a short initial delay for React to mount
    const timer = setTimeout(tryScroll, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        /* Fade-in animation */
        .fade-section { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .fade-visible { opacity: 1 !important; transform: translateY(0) !important; }

        /* Smooth scrolling */
        html { scroll-behavior: smooth; }

        /* Global responsive */
        @media (max-width: 767px) {
          .section-padding { padding-top: 60px !important; padding-bottom: 60px !important; padding-left: 16px !important; padding-right: 16px !important; }
          .section-title { font-size: 28px !important; }
          .hero-section { min-height: auto !important; }
          .condition-pill { padding: 8px 16px !important; font-size: 13px !important; }
          .faq-btn { padding: 16px 18px !important; }
          .review-card { padding: 24px 20px !important; }
          .scroll-hint { display: none !important; }
          .stats-grid { gap: 32px !important; }
        }

        /* Selection color */
        ::selection { background: rgba(122,139,106,0.3); }
      `}</style>
      <Navbar />
      <Hero />
      <Stats />
      <Reviews />
      <ClinicPhotos />
      <Services />
      <About />
      <ForWhom />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWA />
      <CookieConsent />
      <AccessibilityWidget />
    </>
  );
}
