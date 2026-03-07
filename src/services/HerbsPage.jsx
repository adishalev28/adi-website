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

      {/* צמחים נפוצים */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>
              מהמרשם הסיני
            </div>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 8px" }}>
              צמחים נפוצים ברפואה הסינית
            </h2>
            <p style={{ fontSize: "15px", color: C.barkLight, margin: 0 }}>
              כל פורמולה מורכבת מצמחים שנבחרים בקפידה ופועלים יחד בסינרגיה
            </p>
          </div>
          <div className="herbs-showcase" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
            {[
              { icon: "🌿", name: "חואנג צ'י", latin: "Astragalus", desc: "חיזוק מערכת החיסון, העלאת אנרגיה ותמיכה בעיכול. אחד הצמחים החשובים ברפואה הסינית.", accent: C.sage },
              { icon: "🫚", name: "ג'ינג'ר (שנג ג'יאנג)", latin: "Zingiber", desc: "חימום הגוף, שיפור העיכול, הקלה על בחילות. משמש כמעט בכל פורמולה חורפית.", accent: C.gold },
              { icon: "🌺", name: "דאנג גוויי", latin: "Angelica sinensis", desc: "הזנת הדם, ויסות המחזור החודשי ושיפור זרימת הדם. מכונה 'הג'ינסנג של הנשים'.", accent: C.warm },
              { icon: "🍄", name: "לינג ז'י (ריישי)", latin: "Ganoderma", desc: "הרגעה, חיזוק החיסון, שיפור השינה. פטריית מרפא מלכותית שמשמשת כבר אלפי שנים.", accent: C.sage },
              { icon: "🌱", name: "גאן צאו (ליקוריץ)", latin: "Glycyrrhiza", desc: "הרמוניה בפורמולה  - 'המתווך' שעוזר לצמחים האחרים לעבוד יחד. מרגיע את מערכת העיכול.", accent: C.gold },
              { icon: "🫐", name: "גוג'י ברי (גואו צ'י)", latin: "Lycium", desc: "הזנת הכבד והכליות, שיפור הראייה, חיזוק הגוף. סופרפוד שהמערב גילה רק לאחרונה.", accent: C.warm },
            ].map(herb => (
              <div key={herb.name} style={{
                background: "white", borderRadius: "20px", padding: "28px 24px",
                boxShadow: "0 2px 20px rgba(44,42,38,0.06)",
                borderTop: `4px solid ${herb.accent}`,
              }}>
                <div style={{ fontSize: "32px", marginBottom: "12px" }}>{herb.icon}</div>
                <h3 style={{ fontSize: "17px", fontWeight: 700, color: C.bark, margin: "0 0 4px" }}>{herb.name}</h3>
                <div style={{ fontSize: "12px", color: C.sage, fontStyle: "italic", marginBottom: "10px" }}>{herb.latin}</div>
                <p style={{ fontSize: "13px", color: C.barkLight, lineHeight: 1.7, margin: 0 }}>{herb.desc}</p>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 767px) {
              .herbs-showcase { grid-template-columns: 1fr 1fr !important; }
            }
            @media (max-width: 480px) {
              .herbs-showcase { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </Section>

      {/* יתרונות + השוואה */}
      <Section bg={C.cream}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 8px" }}>
              צמחי מרפא סיניים לעומת תרופות מערביות
            </h2>
            <p style={{ fontSize: "15px", color: C.barkLight, margin: 0 }}>
              שני עולמות שונים  - שניהם יכולים לעבוד יחד
            </p>
          </div>
          <div style={{
            background: "white", borderRadius: "20px", overflow: "hidden",
            boxShadow: "0 4px 24px rgba(44,42,38,0.08)",
          }}>
            <div className="herbs-compare-header" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
              borderBottom: `2px solid ${C.sand}`,
            }}>
              <div style={{ padding: "18px 16px", fontSize: "13px", fontWeight: 600, color: C.barkLight }} />
              <div style={{
                padding: "18px 16px", textAlign: "center", fontWeight: 800, fontSize: "16px",
                color: "white", background: C.sage,
              }}>צמחי מרפא סיניים</div>
              <div style={{
                padding: "18px 16px", textAlign: "center", fontWeight: 800, fontSize: "16px",
                color: C.bark,
              }}>תרופות מערביות</div>
            </div>
            {[
              { label: "גישה", herbs: "מטפל בשורש חוסר האיזון", western: "מטפל בתסמין הספציפי" },
              { label: "התאמה אישית", herbs: "פורמולה ייחודית לכל מטופל", western: "מינון אחיד לכולם" },
              { label: "תופעות לוואי", herbs: "מעטות  - הצמחים פועלים בעדינות", western: "לעיתים משמעותיות" },
              { label: "קצב פעולה", herbs: "הדרגתי  - בונה בריאות לאורך זמן", western: "מהיר  - הקלה מיידית" },
              { label: "שילוב", herbs: "פורמולה סינרגטית של מספר צמחים", western: "בדרך כלל חומר פעיל בודד" },
            ].map((row, i, arr) => (
              <div key={row.label} className="herbs-compare-row" style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                borderBottom: i < arr.length - 1 ? `1px solid ${C.sand}` : "none",
              }}>
                <div style={{
                  padding: "16px", fontSize: "13px", fontWeight: 700, color: C.bark,
                  display: "flex", alignItems: "center",
                }}>{row.label}</div>
                <div style={{
                  padding: "16px", fontSize: "14px", color: C.bark, textAlign: "center",
                  background: `${C.sage}08`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>{row.herbs}</div>
                <div style={{
                  padding: "16px", fontSize: "14px", color: C.barkLight, textAlign: "center",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>{row.western}</div>
              </div>
            ))}
          </div>
          <p style={{
            fontSize: "14px", color: C.barkLight, lineHeight: 1.8,
            marginTop: "20px", textAlign: "center", fontStyle: "italic",
          }}>
            צמחי מרפא סיניים יכולים לעבוד לצד טיפולים מערביים  - חשוב ליידע את המטפל על כל תרופה
          </p>
          <style>{`
            @media (max-width: 600px) {
              .herbs-compare-header, .herbs-compare-row {
                grid-template-columns: 1fr 1fr !important;
              }
              .herbs-compare-header > div:first-child,
              .herbs-compare-row > div:first-child {
                grid-column: 1 / -1;
                text-align: center;
                border-bottom: 1px solid #EDE8DF;
                padding: 12px 16px !important;
              }
            }
          `}</style>
        </div>
      </Section>

      {/* מה אומר המדע */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            מה אומר המחקר על צמחי מרפא סיניים?
          </h2>
          <div style={{
            background: "white", borderRadius: "16px", padding: "32px",
            borderRight: `4px solid ${C.sage}`,
            boxShadow: "0 2px 16px rgba(44,42,38,0.06)",
          }}>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 20px" }}>
              רפואת הצמחים הסינית נחקרת היום בהרחבה  - והתוצאות מרשימות:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: "🏆", text: "פרס נובל לרפואה (2015) הוענק לטו יויו על גילוי ארטמיסינין  - תרופה למלריה שמקורה בצמח מרפא סיני עתיק (צ'ינג האו). הוכחה שהרפואה הסינית מחזיקה תגליות רפואיות חשובות." },
                { icon: "📊", text: "סקירות שיטתיות מצאו שפורמולות צמחיות סיניות יעילות בטיפול בתסמונת המעי הרגיז, אלרגיות עונתיות ובעיות עיכול כרוניות." },
                { icon: "🔬", text: "מחקרים מודרניים מזהים את החומרים הפעילים בצמחים סיניים ומאשרים פעילות נוגדת דלקת, נוגדת חמצון ותומכת חיסון." },
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

      {/* איך הטיפול נראה  - טיימליין */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 32px" }}>
            איך נראה טיפול בצמחי מרפא?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0", position: "relative" }}>
            {[
              { num: "1", title: "אבחון סיני מקיף", text: "בפגישה הראשונה, המטפל מבצע אבחון מעמיק  - בדיקת דופק סיני, בדיקת לשון, ושיחה מפורטת על ההיסטוריה הבריאותית. האבחון הוא הבסיס להרכבת הפורמולה." },
              { num: "2", title: "הרכבת פורמולה אישית", text: "בהתאם לאבחון, המטפל מרכיב פורמולה ייחודית מצמחי מרפא סיניים. הפורמולה ניתנת בגרגירים (גרנולות)  - קלים להכנה ונוחים לשימוש יומיומי." },
              { num: "3", title: "שימוש יומיומי", text: "מערבבים את הגרנולות במים חמים ושותים 2-3 פעמים ביום. זה פשוט  - כמו להכין תה. הטעם משתנה בין פורמולות, ורוב המטופלים מתרגלים תוך ימים." },
              { num: "4", title: "מעקב והתאמה", text: "כל 2-4 שבועות, המטופל חוזר לבדיקה. המטפל בודק את ההתקדמות ומתאים את הפורמולה בהתאם  - מוסיף צמחים, מוריד, או משנה מינונים." },
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
