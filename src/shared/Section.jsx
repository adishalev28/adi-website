import useFadeIn from "./useFadeIn";
import { C } from "./constants";

export default function Section({ children, id, bg, className = "", style = {} }) {
  const ref = useFadeIn();
  return (
    <section id={id} ref={ref} className={`section-padding fade-section ${className}`}
      style={{ background: bg || C.cream, padding: "100px 24px", ...style }}>
      {children}
    </section>
  );
}
