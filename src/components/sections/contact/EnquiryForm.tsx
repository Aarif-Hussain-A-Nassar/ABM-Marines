"use client";

import { useState, useEffect } from "react";
import { productOptions } from "@/data/products";

interface FormState {
  name:    string;
  company: string;
  country: string;
  email:   string;
  phone:   string;
  product: string;
  message: string;
}

const INITIAL: FormState = { name: "", company: "", country: "", email: "", phone: "", product: "", message: "" };

const Label = ({ htmlFor, text }: { htmlFor: string; text: string }) => (
  <label htmlFor={htmlFor} style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, color: "var(--cyan-400)", marginBottom: "0.4rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
    {text}
  </label>
);

export default function EnquiryForm() {
  const [form, setForm]     = useState<FormState>(INITIAL);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const prod = params.get("product");
      if (prod) {
        let matchedCategory = "";
        const lowerProd = prod.toLowerCase();
        if (lowerProd.includes("cuttlefish")) matchedCategory = "Cuttlefish";
        else if (lowerProd.includes("squid") || lowerProd.includes("calamari")) matchedCategory = "Squid";
        else if (lowerProd.includes("octopus")) matchedCategory = "Octopus";
        else if (lowerProd.includes("tiger")) matchedCategory = "Tiger Prawns";
        else if (lowerProd.includes("shrimp") || lowerProd.includes("prawn")) matchedCategory = "Vannamei Shrimp";

        setForm((prev) => ({
          ...prev,
          product: matchedCategory,
          message: `Dear ABM Marine team,\n\nI am interested in requesting a quote and product specifications for the following product:\n- ${prod}\n\nPlease provide availability, size details, and packing options.`,
        }));
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/mrejvvgb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("sent");
        setForm(INITIAL);
      } else {
        setStatus("idle");
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      setStatus("idle");
      console.error("Form submission error:", error);
      alert("Oops! There was a problem submitting your form. Please try again.");
    }
  };

  if (status === "sent") {
    return (
      <div style={{ textAlign: "center", padding: "3rem 2rem", background: "rgba(45,212,191,0.05)", border: "1px solid rgba(45,212,191,0.2)", borderRadius: "16px" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
        <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, color: "var(--teal-400)", marginBottom: "0.5rem" }}>Message Sent!</h4>
        <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Our export team will contact you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div className="rg-form-row">
        <div>
          <Label htmlFor="cf-name" text="Full Name *" />
          <input id="cf-name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="John Smith" className="form-input" />
        </div>
        <div>
          <Label htmlFor="cf-company" text="Company" />
          <input id="cf-company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Your Company Ltd." className="form-input" />
        </div>
      </div>

      <div className="rg-form-row">
        <div>
          <Label htmlFor="cf-email" text="Email *" />
          <input id="cf-email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="john@company.com" className="form-input" />
        </div>
        <div>
          <Label htmlFor="cf-country" text="Country" />
          <input id="cf-country" name="country" type="text" value={form.country} onChange={handleChange} placeholder="Netherlands" className="form-input" />
        </div>
      </div>

      <div>
        <Label htmlFor="cf-product" text="Product Interest" />
        <select id="cf-product" name="product" value={form.product} onChange={handleChange} className="form-input" style={{ cursor: "pointer" }}>
          <option value="">Select a product...</option>
          {productOptions.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>

      <div>
        <Label htmlFor="cf-message" text="Message *" />
        <textarea id="cf-message" name="message" required value={form.message} onChange={handleChange}
          placeholder="Please describe your requirements — product type, quantity, packaging needs, destination..."
          rows={4} className="form-input" style={{ resize: "vertical", minHeight: "120px" }} />
      </div>

      <button type="submit" className="btn-primary" disabled={status === "sending"}
        style={{ width: "100%", justifyContent: "center", opacity: status === "sending" ? 0.7 : 1 }}>
        {status === "sending" ? "Sending…" : (
          <>Send Enquiry <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></>
        )}
      </button>

      <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "center" }}>Your information will only be used to respond to your enquiry.</p>
    </form>
  );
}
