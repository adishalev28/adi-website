import { C, WA_URL } from "./constants";
import WaSvg from "./WaSvg";

export default function ContactCTA({ title = "רוצים לקבוע תור?", subtitle = "צרו קשר לתיאום תור בקליניקה לרפואה סינית בראשון לציון" }) {
  return (
    <section style={{
      background: C.bark, padding: "80px 24px", textAlign: "center",
    }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "32px", fontWeight: 800, color: "white", margin: "0 0 16px" }}>
          {title}
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, margin: "0 0 36px" }}>
          {subtitle}
        </p>
        <a href={WA_URL} target="_blank" rel="noreferrer" style={{
          display: "inline-flex", alignItems: "center", gap: "10px",
          background: "#25D366", color: "white", padding: "16px 40px",
          borderRadius: "50px", fontSize: "16px", fontWeight: 800,
          textDecoration: "none",
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
    </section>
  );
}
