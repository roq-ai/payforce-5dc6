interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Finance Manager'],
  tenantName: 'Organization',
  applicationName: 'Payforce',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Choose preferred payment method',
    'View real-time foreign exchange rates',
    'Upload payment verification',
    'Receive email confirmations for transactions',
  ],
  ownerAbilities: [
    'Manage multiple payment options',
    'Integrate real-time foreign exchange rates',
    'Manage payment verification process',
    'Receive and confirm payment verification',
  ],
};
