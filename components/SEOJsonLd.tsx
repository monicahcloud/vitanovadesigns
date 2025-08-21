// components/SEOJsonLd.tsx (server component)
type JsonLdProps = { data: unknown };

function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // correct type: { __html: string }
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function SEOJsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "VitaNova Designs & Marketing LLC",
    url: "https://vitanovadesigns.cloud",
    logo: "https://vitanovadesigns.cloud/email/vitanova-logo.svg",
    telephone: "+1-770-703-7133",
    sameAs: [],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Design, AI Automations, Digital Marketing",
    provider: {
      "@type": "Organization",
      name: "VitaNova Designs & Marketing LLC",
    },
    areaServed: "US",
    url: "https://vitanovadesigns.cloud",
  };

  return (
    <>
      <JsonLd data={org} />
      <JsonLd data={service} />
    </>
  );
}
