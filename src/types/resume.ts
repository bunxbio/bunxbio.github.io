export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
  phone?: string;
  location?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  employmentType?: string;
  description: string;
  skills: string[];
  highlights?: string[];
}

export interface Skill {
  category: string;
  items: string[];
  proficiency?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  fieldOfStudy: string;
  graduationDate: string;
  gpa?: string;
  details?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  link?: string;
  github?: string;
  skills: string[];
  image?: string;
  highlights?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string | null;
  credentialId?: string | null;
  credentialUrl?: string | null;
  skills?: string[];
}

export interface About {
  fullName: string;
  title: string;
  summary: string;
  profileImage?: string;
}

export interface Resume {
  about: About;
  contact: ContactInfo;
  experience: Experience[];
  skills: Skill[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
}

export type SectionType = 'about' | 'experience' | 'skills' | 'education' | 'projects' | 'certifications';
