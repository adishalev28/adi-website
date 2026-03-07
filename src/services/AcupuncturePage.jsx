import React, { useState, useRef } from "react";
import ServiceLayout from "./ServiceLayout";
import Section from "../shared/Section";
import { C, WA_URL } from "../shared/constants";
import WaSvg from "../shared/WaSvg";

const OTHER_SERVICES = [
  { label: "שיאצו", href: "/shiatsu/" },
  { label: "כוסות רוח", href: "/cupping/" },
  { label: "צמחי מרפא סיניים", href: "/herbs/" },
];

export default function AcupuncturePage() {
  return (
    <ServiceLayout otherServices={OTHER_SERVICES}>
      {/* Hero */}
      <section style={{
        minHeight: "50vh", position: "relative", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
        backgroundImage: "url(/adi-acupuncture.jpg)",
        backgroundSize: "cover", backgroundPosition: "center 30%",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(44,42,38,0.6) 0%, rgba(44,42,38,0.4) 50%, rgba(44,42,38,0.8) 100%)",
        }} />
        <div style={{
          position: "relative", textAlign: "center", padding: "120px 24px 80px",
          maxWidth: "700px",
        }}>
          <div style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", letterSpacing: "2px", marginBottom: "12px" }}>
            ✦ עדי שלו — רפואה סינית ✦
          </div>
          <h1 style={{
            fontSize: "clamp(36px, 6vw, 52px)", fontWeight: 900,
            color: "white", margin: "0 0 16px", lineHeight: 1.2,
          }}>
            דיקור סיני בראשון לציון
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
            טיפול מותאם אישית המשלב אבחון מעמיק עם גישה הוליסטית — להקלה על כאב, שיפור הבריאות ואיזון הגוף והנפש
          </p>
        </div>
      </section>

      {/* מה זה דיקור סיני — עם תמונה */}
      <Section bg={C.cream}>
        <div className="acu-about" style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 340px", gap: "40px", alignItems: "center" }}>
          <div>
            <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>
              על הטיפול
            </div>
            <h2 style={{ fontSize: "32px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
              מה זה דיקור סיני?
            </h2>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
              דיקור סיני (אקופונקטורה) הוא שיטת טיפול עתיקה שמקורה ברפואה הסינית המסורתית, עם היסטוריה של אלפי שנים. השיטה מבוססת על התפיסה שבגוף קיימת מערכת של ערוצי אנרגיה (מרידיאנים) שדרכם זורמת אנרגיית החיים — צ'י. כאשר הזרימה נחסמת או אינה מאוזנת, נוצרים כאבים ובעיות בריאותיות.
            </p>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
              בטיפול דיקור סיני, המטפל מחדיר מחטים דקיקות (דקות בהרבה ממחט רגילה) לנקודות ספציפיות על הגוף. המחטים מעוררות את מנגנוני הריפוי הטבעיים של הגוף, משחררות חסימות ומשפרות את זרימת הדם והאנרגיה.
            </p>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0" }}>
              בקליניקה של עדי שלו בראשון לציון, כל טיפול דיקור מותאם אישית למצבו של המטופל. הטיפול הראשון כולל אבחון מעמיק — שיחה, בדיקת דופק ולשון — שעל בסיסו נבנית תוכנית טיפול ייחודית.
            </p>
          </div>
          <MagnifyImage src="/acupuncture-treatment.jpg" alt="טיפול דיקור סיני בקליניקה של עדי שלו בראשון לציון — מחטים דקיקות על היד" />
        </div>
        <style>{`
          @media (max-width: 767px) {
            .acu-about { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </Section>

      {/* למי מתאים */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            למי מתאים דיקור סיני?
          </h2>
          <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 24px" }}>
            דיקור סיני מתאים למגוון רחב של מצבים בריאותיים. ארגון הבריאות העולמי (WHO) מכיר בדיקור כטיפול יעיל עבור עשרות מצבים רפואיים, ביניהם:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
            {[
              "כאבי גב וצוואר", "מיגרנות וכאבי ראש", "סיאטיקה",
              "כאבי מפרקים וברכיים", "כתף קפואה", "מתח נפשי וחרדה",
              "בעיות שינה ונדודי שינה", "בעיות עיכול", "עייפות כרונית",
              "איזון הורמונלי", "תמיכה בפריון", "כאבי מחזור",
            ].map(c => (
              <span key={c} style={{
                background: "white", border: `1.5px solid ${C.sage}30`,
                color: C.bark, padding: "8px 18px", borderRadius: "50px",
                fontSize: "14px", fontWeight: 600,
              }}>{c}</span>
            ))}
          </div>
          <p style={{ fontSize: "15px", color: C.barkLight, lineHeight: 1.8 }}>
            לא מצאתם את מה שאתם מחפשים? דיקור סיני יכול לעזור גם במצבים רבים נוספים. צרו קשר ונבדוק יחד.
          </p>
        </div>
      </Section>

      {/* מה אומר המדע? */}
      <Section bg={C.cream}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            מה אומר המדע על דיקור סיני?
          </h2>
          <div style={{
            background: "white", borderRadius: "16px", padding: "32px",
            borderRight: `4px solid ${C.sage}`,
            boxShadow: "0 2px 16px rgba(44,42,38,0.06)",
          }}>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 20px" }}>
              דיקור סיני נחקר בהרחבה במחקר המדעי המודרני ונמצא יעיל במגוון מצבים:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: "🏛️", text: "ארגון הבריאות העולמי (WHO) מכיר בדיקור סיני כטיפול יעיל ליותר מ-100 מצבים רפואיים, כולל כאב כרוני, מיגרנות ובחילות." },
                { icon: "🔬", text: "מחקרים הראו שדיקור מגרה שחרור אנדורפינים — משככי כאבים טבעיים של הגוף — ומשפר את זרימת הדם באופן מדיד." },
                { icon: "📊", text: "מטא-אנליזות גדולות מצאו שדיקור יעיל יותר מפלצבו בטיפול בכאב כרוני, כאבי גב תחתון וכאבי ראש." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
                  <span style={{ fontSize: "22px", flexShrink: 0, lineHeight: 1.4 }}>{item.icon}</span>
                  <p style={{ fontSize: "15px", color: C.barkLight, lineHeight: 1.8, margin: 0 }}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* איך הטיפול נראה — טיימליין */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 32px" }}>
            איך נראה טיפול דיקור סיני בקליניקה?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0", position: "relative" }}>
            {[
              { num: "1", title: "אבחון מעמיק", text: "בפגישה הראשונה מתבצע אבחון מקיף: שיחה על ההיסטוריה הרפואית, בדיקת דופק סיני ובדיקת לשון. האבחון מאפשר להבין את שורש הבעיה ולא רק את התסמינים." },
              { num: "2", title: "הטיפול עצמו", text: "המטפל מחדיר מחטים דקיקות לנקודות שנבחרו במיוחד עבורכם. רוב המטופלים מרגישים רק תחושה קלה של עקצוץ. המחטים נשארות כ-20-30 דקות בזמן שאתם נחים." },
              { num: "3", title: "מעקב והתאמה", text: "בסוף כל טיפול נבדוק התקדמות, ובכל פגישה הטיפול מותאם מחדש לפי המצב העדכני. סדרת טיפולים טיפוסית כוללת 5-10 מפגשים." },
            ].map((step, idx, arr) => (
              <div key={step.num} style={{ display: "flex", gap: "20px", alignItems: "flex-start", position: "relative", paddingBottom: idx < arr.length - 1 ? "32px" : "0" }}>
                {/* קו אנכי */}
                {idx < arr.length - 1 && (
                  <div style={{
                    position: "absolute", right: "19px", top: "44px",
                    width: "2px", height: "calc(100% - 44px)",
                    background: `linear-gradient(to bottom, ${C.sage}, ${C.sage}30)`,
                  }} />
                )}
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  background: C.sage, color: "white", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: "18px", fontWeight: 800, flexShrink: 0,
                  position: "relative", zIndex: 1,
                  boxShadow: "0 2px 8px rgba(122,139,106,0.3)",
                }}>{step.num}</div>
                <div style={{ background: "white", borderRadius: "16px", padding: "20px 24px", flex: 1, boxShadow: "0 2px 12px rgba(44,42,38,0.05)" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: C.bark, margin: "0 0 8px" }}>{step.title}</h3>
                  <p style={{ fontSize: "15px", color: C.barkLight, lineHeight: 1.8, margin: 0 }}>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* שאלות נפוצות */}
      <Section bg={C.cream}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            שאלות נפוצות על דיקור סיני
          </h2>
          <ServiceFAQ items={[
            { q: "האם דיקור סיני כואב?", a: "רוב המטופלים מופתעים לגלות שדיקור כמעט לא כואב. המחטים דקות מאוד — דקות פי 10 ממחט הזרקה רגילה. רוב האנשים מרגישים לכל היותר עקצוץ קל." },
            { q: "כמה טיפולי דיקור צריך?", a: "מצבים חריפים כמו כאב גב חד יכולים להשתפר תוך 3-5 טיפולים. מצבים כרוניים דורשים בדרך כלל 8-12 טיפולים. בטיפול הראשון נקבע יחד תוכנית מותאמת." },
            { q: "האם דיקור סיני מוכר על ידי קופות החולים?", a: "חלק מקופות החולים מציעות השתתפות ברפואה משלימה במסגרת ביטוחים משלימים. מומלץ לבדוק עם הקופה שלכם." },
            { q: "האם יש תופעות לוואי?", a: "דיקור סיני נחשב לטיפול בטוח מאוד כשמבוצע על ידי מטפל מוסמך. לעיתים נדירות עשוי להופיע סימן קל במקום הדקירה, שנעלם תוך ימים." },
          ]} />
        </div>
      </Section>

      {/* CTA ביניים */}
      <section style={{ background: C.sand, padding: "48px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "18px", fontWeight: 600, color: C.bark, margin: "0 0 20px" }}>
          רוצים לנסות דיקור סיני בראשון לציון?
        </p>
        <a href={WA_URL} target="_blank" rel="noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          background: "linear-gradient(135deg, #34A853, #2D9248)",
          color: "white", padding: "14px 36px", borderRadius: "50px",
          fontSize: "15px", fontWeight: 700, textDecoration: "none",
          boxShadow: "0 4px 24px rgba(52,168,83,0.35)",
        }}>
          <WaSvg size={20} />
          לתיאום תור
        </a>
      </section>
    </ServiceLayout>
  );
}

/* זכוכית מגדלת על תמונה — רק בדסקטופ */
function MagnifyImage({ src, alt }) {
  const [lens, setLens] = useState(null);
  const containerRef = useRef(null);
  const ZOOM = 2.5;
  const LENS_SIZE = 150;
  const isTouchDevice = typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  const handleMove = (e) => {
    if (isTouchDevice) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const bgX = (x / rect.width) * 100;
    const bgY = (y / rect.height) * 100;
    setLens({ x, y, bgX, bgY });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMove}
      onMouseLeave={() => setLens(null)}
      style={{
        borderRadius: "20px", overflow: "hidden",
        boxShadow: "0 4px 24px rgba(44,42,38,0.1)",
        position: "relative", cursor: isTouchDevice ? "default" : "zoom-in",
      }}
    >
      <img src={src} alt={alt} style={{ width: "100%", display: "block" }} />
      {lens && !isTouchDevice && (
        <div style={{
          position: "absolute",
          left: lens.x - LENS_SIZE / 2,
          top: lens.y - LENS_SIZE / 2,
          width: LENS_SIZE, height: LENS_SIZE,
          borderRadius: "50%",
          border: "3px solid rgba(255,255,255,0.8)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          backgroundImage: `url(${src})`,
          backgroundSize: `${containerRef.current.offsetWidth * ZOOM}px ${containerRef.current.offsetHeight * ZOOM}px`,
          backgroundPosition: `${lens.bgX}% ${lens.bgY}%`,
          pointerEvents: "none",
        }} />
      )}
    </div>
  );
}

/* FAQ קומפוננטה פנימית */
function ServiceFAQ({ items }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      {items.map((item, i) => (
        <div key={i} style={{
          background: "white", borderRadius: "16px",
          border: open === i ? `1.5px solid ${C.sage}50` : "1.5px solid transparent",
          boxShadow: open === i ? "0 4px 24px rgba(44,42,38,0.08)" : "0 1px 8px rgba(44,42,38,0.04)",
          overflow: "hidden", transition: "all 0.2s",
        }}>
          <button onClick={() => setOpen(open === i ? null : i)}
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
  );
}
