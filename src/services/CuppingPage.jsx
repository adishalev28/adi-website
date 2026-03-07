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
            ✦ עדי שלו — רפואה סינית ✦
          </div>
          <h1 style={{
            fontSize: "clamp(36px, 6vw, 52px)", fontWeight: 900,
            color: "white", margin: "0 0 16px", lineHeight: 1.2,
          }}>
            כוסות רוח בראשון לציון
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
            טיפול כוסות רוח מקצועי — שיפור זרימת הדם, הקלה בכאבים ושחרור שרירים
          </p>
        </div>
      </section>

      {/* מה זה כוסות רוח */}
      <Section bg={C.cream}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>
            על הטיפול
          </div>
          <h2 style={{ fontSize: "32px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            מה זה כוסות רוח?
          </h2>
          <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
            כוסות רוח (Cupping) היא שיטת טיפול עתיקה ברפואה הסינית. בטיפול, המטפל מניח כוסות זכוכית או סיליקון על העור ויוצר ואקום — שאיבה קלה שמושכת את העור כלפי מעלה. הוואקום מגביר את זרימת הדם לאזור, משחרר מתח בשרירים ומסייע בסילוק רעלים.
          </p>
          <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
            הטיפול נפוץ מאוד בקרב ספורטאים מקצועיים ברחבי העולם — ואולי שמתם לב לסימנים העגולים האופייניים על הגב של שחקני אולימפיאדה. אבל כוסות רוח מתאימות לכל אחד, לא רק לספורטאים.
          </p>
          <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0" }}>
            בקליניקה של עדי שלו בראשון לציון, כוסות הרוח משולבות לרוב כחלק מטיפול כולל — יחד עם דיקור סיני או שיאצו — כדי להעצים את התוצאות.
          </p>
        </div>
      </Section>

      {/* יתרונות */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            היתרונות של כוסות רוח
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { title: "שחרור שרירים", text: "הוואקום מרפה שרירים תפוסים ומשחרר נוקשות — במיוחד בגב, כתפיים וצוואר." },
              { title: "שיפור זרימת דם", text: "הטיפול מגביר את אספקת הדם לאזור, מה שמזרז תהליכי ריפוי טבעיים." },
              { title: "הפחתת דלקת", text: "כוסות רוח מסייעות בהפחתת דלקות מקומיות ובהקלה על כאבים כרוניים." },
              { title: "הרפיה עמוקה", text: "רוב המטופלים מדווחים על תחושת רוגע והרפיה עמוקה אחרי הטיפול." },
            ].map(item => (
              <div key={item.title} style={{
                background: "white", borderRadius: "16px", padding: "24px",
                boxShadow: "0 2px 16px rgba(44,42,38,0.06)",
              }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, color: C.sage, margin: "0 0 8px" }}>{item.title}</h3>
                <p style={{ fontSize: "14px", color: C.barkLight, lineHeight: 1.8, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 767px) {
              .cupping-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
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

      {/* איך הטיפול נראה */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            איך נראה טיפול כוסות רוח?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { num: "1", title: "הכנה ואבחון", text: "המטפל בודק את האזורים הכואבים ובוחר את נקודות ההנחה המתאימות. הטיפול מותאם לכל מטופל בהתאם למצבו." },
              { num: "2", title: "הנחת הכוסות", text: "הכוסות מוצמדות לעור באמצעות יצירת ואקום. התחושה היא של משיכה קלה — לא כאב. הכוסות נשארות 5-15 דקות, ולעיתים מוזזות לאורך השרירים (כוסות רוח נעות)." },
              { num: "3", title: "אחרי הטיפול", text: "לאחר ההסרה נשארים סימנים עגולים ורודים עד סגולים — זה תקין ונעלם תוך 3-7 ימים. רוב המטופלים מרגישים הקלה מיידית בכאבים ותחושת קלילות." },
            ].map(step => (
              <div key={step.num} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  background: C.sage, color: "white", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: "18px", fontWeight: 800, flexShrink: 0,
                }}>{step.num}</div>
                <div>
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
            שאלות נפוצות על כוסות רוח
          </h2>
          <ServiceFAQ items={[
            { q: "האם כוסות רוח כואבות?", a: "לא. רוב האנשים מרגישים תחושת משיכה קלה ונעימה. הטיפול מרגיע ולא כואב. אם יש אי-נוחות — המטפל מתאים את עוצמת הוואקום." },
            { q: "מה הסימנים שנשארים אחרי הטיפול?", a: "הסימנים העגולים הם תוצאה של עלייה בזרימת הדם לאזור. הם לא כאובים ונעלמים תוך 3-7 ימים. צבע הסימנים מעיד על מידת החסימה באזור — סימן כהה יותר מצביע על חסימה חזקה יותר." },
            { q: "כמה טיפולים צריך?", a: "למצבים חריפים לרוב מספיקים 2-4 טיפולים. למצבים כרוניים — סדרה של 6-8 טיפולים. רבים ממשיכים בטיפולי תחזוקה אחת לשבוע-שבועיים." },
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
