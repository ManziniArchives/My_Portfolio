export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  verificationLink: string;
  category: 'security' | 'development' | 'data' | 'cloud';
}