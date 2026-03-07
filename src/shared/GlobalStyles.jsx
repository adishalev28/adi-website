export default function GlobalStyles() {
  return (
    <style>{`
      /* Fade-in animation */
      .fade-section { opacity: 0; transform: translateY(30px); transition: opacity 0.7s ease, transform 0.7s ease; }
      .fade-visible { opacity: 1 !important; transform: translateY(0) !important; }

      /* Smooth scrolling */
      html { scroll-behavior: smooth; }

      /* Global responsive */
      @media (max-width: 767px) {
        .section-padding { padding-top: 60px !important; padding-bottom: 60px !important; padding-left: 16px !important; padding-right: 16px !important; }
        .section-title { font-size: 28px !important; }
      }

      /* Selection color */
      ::selection { background: rgba(122,139,106,0.3); }
    `}</style>
  );
}
