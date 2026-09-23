/** Organization + WebSite JSON-LD. Event schema is deliberately absent until the 2026 dates are confirmed. */
const SITE = "https://festival.afrifoodnetwork.com";
export default function StructuredData() {
  const data = [
    { "@context": "https://schema.org", "@type": "Organization", name: "African Food & Drinks Festival", alternateName: "AFDF", url: SITE,
      logo: `${SITE}/img/AFN-Logo1.png`, email: "festival@afrifoodnetwork.com",
      parentOrganization: { "@type": "Organization", name: "African Food Network", url: "https://afrifoodnetwork.com" },
      address: { "@type": "PostalAddress", streetAddress: "Owena House, 76 Ralph Shodeinde Street, C.B.D", addressLocality: "Abuja", addressCountry: "NG" },
      sameAs: ["https://www.facebook.com/afrifoodfestival", "https://www.instagram.com/afrifoodfestival/", "https://www.tiktok.com/@afrifoodfestival/", "https://www.x.com/afrifoodfest", "https://www.youtube.com/@afrifoodnet"] },
    { "@context": "https://schema.org", "@type": "WebSite", name: "African Food & Drinks Festival", url: SITE },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
