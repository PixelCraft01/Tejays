export const ispServices = [
  { name: "Broadband", slug: "broadband" },
  { name: "Bulk Bandwidth", slug: "bulk-bandwidth" },
  { name: "Point To Point Lease Line", slug: "point-to-point-lease-line" },
  { name: "Managed Services", slug: "managed-services" },
  { name: "Peering", slug: "peering" },
  { name: "IPTV", slug: "iptv" },
  { name: "OTT", slug: "ott" },
];

export const corporateServices = [
  { name: "Internet Lease Line", slug: "internet-lease-line" },
  { name: "Corporate Broadband", slug: "corporate-broadband" },
  { name: "MPLS-VPN", slug: "mpls-vpn" },
  { name: "Point-To-Point Lease Line", slug: "point-to-point-lease-line-for-corporate" },
  { name: "Managed Services", slug: "managed-services-for-corporate" },
  { name: "Fiber On Lease", slug: "fiber-on-lease" },
  { name: "Security and Surveillance", slug: "security-and-surveillance" },
  { name: "WiFi Solutions", slug: "wifi-solutions" },
  { name: "Networking Solutions", slug: "networking-solutions" },
];

const navigationRoutes = [
  "/",
  "/about-us",
  ...ispServices.map(({ slug }) => `/${slug}`),
  ...corporateServices.map(({ slug }) => `/${slug}`),
  "/contact-us",
  "/quick-pay",
];

export const publicRoutes = [...new Set(navigationRoutes)];
