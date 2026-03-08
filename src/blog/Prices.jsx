import ArticleLayout from "./ArticleLayout";
import { C } from "../shared/constants";

const RELATED = [
  { href: "/blog/what-is-acupuncture/", title: "מה זה דיקור סיני?", tag: "דיקור סיני" },
  { href: "/blog/faq-complete/", title: "שאלות ותשובות — המדריך המלא", tag: "שאלות ותשובות" },
];

const PRICE_TABLE = [
  { service: "דיקור סיני",      first: "250-350", followup: "200-300", notes: "הטיפול הנפוץ ביותר" },
  { service: "שיאצו",            first: "250-350", followup: "200-300", notes: "טיפול ידני ללא מחטים" },
  { service: "כוסות רוח",        first: "200-300", followup: "150-250", notes: "לרוב משולב עם דיקור" },
  { service: "צמחי מרפא סיניים", first: "150-250", followup: "100-200", notes: "מחיר הייעוץ, ללא עלות הצמחים" },
  { service: "טיפול משולב",      first: "300-400", followup: "250-350", notes: "דיקור + שיאצו / כוסות רוח" },
];

export default function Prices() {
  return (
    <ArticleLayout
      title="מחירון טיפולים ברפואה סינית — כמה זה עולה?"
      subtitle="מחירי דיקור סיני, שיאצו, כוסות רוח וצמחי מרפא. מה משפיע על העלות והאם קופת חולים מכסה."
      date="מרץ 2026"
      readTime="4"
      relatedArticles={RELATED}
    >
      <p>
        אחת השאלות הראשונות שמטופלים שואלים היא "כמה עולה טיפול?"
        הנה סקירה מקיפה של טווחי המחירים לטיפולי רפואה סינית בישראל.
      </p>

      <h2>טווחי מחירים לפי סוג טיפול</h2>

      {/* טבלת מחירים */}
      <div style={{
        overflowX: "auto", margin: "24px 0",
        borderRadius: "16px", border: `1px solid ${C.sage}20`,
      }}>
        <table style={{
          width: "100%", borderCollapse: "collapse",
          fontSize: "14px", textAlign: "right",
        }}>
          <thead>
            <tr style={{ background: C.sage, color: "white" }}>
              <th style={{ padding: "12px 16px", fontWeight: 700 }}>סוג טיפול</th>
              <th style={{ padding: "12px 16px", fontWeight: 700 }}>טיפול ראשון</th>
              <th style={{ padding: "12px 16px", fontWeight: 700 }}>טיפול המשך</th>
              <th style={{ padding: "12px 16px", fontWeight: 700 }}>הערות</th>
            </tr>
          </thead>
          <tbody>
            {PRICE_TABLE.map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "white" : C.cream, borderBottom: `1px solid ${C.sage}10` }}>
                <td style={{ padding: "12px 16px", fontWeight: 600, color: C.bark }}>{row.service}</td>
                <td style={{ padding: "12px 16px", color: C.sageDark, fontWeight: 600, direction: "ltr", textAlign: "right" }}>₪{row.first}</td>
                <td style={{ padding: "12px 16px", color: C.sageDark, fontWeight: 600, direction: "ltr", textAlign: "right" }}>₪{row.followup}</td>
                <td style={{ padding: "12px 16px", color: C.barkLight, fontSize: "13px" }}>{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <blockquote>
        המחירים המוצגים הם טווחים מקובלים בשוק הישראלי. המחיר המדויק נקבע לפי המטפל, האזור והניסיון.
      </blockquote>

      <h2>מה משפיע על המחיר?</h2>
      <ul>
        <li><strong>ניסיון המטפל</strong> — מטפלים ותיקים עם התמחויות נוספות גובים יותר</li>
        <li><strong>משך הטיפול</strong> — טיפול ראשון ארוך יותר (60-90 דק') וכולל אבחון מקיף</li>
        <li><strong>מיקום</strong> — מרכז הארץ יקר יותר מהפריפריה</li>
        <li><strong>סוג הטיפול</strong> — טיפולים משולבים (דיקור + שיאצו) עולים יותר</li>
        <li><strong>חבילות</strong> — רכישת סדרת טיפולים מראש מעניקה הנחה</li>
      </ul>

      <h2>האם קופת חולים מכסה?</h2>
      <p>
        רוב קופות החולים בישראל מציעות השתתפות ברפואה משלימה דרך הביטוח המשלים:
      </p>
      <ul>
        <li><strong>מכבי</strong> — מכבי שלי כולל החזר חלקי לרפואה משלימה</li>
        <li><strong>כללית</strong> — כללית מושלם ופלטינום מציעות החזרים</li>
        <li><strong>מאוחדת</strong> — מאוחדת עדיף כולל רפואה משלימה</li>
        <li><strong>לאומית</strong> — לאומית זהב ופלטינום</li>
      </ul>
      <p>
        בנוסף, ביטוחים פרטיים רבים מכסים טיפולי רפואה משלימה.
        מומלץ לבדוק מול הביטוח שלכם לפני תחילת הטיפולים.
      </p>

      <h2>טיפול ראשון מול טיפול המשך</h2>
      <h3>הטיפול הראשון (60-90 דקות)</h3>
      <p>
        כולל שיחת אבחון מקיפה, בדיקת דופק ולשון, בניית תוכנית טיפול אישית,
        והטיפול עצמו. לכן המחיר גבוה יותר.
      </p>

      <h3>טיפולי המשך (45-60 דקות)</h3>
      <p>
        מתמקדים בטיפול עצמו עם עדכון קצר על ההתקדמות.
        המחיר נמוך יותר כי שלב האבחון כבר בוצע.
      </p>

      <h2>האם כדאי? שורה תחתונה</h2>
      <p>
        ההשקעה בטיפול רפואה סינית מחזירה את עצמה — הפחתת כאבים, שיפור שינה,
        ירידה בשימוש בתרופות, ושיפור כללי באיכות החיים.
        רבים מהמטופלים מדווחים שהטיפול "שינה להם את החיים".
      </p>
      <p>
        <strong>רוצים לשמוע על מחירים בקליניקה שלנו?</strong> צרו קשר ונשמח לתת הצעה אישית.
      </p>
    </ArticleLayout>
  );
}
