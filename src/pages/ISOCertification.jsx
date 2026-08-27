import LegalPage from "../components/LegalPage";

const sections = [
  {
    id: "iso-certification",
    title: "ISO Certification",
    paragraphs: [
      "Tejays Dynamic Limited is committed to maintaining high standards of quality, reliability, information security and customer service across its operations.",
      "Our management systems and operational practices are designed to support consistent service delivery, continual improvement and compliance with applicable standards and regulatory requirements.",
    ],
  },
  {
    id: "our-commitment",
    title: "Our Commitment",
    paragraphs: [
      "We continuously work towards improving our processes, infrastructure and customer experience while maintaining appropriate quality and security controls.",
    ],
  },
  {
    id: "quality-information-security",
    title: "Quality & Information Security",
    paragraphs: [
      "Our approach focuses on reliable network operations, protection of business and customer information, controlled processes and continual improvement.",
    ],
  },
  {
    id: "certification-details",
    title: "Certification Details",
    paragraphs: [
      "Official certification information will be added after the certificate details are provided.",
    ],
    details: [
      { label: "Certification Standard", value: "To be updated" },
      { label: "Certificate Number", value: "To be updated" },
      { label: "Certification Scope", value: "To be updated" },
      { label: "Issued By", value: "To be updated" },
      { label: "Issue Date", value: "To be updated" },
      { label: "Valid Until", value: "To be updated" },
    ],
  },
  {
    id: "iso-certificate",
    title: "ISO Certificate",
    paragraphs: [
      "The official certificate document will be published here once the approved information is available.",
    ],
    certificate: true,
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "For queries regarding our ISO certification or compliance practices, please contact us.",
    ],
  },
];

export default function ISOCertification() {
  return (
    <LegalPage
      title="ISO Certification"
      breadcrumb="ISO Certification"
      subtitle="Our commitment to quality, reliability, information security and continuous improvement."
      intro="Tejays Dynamic Limited is committed to maintaining high standards of quality, reliability, information security and customer service across its operations."
      sections={sections}
    />
  );
}
