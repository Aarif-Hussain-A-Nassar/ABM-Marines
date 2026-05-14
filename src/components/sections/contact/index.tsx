import SectionHeader from "@/components/ui/SectionHeader";
import ContactInfo from "./ContactInfo";
import EnquiryForm from "./EnquiryForm";
import { contactInfoItems } from "@/data/contact";

export default function ContactSection() {
  return (
    <section id="contact" className="section-pad" style={{ background: "var(--ocean-800)", position: "relative", overflow: "hidden" }}>
      <div className="orb orb-cyan" aria-hidden="true" style={{ top: "10%", left: "-10%", width: "500px", height: "500px", opacity: 0.06 }} />
      <div className="orb orb-teal" aria-hidden="true" style={{ bottom: "10%", right: "-10%", width: "400px", height: "400px", opacity: 0.05 }} />

      <div className="container-xl" style={{ position: "relative", zIndex: 2 }}>
        <SectionHeader
          label="Get In Touch"
          heading={<>Start Your <span className="gradient-text">Export Partnership</span></>}
          sub="Whether you're a distributor, retailer, or hospitality brand — contact us for quotes, samples, and catalog."
        />

        {/* rg-split-lg: 1fr 1.5fr → 1col tablet */}
        <div className="rg-split-lg">
          <ContactInfo items={contactInfoItems} />

          <div className="glass-card" style={{ padding: "2.5rem", borderRadius: "24px" }}>
            <h3 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>Send an Enquiry</h3>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "2rem" }}>Our export team will respond within 24 hours.</p>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
