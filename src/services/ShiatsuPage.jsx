import { useState } from "react";
import ServiceLayout from "./ServiceLayout";
import Section from "../shared/Section";
import { C, WA_URL } from "../shared/constants";
import WaSvg from "../shared/WaSvg";

const OTHER_SERVICES = [
  { label: "דיקור סיני", href: "/dikur-sini/" },
  { label: "כוסות רוח", href: "/cupping/" },
  { label: "צמחי מרפא סיניים", href: "/herbs/" },
];

export default function ShiatsuPage() {
  return (
    <ServiceLayout otherServices={OTHER_SERVICES}>
      {/* Hero */}
      <section style={{
        minHeight: "50vh", position: "relative", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
        backgroundImage: "url(/adi-shiatsu.jpg)",
        backgroundSize: "cover", backgroundPosition: "center 20%",
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
            שיאצו בראשון לציון
          </h1>
          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.85)", lineHeight: 1.7 }}>
            עיסוי שיאצו מקצועי  - שחרור מתח, הקלה בכאבים ושיפור איכות החיים
          </p>
        </div>
      </section>

      {/* מה זה שיאצו  - עם תמונה */}
      <Section bg={C.cream}>
        <div className="shiatsu-about" style={{ maxWidth: "960px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 340px", gap: "40px", alignItems: "center" }}>
          <div>
            <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>
              על הטיפול
            </div>
            <h2 style={{ fontSize: "32px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
              מה זה שיאצו?
            </h2>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
              שיאצו (Shiatsu) הוא שיטת טיפול יפנית שמשמעותה "לחץ אצבעות". השיטה מבוססת על עקרונות הרפואה הסינית המסורתית ומשלבת לחיצות ממוקדות, מתיחות ותנועות לאורך מרידיאנים  - ערוצי אנרגיה שעוברים בגוף.
            </p>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 16px" }}>
              בניגוד לעיסוי שוודי שמתמקד בשרירים, שיאצו פועל ברמה עמוקה יותר  - הוא מכוון לאזן את זרימת האנרגיה (צ'י) בגוף, לשחרר חסימות ולעורר את מנגנוני הריפוי הטבעיים. הטיפול מתבצע בלבוש מלא, ללא שמנים, על מזרן או מיטת טיפולים.
            </p>
            <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0" }}>
              בקליניקה של עדי שלו בראשון לציון, טיפול השיאצו מותאם אישית לכל מטופל. בזכות שילוב הידע ברפואה סינית, הטיפול מדויק ומכוון לשורש הבעיה.
            </p>
          </div>
          <div style={{
            borderRadius: "20px", overflow: "hidden",
            boxShadow: "0 4px 24px rgba(44,42,38,0.1)",
          }}>
            <img src="/shiatsu-treatment.jpg" alt="טיפול שיאצו בקליניקה של עדי שלו בראשון לציון  - לחיצות ממוקדות על הגב" style={{ width: "100%", display: "block" }} />
          </div>
        </div>
        <style>{`
          @media (max-width: 767px) {
            .shiatsu-about { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </Section>

      {/* חוויית הטיפול  - 3 כרטיסים */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>
              חוויית הטיפול
            </div>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: 0 }}>
              מה מחכה לכם בשיאצו?
            </h2>
          </div>
          <div className="shiatsu-experience" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
            {[
              {
                icon: "🤝",
                title: "לפני הטיפול",
                text: "שיחה קצרה על המצב הנוכחי  - כאבים, מתח, שינה. עדי בודק דופק סיני ומתאים את הטיפול בדיוק למה שהגוף צריך היום.",
                accent: C.sage,
              },
              {
                icon: "🙌",
                title: "במהלך הטיפול",
                text: "שוכבים בנוח בלבוש מלא. לחיצות עמוקות ומדויקות לאורך ערוצי האנרגיה, מתיחות עדינות ונשימה מונחית. 50-60 דקות של שחרור.",
                accent: C.gold,
              },
              {
                icon: "✨",
                title: "אחרי הטיפול",
                text: "תחושת קלילות וגמישות. רוב המטופלים מדווחים על שינה טובה יותר באותו לילה, ירידה משמעותית בכאב והרגשת רוגע עמוק.",
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
        </div>
        <style>{`
          @media (max-width: 767px) {
            .shiatsu-experience { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </Section>

      {/* למי מתאים */}
      <Section bg={C.cream}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            למי מתאים שיאצו?
          </h2>
          <p style={{ fontSize: "16px", color: C.barkLight, lineHeight: 1.9, margin: "0 0 24px" }}>
            שיאצו מתאים לאנשים שמחפשים טיפול טבעי ועמוק ללא שימוש במחטים. השיטה יעילה במיוחד עבור:
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
            {[
              "כאבי גב וצוואר", "כאבי כתפיים ושכמות", "מתח נפשי וחרדה",
              "כאבי ראש ומיגרנות", "נוקשות שרירים", "עייפות כרונית",
              "בעיות שינה", "כאבי מחזור", "מצבי לחץ ושחיקה",
              "שיקום לאחר פציעות ספורט", "כאבי מפרקים", "בעיות עיכול",
            ].map(c => (
              <span key={c} style={{
                background: "white", border: `1.5px solid ${C.sage}30`,
                color: C.bark, padding: "8px 18px", borderRadius: "50px",
                fontSize: "14px", fontWeight: 600,
              }}>{c}</span>
            ))}
          </div>
          <p style={{ fontSize: "15px", color: C.barkLight, lineHeight: 1.8 }}>
            שיאצו מתאים גם למי שמעולם לא עשה טיפול ברפואה סינית  - הטיפול נעים, לא פולשני, ומרגיע.
          </p>
        </div>
      </Section>

      {/* ההבדל בין שיאצו לדיקור  - טבלת השוואה משודרגת */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 8px" }}>
              שיאצו או דיקור סיני?
            </h2>
            <p style={{ fontSize: "15px", color: C.barkLight, margin: 0 }}>
              שתי השיטות מבוססות על רפואה סינית  - הנה ההבדלים
            </p>
          </div>
          <div style={{
            background: "white", borderRadius: "20px", overflow: "hidden",
            boxShadow: "0 4px 24px rgba(44,42,38,0.08)",
          }}>
            {/* כותרות */}
            <div className="shiatsu-compare-header" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
              borderBottom: `2px solid ${C.sand}`,
            }}>
              <div style={{ padding: "18px 16px", fontSize: "13px", fontWeight: 600, color: C.barkLight }} />
              <div style={{
                padding: "18px 16px", textAlign: "center", fontWeight: 800, fontSize: "16px",
                color: "white", background: C.sage,
              }}>שיאצו</div>
              <div style={{
                padding: "18px 16px", textAlign: "center", fontWeight: 800, fontSize: "16px",
                color: C.bark,
              }}>דיקור סיני</div>
            </div>
            {/* שורות */}
            {[
              { label: "כלי עבודה", shiatsu: "אגודלים, כפות ידיים, מרפקים", acupuncture: "מחטים דקיקות חד-פעמיות" },
              { label: "לבוש", shiatsu: "בלבוש מלא", acupuncture: "חשיפה חלקית" },
              { label: "תחושה", shiatsu: "לחץ עמוק ומתיחות", acupuncture: "עקצוץ קל ורגיעה" },
              { label: "מתאים במיוחד ל...", shiatsu: "מתח, נוקשות, פחד ממחטים", acupuncture: "כאב כרוני, הורמונים, פריון" },
            ].map((row, i) => (
              <div key={row.label} className="shiatsu-compare-row" style={{
                display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
                borderBottom: i < 3 ? `1px solid ${C.sand}` : "none",
              }}>
                <div style={{
                  padding: "16px", fontSize: "13px", fontWeight: 700, color: C.bark,
                  display: "flex", alignItems: "center",
                }}>{row.label}</div>
                <div style={{
                  padding: "16px", fontSize: "14px", color: C.bark, textAlign: "center",
                  background: `${C.sage}08`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>{row.shiatsu}</div>
                <div style={{
                  padding: "16px", fontSize: "14px", color: C.barkLight, textAlign: "center",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>{row.acupuncture}</div>
              </div>
            ))}
          </div>
          <p style={{
            fontSize: "14px", color: C.barkLight, lineHeight: 1.8,
            marginTop: "20px", textAlign: "center", fontStyle: "italic",
          }}>
            לעיתים עדי משלב בין שתי השיטות בטיפול אחד  - לפי מה שהגוף צריך
          </p>
          <style>{`
            @media (max-width: 600px) {
              .shiatsu-compare-header, .shiatsu-compare-row {
                grid-template-columns: 1fr 1fr !important;
              }
              .shiatsu-compare-header > div:first-child,
              .shiatsu-compare-row > div:first-child {
                grid-column: 1 / -1;
                text-align: center;
                border-bottom: 1px solid #EDE8DF;
                padding: 12px 16px !important;
              }
            }
          `}</style>
        </div>
      </Section>

      {/* איך הטיפול נראה */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            איך נראה טיפול שיאצו בקליניקה?
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              { num: "1", title: "שיחה ואבחון", text: "בפגישה הראשונה נשוחח על ההיסטוריה הרפואית, הכאבים ואורח החיים. בדיקת דופק סיני תעזור לזהות חוסר איזון אנרגטי ולהתאים את הטיפול." },
              { num: "2", title: "הטיפול עצמו", text: "הטיפול נמשך כ-50-60 דקות. באמצעות לחיצות אגודלים, כפות ידיים ולעיתים מרפקים, המטפל עובד לאורך המרידיאנים ומשחרר מתח ונוקשות. רוב המטופלים מרגישים הקלה כבר בטיפול הראשון." },
              { num: "3", title: "תוצאות והמשך", text: "אחרי שיאצו רוב האנשים מרגישים רגיעה עמוקה, גמישות משופרת ופחות כאב. סדרת טיפולים של 4-8 מפגשים בדרך כלל מספיקה לטיפול במצבים כרוניים." },
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

      {/* מה מרגישים אחרי שיאצו */}
      <Section bg={C.cream}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <div style={{ color: C.sage, fontSize: "12px", fontWeight: 700, letterSpacing: "3px", marginBottom: "12px" }}>
              תחושות מהטיפול
            </div>
            <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: 0 }}>
              מה מרגישים אחרי שיאצו?
            </h2>
          </div>
          <div className="shiatsu-feelings" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px",
          }}>
            {[
              { icon: "🌊", title: "רגיעה עמוקה", text: "תחושת שקט פנימי, כאילו נפלו עשרה קילו מהכתפיים" },
              { icon: "🦵", title: "גמישות משופרת", text: "טווח תנועה רחב יותר, פחות נוקשות בבוקר" },
              { icon: "😴", title: "שינה טובה יותר", text: "הרבה מטופלים ישנים הכי טוב בלילה שאחרי השיאצו" },
              { icon: "⚡", title: "אנרגיה מחודשת", text: "לא עייפות  - דווקא תחושת חיוניות ובהירות ראש" },
            ].map(f => (
              <div key={f.title} style={{
                background: "white", borderRadius: "16px", padding: "24px",
                boxShadow: "0 2px 12px rgba(44,42,38,0.05)",
                display: "flex", gap: "16px", alignItems: "flex-start",
              }}>
                <span style={{ fontSize: "28px", flexShrink: 0, lineHeight: 1.3 }}>{f.icon}</span>
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: 700, color: C.bark, margin: "0 0 6px" }}>{f.title}</h3>
                  <p style={{ fontSize: "14px", color: C.barkLight, lineHeight: 1.7, margin: 0 }}>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 600px) {
              .shiatsu-feelings { grid-template-columns: 1fr !important; }
            }
          `}</style>
        </div>
      </Section>

      {/* שאלות נפוצות */}
      <Section bg={C.sand}>
        <div style={{ maxWidth: "720px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "28px", fontWeight: 800, color: C.bark, margin: "0 0 24px" }}>
            שאלות נפוצות על שיאצו
          </h2>
          <ServiceFAQ items={[
            { q: "האם שיאצו כואב?", a: "שיאצו לא אמור לכאוב. הלחיצות עמוקות אבל מותאמות לרגישות שלכם. ייתכן רגע של אי-נוחות כשמשחררים נקודת מתח, אבל בסך הכל הטיפול נעים ומרגיע. אם יש לחיצה חזקה מדי  - תגידו ונתאים." },
            { q: "מה ללבוש לטיפול שיאצו?", a: "ביגוד נוח ורפוי  - חולצה ומכנסיים ארוכים מבד גמיש. אין צורך להתפשט. הטיפול מבוצע בלבוש מלא, ללא שמנים." },
            { q: "כמה טיפולי שיאצו צריך?", a: "מצבים חריפים כמו צוואר תפוס יכולים להשתפר תוך 2-3 טיפולים. מצבים כרוניים כמו כאבי כתפיים ממושכים בדרך כלל דורשים 6-8 טיפולים. רבים ממשיכים בטיפול תחזוקתי אחת לשבוע-שבועיים." },
            { q: "מה ההבדל בין שיאצו לעיסוי רגיל?", a: "עיסוי שוודי מתמקד בשרירים באמצעות שמנים ולישה. שיאצו עובד על ערוצי אנרגיה (מרידיאנים) ברפואה סינית, משתמש בלחיצות ממוקדות ומתיחות, ומטפל גם בהיבט האנרגטי של הגוף  - לא רק בשרירים." },
          ]} />
        </div>
      </Section>

      {/* CTA ביניים */}
      <section style={{ background: C.sand, padding: "48px 24px", textAlign: "center" }}>
        <p style={{ fontSize: "18px", fontWeight: 600, color: C.bark, margin: "0 0 20px" }}>
          רוצים לנסות שיאצו בראשון לציון?
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
