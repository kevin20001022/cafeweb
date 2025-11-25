import React from 'react';

export enum UserRole {
  WORKER = 'worker',
  MERCHANT = 'merchant'
}

export interface LeadSchema {
  name: string;
  email: string;
  role: UserRole;
  notes?: string;
}

export interface FeaturePoint {
  title: string;
  description: string;
  icon: React.ReactNode;
}