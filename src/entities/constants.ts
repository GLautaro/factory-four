const baseUrl = "https://api.factoryfour.com/API_NAME/health/status";
const services = [
  "accounts",
  "assets",
  "customers",
  "datapoints",
  "devices",
  "documents",
  "forms",
  "invites",
  "media",
  "messages",
  "namespaces",
  "orders",
  "patients",
  "relationships",
  "rules",
  "templates",
  "users",
  "workflows",
];

export const factoryFourUrls = services.map((service) => baseUrl.replace("API_NAME", service));