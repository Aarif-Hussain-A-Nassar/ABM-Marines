interface SectionHeaderProps {
  label:    string;
  heading:  React.ReactNode;
  sub?:     string;
  centered?: boolean;
}

export default function SectionHeader({ label, heading, sub, centered = true }: SectionHeaderProps) {
  return (
    <div style={{ textAlign: centered ? "center" : "left", marginBottom: "4rem" }}>
      <div className="label-tag" style={{ display: "inline-flex", marginBottom: "1.25rem" }}>
        {label}
      </div>
      <h2 className="section-heading" style={{ maxWidth: "700px", margin: centered ? "0 auto 1.25rem" : "0 0 1.25rem" }}>
        {heading}
      </h2>
      {sub && (
        <p className="section-subheading" style={{ margin: centered ? "0 auto" : "0" }}>
          {sub}
        </p>
      )}
    </div>
  );
}
