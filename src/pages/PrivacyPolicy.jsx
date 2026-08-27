import LegalPage from "../components/LegalPage";

const sections = [
  { id: "information-we-collect", title: "Information We Collect", paragraphs: ["Personal Information: Name, address, mobile number, email, and KYC documents as mandated by DoT/Telecom Licensing.", "Technical Information: IP address, MAC address, device information, and usage logs as required by Government regulations.", "Payment Information: Transaction details, but not full card or banking credentials."] },
  { id: "why-we-collect-data", title: "Why We Collect Data", items: ["To activate and manage broadband services", "To comply with TRAI/DoT regulations", "For billing, customer support, and service improvement", "To prevent fraud, abuse, and unauthorized usage"] },
  { id: "data-storage-security", title: "Data Storage & Security", items: ["Data is stored securely using encryption and access control.", "Logs are retained as per DoT regulatory guidelines.", "Only authorized personnel can access customer information."] },
  { id: "sharing-information", title: "Sharing of Information", paragraphs: ["We may share information only with Government agencies as required by law, payment gateways for processing transactions, and internal teams for service provision and troubleshooting.", "We do NOT sell or trade customer data."] },
  { id: "cookies-tracking", title: "Cookies & Tracking", paragraphs: ["We may use cookies for website performance and user experience. You may choose to disable cookies in your browser."] },
  { id: "data-rights", title: "Data Rights", bullets: ["Request correction of incorrect data", "Request deletion of data after service termination, subject to legal retention requirements"] },
  { id: "third-party-links", title: "Third-Party Links", paragraphs: ["Our website may link to external sites. We are not responsible for their privacy practices."] },
  { id: "contact", title: "Contact", paragraphs: ["For questions about this Privacy Policy, please contact the support team using the details below."] },
];

export default function PrivacyPolicy() {
  return <LegalPage title="Privacy Policy" breadcrumb="Privacy Policy" intro="This Privacy Policy describes how Tejays Dynamic Limited collects, uses, stores, and protects customer information in compliance with Indian data protection requirements." sections={sections} />;
}
