import LegalPage from "../components/LegalPage";

const sections = [
  { id: "service-cancellation", title: "Service Cancellation", paragraphs: ["Subscribers may cancel service by contacting customer support. All dues must be cleared before disconnection."] },
  { id: "refund-eligibility", title: "Refund Eligibility", paragraphs: ["Refunds are applicable under the following circumstances:"] , items: ["Advance rental plans with remaining unused period after service termination", "Security deposit for company-owned equipment after return in good condition", "Wrongful billing or duplicate payments"] },
  { id: "non-refundable", title: "Non-Refundable Amounts", items: ["Installation charges", "Activation fees", "One-time payments for wiring, devices, or visiting charges", "Amounts already consumed as service usage"] },
  { id: "refund-timeline", title: "Refund Processing Timeline", items: ["Refunds, if eligible, will be processed within 15–30 working days.", "Refunds will be made to the original payment method or via bank transfer."] },
  { id: "equipment-return", title: "Equipment Return Policy", items: ["ONT/ONU, routers, or any rental device must be returned within 7 days of service termination.", "Damage or missing equipment will be charged as per the Company’s device cost policy."] },
  { id: "service-uptime", title: "No Guarantee of Service Uptime", paragraphs: ["Refunds are not provided for temporary downtime arising from:"] , bullets: ["Maintenance activity", "Fiber cuts", "Power outages", "Natural calamities", "Reasons beyond Company control"] },
  { id: "contact", title: "Contact", paragraphs: ["For questions about this policy, please contact the support team using the details below."] },
];

export default function RefundCancellationPolicy() {
  return <LegalPage title="Refund / Return / Cancellation Policy" breadcrumb="Refund / Return / Cancellation Policy" intro="This policy governs refunds, service cancellations, and returns for services provided by Tejays Dynamic Limited." sections={sections} />;
}
