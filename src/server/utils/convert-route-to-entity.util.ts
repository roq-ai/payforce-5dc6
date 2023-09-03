const mapping: Record<string, string> = {
  currencies: 'currency',
  organizations: 'organization',
  'payment-options': 'payment_option',
  transactions: 'transaction',
  users: 'user',
  verifications: 'verification',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
