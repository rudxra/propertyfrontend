import { Cashfree } from 'cashfree-pg';

export const setupCashfree = () => {
  Cashfree.XClientId = process.env.NEXT_PUBLIC_CASHFREE_API_ID;
  Cashfree.XClientSecret = process.env.NEXT_PUBLIC_CASHFREE_KEY;
  Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;
};