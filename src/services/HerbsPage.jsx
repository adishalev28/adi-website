import { useState } from "react";
import ServiceLayout from "./ServiceLayout";
import Section from "../shared/Section";
import { C, WA_URL } from "../shared/constants";
import WaSvg from "../shared/WaSvg";

const OTHER_SERVICES = [
  { label: "דיקור סיני", href: "/dikur-sini/" },
  { label: "שיאצו", href: "/shiatsu/" },
  { label: "כוסות רוח", href: "/cupping/" },
];

export default function HerbsPage() {
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
            צמחי מרפא סיניים בראשון לציון
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
            פורמולות צמחיות מותאמות אישית  - לטיפול בשורש הבעיה ולא רק בתסמינים
          </p>
        </div>
      </section>

      {/* מה זה צמחי מרפא סיניים - עם תמונה */}
      <Section bg={C.cream}>
        <div className="herbs-about" style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 340px", gap: "40px", alignItems: "center" }}>
          <div>
            <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>
              על הטיפול
            </div>
            <h2 style={{ fontSize: "32px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
              מה זה צמחי מרפא סיניים?
            </h2>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
              רפואת הצמחים הסינית (Chinese Herbal Medicine) היא אחד מענפי הליבה של הרפואה הסינית המסורתית, עם מסורת של אלפי שנים. הטיפול מבוסס על שילוב מדויק של צמחי מרפא בפורמולה מותאמת אישית  - בהתאם לאבחנה הסינית של המטופל.
            </p>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
              בניגוד לתרופות מערביות שפועלות על תסמין ספציפי, הפורמולה הצמחית מטפלת בשורש חוסר האיזון בגוף  - ולכן התוצאות הן לרוב יסודיות ומתמשכות. כל פורמולה מורכבת ממספר צמחים שפועלים יחד בסינרגיה.
            </p>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0" }}>
              בקליניקה של עדי שלו בראשון לציון, הצמחים ניתנים בצורת גרגירים (גרנולות) נוחים לשימוש  - פשוט מערבבים במים חמים ושותים. הפורמולה מותאמת ומשתנה בהתאם להתקדמות הטיפול.
            </p>
          </div>
          <div style={{
            borderRadius: "20px", overflow: "hidden",
            boxShadow: "0 4px 24px rgba(44,42,38,0.1)",
          }}>
            <img src="/herbs-treatment.jpg" alt="צמחי מרפא סיניים בקליניקה של עדי שלו בראשון לציון - שורשים, עשבי תיבול וגרנולות" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
        <style>{`
          @media (max-width: 767px) {
            .herbs-about { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </Section>

      {/* יתרונות */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            היתרונות של צמחי מרפא סיניים
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              { title: "טיפול בשורש", text: "הצמחים מטפלים בסיבה העמוקה לבעיה  - לא רק מקלים על התסמינים." },
              { title: "מותאם אישית", text: "כל פורמולה מורכבת במיוחד למטופל  - אין ʼתרופה אחת לכולםʼ." },
              { title: "מינימום תופעות לוואי", text: "הצמחים טבעיים ופועלים בעדינות, עם תופעות לוואי מינימליות." },
              { title: "שילוב עם דיקור", text: "צמחים + דיקור סיני = שילוב חזק שמעצים את הטיפול." },
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
              .herbs-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </Section>

      {/* למי מתאים */}
      <Section bg={C.cream}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            למי מתאים טיפול בצמחי מרפא?
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
            {[
              "בעיות עיכול", "אלרגיות ואסתמה", "בעיות שינה",
              "חרדה ומתח", "כאבי מחזור", "בעיות פוריות",
              "עייפות כרונית", "בעיות עור", "חיזוק מערכת החיסון",
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
            איך נראה טיפול בצמחי מרפא?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { num: "1", title: "אבחון סיני מקיף", text: "בפגישה הראשונה, המטפל מבצע אבחון מעמיק  - בדיקת דופק סיני, בדיקת לשון, ושיחה מפורטת על ההיסטוריה הבריאותית. האבחון הוא הבסיס להרכבת הפורמולה." },
              { num: "2", title: "הרכבת פורמולה אישית", text: "בהתאם לאבחון, המטפל מרכיב פורמולה ייחודית מצמחי מרפא סיניים. הפורמולה ניתנת בגרגירים (גרנולות)  - קלים להכנה ונוחים לשימוש יומיומי." },
              { num: "3", title: "מעקב והתאמה", text: "כל 2-4 שבועות, המטופל חוזר לבדיקה. המטפל בודק את ההתקדמות ומתאים את הפורמולה בהתאם  - מוסיף צמחים, מוריד, או משנה מינונים." },
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
            שאלות נפוצות על צמחי מרפא סיניים
          </h2>
          <ServiceFAQ items={[
            { q: "האם צמחי מרפא בטוחים?", a: "כן. צמחי המרפא הסיניים בשימוש קליני כבר אלפי שנים. המטפל בוחר צמחים בטוחים ומתאים מינונים בקפידה. חשוב לציין תרופות שאתם לוקחים כדי למנוע אינטראקציות." },
            { q: "איך לוקחים את הצמחים?", a: "בקליניקה של עדי, הצמחים ניתנים בצורת גרנולות (אבקה מרוכזת). פשוט מוסיפים מים חמים, מערבבים ושותים  - כמו תה. לוקחים 2-3 פעמים ביום." },
            { q: "כמה זמן עד שרואים תוצאות?", a: "תלוי בבעיה. מצבים חריפים (כמו הצטננות)  - תוך ימים. מצבים כרוניים  - בדרך כלל 2-4 שבועות עד לשיפור ניכר. טיפול מלא יכול להימשך מספר חודשים." },
            { q: "האם אפשר לשלב צמחים עם תרופות מערביות?", a: "ברוב המקרים כן, אבל חשוב ליידע את המטפל על כל תרופה שאתם לוקחים. עדי בודק אינטראקציות ומתאים את הפורמולה בהתאם." },
          ]} />
        </div>
      </Section>

      {/* CTA ביניים */}
      <section style={{ background: C.sand, padding: "48px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "18px", fontWeight: 600, color: C.bark, margin: "0 0 20px" }}>
          רוצים להתייעץ על צמחי מרפא סיניים?
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
