import LegalPage from "../components/LegalPage";

const sections = [
  { id: "service-provision", title: "Service Provision", items: ["The Company provides broadband/internet services subject to availability of network infrastructure and technical feasibility.", "Service activation may require installation of equipment at the Subscriber’s premises.", "Service speed and performance may vary due to network conditions, device limitations, and external factors."] },
  { id: "plans-billing-payments", title: "Plans, Billing & Payments", items: ["All tariff plans are published on the Company’s website as per TRAI regulations.", "Charges are billed monthly/quarterly/annually based on the selected plan.", "Payments must be made before the due date to avoid service interruption.", "Taxes and statutory levies applicable as per Government of India regulations will be charged additionally."] },
  { id: "fair-usage", title: "Fair Usage & Acceptable Use", paragraphs: ["Subscribers must not engage in activities that violate Indian laws, including illegal content access or distribution, spamming, hacking, network abuse, or hosting prohibited content.", "Use of the Service for anti-national activities or cybercrime is strictly prohibited.", "The Company may apply Fair Usage Policy (FUP) to maintain network integrity."] },
  { id: "subscriber-responsibilities", title: "Subscriber Responsibilities", items: ["Keep login credentials secure and confidential.", "Prevent unauthorized access to the network from within your premises.", "Allow Company personnel access for installation, maintenance, or troubleshooting when required."] },
  { id: "equipment", title: "Equipment", items: ["Routers, ONU/ONT, or CPE devices may be owned by the Company or provided on rental.", "Damage due to customer negligence will be charged to the Subscriber."] },
  { id: "service-suspension", title: "Service Suspension & Termination", paragraphs: ["The Company reserves the right to suspend or terminate services in case of:"] , items: ["Non-payment of dues", "Misuse or illegal use", "Network abuse or violation of AUP", "Government or regulatory orders"] },
  { id: "refunds", title: "Refunds", paragraphs: ["Refunds are governed by the Refund/Cancellation Policy stated below."] },
  { id: "liability-indemnity", title: "Liability & Indemnity", items: ["The Company is not liable for service interruptions caused by factors beyond its control (natural disasters, power failures, fiber cuts, etc.).", "Subscriber agrees to indemnify the Company against any misuse of the Service."] },
  { id: "governing-law", title: "Governing Law", paragraphs: ["These Terms are governed by the laws of India. Any disputes fall under the jurisdiction of courts located in Jaipur, Rajasthan."] },
  { id: "contact", title: "Contact", paragraphs: ["For questions about these Terms, please contact the support team using the details below."] },
];

export default function TermsConditions() {
  return <LegalPage title="Terms & Conditions (T&C)" breadcrumb="Terms & Conditions" intro="These Terms & Conditions (“Terms”) govern the use of internet and related services (“Services”) provided by Tejays Dynamic Limited (“Company”, “We”, “Us”). By subscribing to or using our Services, the customer (“Subscriber”, “You”) agrees to these Terms." sections={sections} />;
}
