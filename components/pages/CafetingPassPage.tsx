import React from 'react';
import { Hero } from '../Hero';
import { CustomerValue } from '../CustomerValue';
import { MerchantValue } from '../MerchantValue';
import { LeadForm } from '../LeadForm';

export const CafetingPassPage: React.FC = () => {
  return (
    <>
      <Hero />
      <CustomerValue />
      <MerchantValue />
      <LeadForm />
    </>
  );
};
