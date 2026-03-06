import { useState, useEffect, useRef } from "react";

/* ─── Color Palette — warm nature tones matching the clinic ─── */
const C = {
  cream:       "#FAF8F3",
  sand:        "#EDE8DF",
  sage:        "#7A8B6A",
  sageDark:    "#5B6B4A",
  gold:        "#C4A265",
  goldLight:   "#D4B87A",
  bark:        "#2C2A26",
  barkLight:   "#7B7570",
  warm:        "#BFA07A",
};

const PHONE = "972528029031";
const WA_TEXT = encodeURIComponent("שלום עדי, אשמח לקבוע תור 🙂");
const WA_URL = `https://wa.me/${PHONE}?text=${WA_TEXT}`;

/* ─── Fade-in on scroll hook ─── */
function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("fade-visible"); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ─── Section wrapper with fade-in ─── */
function Section({ children, id, bg, className = "", style = {} }) {
  const ref = useFadeIn();
  return (
    <section id={id} ref={ref} className={`section-padding fade-section ${className}`}
      style={{ background: bg || C.cream, padding: "100px 24px", ...style }}>
      {children}
    </section>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled]  = useState(false);
  const [menuOpen, setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "אודות",         href: "#about"    },
    { label: "שירותים",       href: "#services" },
    { label: "שאלות נפוצות", href: "#faq"      },
    { label: "המלצות",        href: "#reviews"  },
    { label: "צור קשר",       href: "#contact"  },
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
        <a href="#" style={{ textDecoration: "none", marginRight: "-28px", marginTop: filled ? "0" : "14px", transition: "margin 0.3s" }}>
          <img src="/LOGO1.png" alt="עדי שלו" style={{
            height: filled ? "46px" : "62px", width: "auto",
            filter: filled ? "none" : "brightness(0) invert(1)",
            transition: "all 0.3s",
          }} />
        </a>

        {/* קישורים — desktop */}
        <div style={{ display: "flex", gap: "32px" }} className="desktop-nav">
          {links.map(l => (
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

          {/* המבורגר — mobile */}
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

// ─── Hero — full-screen image with warm overlay ──────────────────────────
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
      {/* Background image — desktop: clinic-room, mobile: portrait hero */}
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
        <h1 style={{
          fontSize: "clamp(42px, 7vw, 68px)", fontWeight: 900,
          color: C.goldLight, margin: "0 0 12px", lineHeight: 1.1,
          textShadow: "0 2px 20px rgba(0,0,0,0.15)",
        }}>
          עדי שלו
        </h1>
        <p style={{
          fontSize: "clamp(20px, 3.5vw, 28px)", fontWeight: 500,
          color: "rgba(255,255,255,0.9)", margin: "0 0 32px",
          letterSpacing: "2px",
        }}>
          מטפל ברפואה סינית
        </p>

        {/* Treatment bullets — clickable */}
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px",
          margin: "0 auto 44px", maxWidth: "480px",
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

        <div style={{
          display: "inline-block", marginBottom: "24px",
          fontSize: "14px", color: "white", fontWeight: 500,
          letterSpacing: "2px", opacity: 0.9,
        }}>
          ✦ רפואה סינית מסורתית · ראשון לציון ✦
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
    <Section id="about" bg={C.cream} style={{ paddingBottom: "60px" }}>
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
          <img src="/adi-desk.jpg" alt="עדי שלו — מטפל ברפואה סינית" loading="lazy" />
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
            מטפל ברפואה סינית, מציע טיפולים מותאמים אישית המבוססים על עקרונות הרפואה הסינית המסורתית.
          </p>
          <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
            בקליניקה שלי ב<strong style={{ color: C.bark }}>ראשון לציון</strong> אני מקבל את מטופליי ומעניק יחס אישי ותשומת לב לכל פרט. אני בוחר את הטיפול המתאים ביותר לפי הצרכים הייחודיים של כל מטופל ומטופלת.
          </p>
          <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 32px" }}>
            המטרה שלי היא להביא להקלה בכאב, שיפור הבריאות הכללית ואיכות החיים — בשיטות טבעיות וממוקדות.
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
  { id: "svc-acupuncture", icon: <AcupunctureIcon />, title: "דיקור סיני",        text: "שיטה עתיקה המאזנת את זרימת האנרגיה בגוף. יעילה לכאבים, עייפות, חרדה, בעיות שינה ועוד." },
  { id: "svc-shiatsu",     icon: <ShiatsuIcon />,     title: "שיאצו",             text: "עיסוי יפני עמוק לאורך מרידיאנים בגוף. משחרר מתח, מפחית כאבים ומשפר את מצב הרוח." },
  { id: "svc-herbs",       icon: <HerbsIcon />,       title: "צמחי מרפא סיניים", text: "תרכובות צמחיות מותאמות אישית שתומכות בטיפול ומחזקות את הגוף מבפנים." },
  { id: "svc-cupping",     icon: <CuppingIcon />,     title: "כוסות רוח",         text: "טכניקה שמגבירה זרימת הדם, מפחיתה כאבי שרירים ומסייעת לסילוק חסימות." },
];

function Services() {
  return (
    <Section id="services" bg={C.sand}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>השירותים שלי</div>
          <h2 className="section-title" style={{ fontSize: "36px", fontWeight: 800, color: C.bark, margin: "0 0 16px" }}>שיטות הטיפול</h2>
          <p style={{ fontSize: "16px", color: C.barkLight, maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
            שילוב של שיטות רפואה סינית מסורתיות לטיפול הוליסטי ומותאם אישית
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
              <p style={{ fontSize: "14px", color: C.barkLight, lineHeight: 1.8, margin: 0 }}>{s.text}</p>
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

// ─── For Whom ─────────────────────────────────────────────────────────────
function ForWhom() {
  const conditions = [
    "כאבי גב, צוואר וכתפיים", "סיאטיקה ופריצות דיסק", "כאב מקרין",
    "כאבי ברכיים ומרפק", "כתף קפואה", "מיגרנות וכאבי ראש חוזרים",
    "מתח נפשי וחרדה", "קושי להירגע", "בעיות שינה",
    "עייפות כרונית", "נפיחות ועצירות", "בעיות עיכול",
  ];
  return (
    <Section bg={C.cream} style={{ paddingTop: "60px" }}>
      <div style={{ maxWidth: "820px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>למי זה מתאים</div>
        <h2 className="section-title" style={{ fontSize: "36px", fontWeight: 800, color: C.bark, margin: "0 0 16px" }}>מגיעים אלי עם כל מיני בעיות</h2>
        <p style={{ fontSize: "16px", color: C.barkLight, margin: "0 0 48px", lineHeight: 1.7, maxWidth: "560px", marginInline: "auto" }}>
          רפואה סינית יכולה לסייע במגוון רחב של מצבים - כטיפול עיקרי או כתמיכה לצד הרפואה הקונבנציונלית
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

// ─── Photo Lightbox — full-screen horizontal scroll gallery ─────────────
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

      {/* Top bar — close + counter */}
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

      {/* Scrollable photo strip — each slide is 100vw */}
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

// ─── Clinic Photos — horizontal scroll strip with auto-scroll ────────────
function ClinicPhotos() {
  const allPhotos = [
    { src: "/clinic-room.jpg", alt: "חדר טיפולים" },
    { src: "/adi-acupuncture.jpg", alt: "דיקור סיני" },
    { src: "/adi-desk.jpg", alt: "חדר ייעוץ" },
    { src: "/adi-shiatsu.jpg", alt: "שיאצו" },
    { src: "/adi-treatment.jpg", alt: "טיפול במכשיר" },
    { src: "/clinic-entrance.jpg", alt: "כניסה לקליניקה" },
  ];
  const landscape = allPhotos.filter((_, i) => [0, 1, 2].includes(i)); // clinic-room, acupuncture, desk
  const portrait  = allPhotos.filter((_, i) => [3, 4, 5].includes(i)); // shiatsu, treatment, entrance

  const scrollRefL = useRef(null);
  const scrollRefP = useRef(null);
  const userTouchedL = useRef(false);
  const userTouchedP = useRef(false);
  const [lbIndex, setLbIndex] = useState(null);

  // Auto-scroll hook for a carousel
  const useAutoScroll = (ref, touched, interval) => {
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const onTouch = () => { touched.current = true; };
      el.addEventListener("pointerdown", onTouch);

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

      return () => { stopScroll(); obs.disconnect(); el.removeEventListener("pointerdown", onTouch); };
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
  { q: "האם דיקור סיני כואב?", a: "בדרך כלל לא. המחטים דקות מאוד ורוב המטופלים מרגישים תחושה קלה של עקצוץ או כבדות — אבל לא כאב. רבים אפילו נרדמים במהלך הטיפול." },
  { q: "כמה טיפולים צריך?", a: "זה תלוי בבעיה ובמטופל. מצבים חריפים (כמו כאב גב חד) יכולים להשתפר תוך 3–5 טיפולים. מצבים כרוניים בדרך כלל דורשים סדרה ארוכה יותר. בטיפול הראשון נקבע יחד תוכנית מותאמת." },
  { q: "מה ההבדל בין דיקור לשיאצו?", a: "דיקור סיני משתמש במחטים דקות לאורך נקודות על מרידיאנים בגוף. שיאצו הוא עיסוי לחץ ידני באותן נקודות — ללא מחטים. שתי השיטות מבוססות על אותם עקרונות של רפואה סינית." },
  { q: "מה לצפות בטיפול הראשון?", a: "הטיפול הראשון כולל שיחה מקיפה על הבעיה, ההיסטוריה הרפואית ואורח החיים. לאחר מכן הטיפול עצמו — בדרך כלל 45–60 דקות. מומלץ להגיע לא רעבים ולא מלאים." },
  { q: "האם הטיפול מתאים לי אם אני לוקח תרופות?", a: "ברוב המקרים כן. רפואה סינית יכולה לפעול בצוואר עם טיפול קונבנציונלי. חשוב לציין את כל התרופות בשיחת המיון הראשונה." },
  { q: "איפה הקליניקה?", a: "הקליניקה ממוקמת בראשון לציון. לכתובת המדויקת ולתיאום הגעה — שלחו הודעת WhatsApp ואחזור אליכם." },
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

// ─── Reviews — real Google reviews ────────────────────────────────────────
const REVIEWS = [
  {
    text: "הגעתי לעדי אחרי שעברתי אצל מספר נוירולוגים בניסיון לטפל במיגרנות שהלכו והחמירו. המיגרנות היו בתדירות של 3-4 פעמים בשבוע. כעבור מספר טיפולים קטן יכולתי לראות כבר ירידה משמעותית ובסוף הפסקתי לחלוטין לסבול ממיגרנות. עדי תמיד סבלני, מקשיב ומסביר כל דבר שעושה.",
    name: "Itamar Burger", sub: "מיגרנות כרוניות",
  },
  {
    text: "אני הגעתי לעדי כדי לעשות דיקור לכתף ולאחר שיחה איתו הבנתי שגם ניתן לעשות איזון הורמונלי. אחרי 3 טיפולים נכנסתי להריון! היום אני בחודש שמיני וכל שבוע אני מגיעה אליו. הטיפול מסור ומקצועי מאוד, ממליצה מאוד!",
    name: "מלכה יחייס מדר", sub: "איזון הורמונלי והריון",
  },
  {
    text: "אני מטופל בשיאצו אצל עדי בקביעות כבר מספר חודשים ומרגיש שיפור גדול בכאבי הכתפיים, השכמות, הצואר והעורף שבגללם הגעתי אליו. קסם של איש וקסם של ידיים. ממליץ בחום!",
    name: "Yishai Steckler", sub: "כאבי כתפיים וצוואר",
  },
  {
    text: "עדי מטפל מקצועי ונעים, מסור ורגיש. בכל פעם כיף להגיע לטיפול אצלו ובסיום יוצאת כמו חדשה (: המלצה חמה מכל הלב!",
    name: "Eden Sade", sub: "טיפול כללי",
  },
  {
    text: "המלצה חמה על עדי האלוף! מקצועי, אדיב ומשרה אווירת ביטחון. עזר לי להגיע לאיזון הורמונלי, הורדת מתחים, הפחתת כאבים ולהכנס להריון. הקליניקה שלו מרגיעה ונעימה.",
    name: "nati malachi", sub: "איזון הורמונלי וכאבים",
  },
  {
    text: "הגעתי לעדי אחרי תקופה ארוכה עם מיגרנות בתדירות של 2-3 לשבוע. כבר אחרי כמה טיפולים בודדים ראיתי ירידה משמעותית בעוצמת המיגרנות, וכעבור כמה חודשי טיפול ירדה התדירות שלהן משמעותית. ממליצה מאוד!",
    name: "Dana Rabinovich", sub: "מיגרנות",
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

/* Single review card — Itamar's length (255 chars) is the visible standard */
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
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "12px",
            background: "white", padding: "12px 24px", borderRadius: "50px",
            boxShadow: "0 2px 12px rgba(44,42,38,0.08)",
          }}>
            <GoogleSvg />
            <span style={{ fontSize: "22px", fontWeight: 900, color: C.bark }}>5.0</span>
            <Stars />
            <span style={{ fontSize: "13px", color: C.barkLight, fontWeight: 500 }}>מבוסס על 26 ביקורות</span>
          </div>
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

      {/* Scroll hint — right after carousel */}
      <div style={{ textAlign: "center", marginTop: "14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
        <span style={{ fontSize: "13px", color: C.barkLight, opacity: 0.7, fontWeight: 500 }}>גלול לעוד ביקורות</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.barkLight} strokeWidth="2" strokeLinecap="round" style={{ opacity: 0.6 }}>
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </div>

      {/* Google link */}
      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <a href="https://share.google/vwZyFjHWsAPJRUBf3" target="_blank" rel="noreferrer" style={{
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
          .review-card { width: 85vw !important; }
        }
      `}</style>
    </Section>
  );
}

// ─── WhatsApp SVG ────────────────────────────────────────────────────────
const WaSvg = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// ─── Floating WhatsApp Button — flies from Hero CTA ───────────────────────
function FloatingWA() {
  const elRef = useRef(null);

  useEffect(() => {
    const heroCta = document.getElementById("hero-cta");
    const el = elRef.current;
    if (!heroCta || !el) return;

    let hoverTimer = null;

    const obs = new IntersectionObserver(([entry]) => {
      const bw = el.offsetWidth, bh = el.offsetHeight;
      const anchorX = 28 + bw / 2;
      const anchorY = window.innerHeight - 28 - bh / 2;

      if (!entry.isIntersecting) {
        // CTA left viewport — capture its position and fly from there
        const cta = heroCta.getBoundingClientRect();
        const fromX = cta.left + cta.width / 2;
        const fromY = Math.max(cta.top + cta.height / 2, 60);
        const dx = fromX - anchorX;
        const dy = fromY - anchorY;

        clearTimeout(hoverTimer);
        el.style.transition = "none";
        el.style.transform = `translate(${dx}px, ${dy}px) scale(1.08)`;
        el.style.opacity = "0.8";
        void el.offsetHeight; // force reflow

        el.style.transition = "opacity 0.35s ease-out, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s";
        el.style.transform = "translate(0, 0) scale(1)";
        el.style.opacity = "1";
        el.style.pointerEvents = "";
        hoverTimer = setTimeout(() => {
          el.style.transition = "transform 0.2s ease, box-shadow 0.3s";
        }, 750);
      } else {
        // CTA back on screen — fly back toward it and fade
        clearTimeout(hoverTimer);
        const cta = heroCta.getBoundingClientRect();
        const toX = cta.left + cta.width / 2;
        const toY = Math.min(cta.top + cta.height / 2, window.innerHeight - 60);
        const dx = toX - anchorX;
        const dy = toY - anchorY;

        el.style.transition = "opacity 0.4s ease-in, transform 0.5s cubic-bezier(0.55, 0, 1, 0.45)";
        el.style.transform = `translate(${dx}px, ${dy}px) scale(1.08)`;
        el.style.opacity = "0";
        el.style.pointerEvents = "none";
      }
    }, { threshold: 0 });

    obs.observe(heroCta);
    return () => { obs.disconnect(); clearTimeout(hoverTimer); };
  }, []);

  return (
    <>
      <style>{`
        .wa-float {
          position: fixed; bottom: 28px; left: 28px; z-index: 200;
          display: flex; align-items: center; gap: 12px;
          background: #25D366; color: white;
          padding: 18px 32px; border-radius: 50px;
          font-size: 17px; font-weight: 700;
          text-decoration: none;
          box-shadow: 0 6px 32px rgba(37,211,102,0.5);
          opacity: 0; pointer-events: none;
        }
        .wa-float:hover {
          transform: scale(1.07) !important;
          box-shadow: 0 8px 36px rgba(37,211,102,0.6) !important;
        }
        @media (max-width: 767px) {
          .wa-float { padding: 16px 22px; }
          .wa-float span.wa-label { display: none; }
        }
      `}</style>
      <a ref={elRef} href={WA_URL} target="_blank" rel="noreferrer" className="wa-float">
        <WaSvg size={26} />
        <span className="wa-label">ליצירת קשר</span>
      </a>
    </>
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
          צרו קשר ונקבע לכם תור בהקדם האפשרי.<br />אשמח לענות על כל שאלה.
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

// ─── Footer ───────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{
      background: "#1a1917", color: "rgba(255,255,255,0.35)",
      padding: "24px", textAlign: "center", fontSize: "12px",
      letterSpacing: "0.5px",
    }}>
      © {new Date().getFullYear()} עדי שלו — רפואה סינית · ראשון לציון
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────
export default function App() {
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
    </>
  );
}
