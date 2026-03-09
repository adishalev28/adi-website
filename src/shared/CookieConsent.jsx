import { useState, useEffect } from "react";
import { C } from "./constants";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem("cookieConsent", "true");
    setVisible(false);
  };

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 300,
      background: "rgba(44,42,38,0.95)", backdropFilter: "blur(8px)",
      padding: "14px 24px",
      display: "flex", flexWrap: "wrap", alignItems: "center",
      justifyContent: "center", gap: "10px 24px",
      fontSize: "14px", color: "rgba(255,255,255,0.8)",
      boxShadow: "0 -2px 20px rgba(0,0,0,0.15)",
    }}>
      <p style={{ margin: 0, textAlign: "center" }}>
        אתר זה משתמש בעוגיות טכניות בלבד לצורך תפקוד תקין.{" "}
        <a href="/privacy/" style={{
          color: C.goldLight, textDecoration: "underline",
        }}>
          מדיניות פרטיות
        </a>
      </p>
      <button onClick={accept} style={{
        background: C.sage, color: "white", border: "none",
        padding: "8px 28px", borderRadius: "50px",
        fontSize: "14px", fontWeight: 700, cursor: "pointer",
        transition: "background 0.2s",
      }}
        onMouseEnter={e => e.currentTarget.style.background = C.sageDark}
        onMouseLeave={e => e.currentTarget.style.background = C.sage}
      >
        הבנתי
      </button>
    </div>
  );
}
