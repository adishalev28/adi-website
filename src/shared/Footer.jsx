import { C } from "./constants";

export default function Footer() {
  return (
    <footer style={{
      background: "#1a1917", color: "rgba(255,255,255,0.35)",
      padding: "32px 24px 24px", textAlign: "center", fontSize: "12px",
      letterSpacing: "0.5px",
    }}>
      <nav style={{
        display: "flex", flexWrap: "wrap", gap: "8px 20px",
        justifyContent: "center", marginBottom: "16px",
      }}>
        {[
          { label: "דיקור סיני", href: "/dikur-sini/" },
          { label: "שיאצו", href: "/shiatsu/" },
          { label: "כוסות רוח", href: "/cupping/" },
          { label: "צמחי מרפא", href: "/herbs/" },
          { label: "מאמרים", href: "/blog/" },
        ].map(l => (
          <a key={l.href} href={l.href} style={{
            color: "rgba(255,255,255,0.5)", textDecoration: "none",
            fontSize: "13px", transition: "color 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.8)"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}
          >{l.label}</a>
        ))}
      </nav>
      <div>© {new Date().getFullYear()} עדי שלו — רפואה סינית · ראשון לציון</div>
    </footer>
  );
}
