import { useState } from "react";
import ServiceLayout from "./ServiceLayout";
import Section from "../shared/Section";
import { C, WA_URL } from "../shared/constants";
import WaSvg from "../shared/WaSvg";

const OTHER_SERVICES = [
  { label: "דיקור סיני", href: "/dikur-sini/" },
  { label: "שיאצו", href: "/shiatsu/" },
  { label: "צמחי מרפא סיניים", href: "/herbs/" },
];

export default function CuppingPage() {
  return (
    <ServiceLayout otherServices={OTHER_SERVICES}>
      {/* Hero */}
      <section style={{
        minHeight: "50vh", position: "relative", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
        backgroundImage: "url(/adi-treatment.jpg)",
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
            ✦ עדי שלו  - רפואה סינית ✦
          </div>
          <h1 style={{
            fontSize: "clamp(36px, 6vw, 52px)", fontWeight: 900,
            color: "white", margin: "0 0 16px", lineHeight: 1.2,
          }}>
            כוסות רוח בראשון לציון
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
            טיפול כוסות רוח מקצועי  - שיפור זרימת הדם, הקלה בכאבים ושחרור שרירים
          </p>
        </div>
      </section>

      {/* מה זה כוסות רוח - עם תמונה */}
      <Section bg={C.cream}>
        <div className="cupping-about" style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 340px", gap: "40px", alignItems: "center" }}>
          <div>
            <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>
              על הטיפול
            </div>
            <h2 style={{ fontSize: "32px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
              מה זה כוסות רוח?
            </h2>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
              כוסות רוח (Cupping) היא שיטת טיפול עתיקה ברפואה הסינית. בטיפול, המטפל מניח כוסות זכוכית או סיליקון על העור ויוצר ואקום  - שאיבה קלה שמושכת את העור כלפי מעלה. הוואקום מגביר את זרימת הדם לאזור, משחרר מתח בשרירים ומסייע בסילוק רעלים.
            </p>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
              הטיפול נפוץ מאוד בקרב ספורטאים מקצועיים ברחבי העולם  - ואולי שמתם לב לסימנים העגולים האופייניים על הגב של שחקני אולימפיאדה. אבל כוסות רוח מתאימות לכל אחד, לא רק לספורטאים.
            </p>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0" }}>
              בקליניקה של עדי שלו בראשון לציון, כוסות הרוח משולבות לרוב כחלק מטיפול כולל  - יחד עם דיקור סיני או שיאצו  - כדי להעצים את התוצאות.
            </p>
          </div>
          <div style={{
            borderRadius: "20px", overflow: "hidden",
            boxShadow: "0 4px 24px rgba(44,42,38,0.1)",
          }}>
            <img src="/cupping-treatment.jpg" alt="טיפול כוסות רוח בקליניקה של עדי שלו בראשון לציון - כוסות זכוכית על הגב" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
        <style>{`
          @media (max-width: 767px) {
            .cupping-about { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </Section>

      {/* סוגי כוסות רוח */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>
              שיטות טיפול
            </div>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: 0 }}>
              סוגי כוסות רוח בקליניקה
            </h2>
          </div>
          <div className="cupping-types" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
            {[
              {
                icon: "🔥",
                title: "כוסות רוח יבשות",
                text: "השיטה הקלאסית  - יצירת ואקום באמצעות אש או משאבה. הכוסות נשארות במקום 5-15 דקות ומשחררות שרירים תפוסים לעומק.",
                accent: C.sage,
              },
              {
                icon: "🌊",
                title: "כוסות רוח נעות",
                text: "הכוסות מוזזות על העור עם שמן. משלב את היתרונות של עיסוי עמוק עם השאיבה  - מעולה לאזורים רחבים כמו הגב.",
                accent: C.gold,
              },
              {
                icon: "⚡",
                title: "כוסות רוח + דיקור",
                text: "שילוב כוסות רוח עם מחטי דיקור  - הכוסות מעצימות את פעולת המחטים ויוצרות שחרור כפול. יעיל במיוחד לכאב כרוני.",
                accent: C.warm,
              },
            ].map(card => (
              <div key={card.title} style={{
                background: "white", borderRadius: "20px", padding: "32px 24px",
                boxShadow: "0 2px 20px rgba(44,42,38,0.06)",
                borderTop: `4px solid ${card.accent}`,
                textAlign: "center",
              }}>
                <div style={{ fontSize: "36px", marginBottom: "16px" }}>{card.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: C.bark, margin: "0 0 12px" }}>{card.title}</h3>
                <p style={{ fontSize: "14px", color: C.barkLight, lineHeight: 1.8, margin: 0 }}>{card.text}</p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 767px) {
              .cupping-types { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </Section>

      {/* יתרונות */}
      <Section bg={C.cream}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            היתרונות של כוסות רוח
          </h2>
          <div className="cupping-benefits" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { icon: "💪", title: "שחרור שרירים", text: "הוואקום מרפה שרירים תפוסים ומשחרר נוקשות  - במיוחד בגב, כתפיים וצוואר." },
              { icon: "🩸", title: "שיפור זרימת דם", text: "הטיפול מגביר את אספקת הדם לאזור, מה שמזרז תהליכי ריפוי טבעיים." },
              { icon: "🛡️", title: "הפחתת דלקת", text: "כוסות רוח מסייעות בהפחתת דלקות מקומיות ובהקלה על כאבים כרוניים." },
              { icon: "🧘", title: "הרפיה עמוקה", text: "רוב המטופלים מדווחים על תחושת רוגע והרפיה עמוקה אחרי הטיפול." },
            ].map(item => (
              <div key={item.title} style={{
                background: "white", borderRadius: "16px", padding: "24px",
                boxShadow: "0 2px 16px rgba(44,42,38,0.06)",
                display: "flex", gap: "16px", alignItems: "flex-start",
              }}>
                <span style={{ fontSize: "28px", flexShrink: 0, lineHeight: 1.3 }}>{item.icon}</span>
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: C.sage, margin: "0 0 8px" }}>{item.title}</h3>
                  <p style={{ fontSize: "14px", color: C.barkLight, lineHeight: 1.8, margin: 0 }}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 600px) {
              .cupping-benefits { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </Section>

      {/* מה אומר המדע */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            מה אומר המחקר על כוסות רוח?
          </h2>
          <div style={{
            background: "white", borderRadius: "16px", padding: "32px",
            borderRight: `4px solid ${C.sage}`,
            boxShadow: "0 2px 16px rgba(44,42,38,0.06)",
          }}>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 20px" }}>
              כוסות רוח זכו לפופולריות עולמית  - בזכות ספורטאים אולימפיים ומחקרים שמאשרים את יעילותן:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: "🏊", text: "מייקל פלפס ושחקני NBA רבים משתמשים בכוסות רוח באופן קבוע. הסימנים העגולים על הגב הפכו לסמל של שיקום ספורטיבי מתקדם." },
                { icon: "📊", text: "מטא-אנליזה של 135 מחקרים מצאה שכוסות רוח יעילות בהפחתת כאב, שיפור טווח תנועה והאצת החלמה משרירים." },
                { icon: "🔬", text: "מחקרים הראו שהוואקום מגביר את זרימת הדם באזור ב-300% ומפעיל תהליכי ריפוי ברמה התאית  - כולל הפחתת חלבוני דלקת." },
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

      {/* למי מתאים */}
      <Section bg={C.cream}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            למי מתאים טיפול כוסות רוח?
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
            {[
              "כאבי גב כרוניים", "כאבי כתפיים וצוואר", "נוקשות שרירים",
              "שיקום ספורטיבי", "כאבי ראש מתח", "עייפות וחוסר אנרגיה",
              "בעיות נשימה", "צלוליטיס והצרת היקפים", "סיאטיקה",
            ].map(c => (
              <span key={c} style={{
                background: "white", border: `1.5px solid ${C.sage}30`,
                color: C.bark, padding: "8px 18px", borderRadius: "50px",
                fontSize: "14px", fontWeight: 600,
              }}>{c}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* איך הטיפול נראה  - טיימליין */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 32px" }}>
            איך נראה טיפול כוסות רוח?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0", position: "relative" }}>
            {[
              { num: "1", title: "הכנה ואבחון", text: "המטפל בודק את האזורים הכואבים ובוחר את נקודות ההנחה המתאימות. הטיפול מותאם לכל מטופל בהתאם למצבו." },
              { num: "2", title: "הנחת הכוסות", text: "הכוסות מוצמדות לעור באמצעות יצירת ואקום. התחושה היא של משיכה קלה  - לא כאב. הכוסות נשארות 5-15 דקות, ולעיתים מוזזות לאורך השרירים (כוסות רוח נעות)." },
              { num: "3", title: "אחרי הטיפול", text: "לאחר ההסרה נשארים סימנים עגולים ורודים עד סגולים  - זה תקין ונעלם תוך 3-7 ימים. רוב המטופלים מרגישים הקלה מיידית בכאבים ותחושת קלילות." },
            ].map((step, idx, arr) => (
              <div key={step.num} style={{ display: "flex", gap: "20px", alignItems: "flex-start", position: "relative", paddingBottom: idx < arr.length - 1 ? "32px" : "0" }}>
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

      {/* מה הסימנים אומרים */}
      <Section bg={C.cream}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>
              מדריך לסימנים
            </div>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 8px" }}>
              מה הסימנים על העור אומרים?
            </h2>
            <p style={{ fontSize: "15px", color: C.barkLight, margin: 0 }}>
              הצבע של הסימן מספר על מצב הרקמה באזור
            </p>
          </div>
          <div className="cupping-marks" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { color: "#F4A0A0", label: "ורוד בהיר", meaning: "זרימה תקינה", desc: "האזור בריא  - חסימה מינימלית. הסימן נעלם תוך יום-יומיים." },
              { color: "#E06060", label: "אדום", meaning: "מתח קל", desc: "מתח שרירי בינוני. נפוץ באזורי הכתפיים. נעלם תוך 3-4 ימים." },
              { color: "#A03030", label: "אדום כהה", meaning: "חסימה משמעותית", desc: "מצביע על סטגנציה של דם ואנרגיה. האזור צריך עוד טיפולים." },
              { color: "#6B2060", label: "סגול כהה", meaning: "חסימה כרונית", desc: "בדרך כלל באזורים עם כאב כרוני ממושך. משתפר עם סדרת טיפולים." },
            ].map(mark => (
              <div key={mark.label} style={{
                background: "white", borderRadius: "16px", padding: "20px",
                boxShadow: "0 2px 12px rgba(44,42,38,0.05)",
                display: "flex", gap: "16px", alignItems: "flex-start",
              }}>
                <div style={{
                  width: "44px", height: "44px", borderRadius: "50%",
                  background: mark.color, flexShrink: 0,
                  boxShadow: `0 2px 8px ${mark.color}50`,
                }} />
                <div>
                  <div style={{ fontSize: "14px", fontWeight: 800, color: C.bark, marginBottom: "2px" }}>{mark.label}</div>
                  <div style={{ fontSize: "12px", fontWeight: 700, color: C.sage, marginBottom: "6px" }}>{mark.meaning}</div>
                  <p style={{ fontSize: "13px", color: C.barkLight, lineHeight: 1.7, margin: 0 }}>{mark.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 600px) {
              .cupping-marks { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </Section>

      {/* שאלות נפוצות */}
      <Section bg={C.cream}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            שאלות נפוצות על כוסות רוח
          </h2>
          <ServiceFAQ items={[
            { q: "האם כוסות רוח כואבות?", a: "לא. רוב האנשים מרגישים תחושת משיכה קלה ונעימה. הטיפול מרגיע ולא כואב. אם יש אי-נוחות  - המטפל מתאים את עוצמת הוואקום." },
            { q: "מה הסימנים שנשארים אחרי הטיפול?", a: "הסימנים העגולים הם תוצאה של עלייה בזרימת הדם לאזור. הם לא כאובים ונעלמים תוך 3-7 ימים. צבע הסימנים מעיד על מידת החסימה באזור  - סימן כהה יותר מצביע על חסימה חזקה יותר." },
            { q: "כמה טיפולים צריך?", a: "למצבים חריפים לרוב מספיקים 2-4 טיפולים. למצבים כרוניים  - סדרה של 6-8 טיפולים. רבים ממשיכים בטיפולי תחזוקה אחת לשבוע-שבועיים." },
            { q: "האם אפשר לשלב כוסות רוח עם דיקור?", a: "בהחלט. שילוב כוסות רוח עם דיקור סיני הוא נפוץ מאוד ומעצים את התוצאות. בקליניקה עדי לרוב משלב בין השיטות בטיפול אחד לפי הצורך." },
          ]} />
        </div>
      </Section>

      {/* CTA ביניים */}
      <section style={{ background: C.sand, padding: "48px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "18px", fontWeight: 600, color: C.bark, margin: "0 0 20px" }}>
          רוצים לנסות כוסות רוח בראשון לציון?
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
