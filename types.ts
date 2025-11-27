export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  tech: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  icon: string;
  verified: boolean;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}