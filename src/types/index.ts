export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  iconName: string;
  bannerImage: string;
  fullDesc: string;
  features: string[];
  applications: string[];
  capabilities: string[];
  specifications: { label: string; value: string }[];
  relatedServices?: string[];
  galleryImages?: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  image: string;
  galleryImages: string[];
  overview: string;
  scopeOfWork: string[];
  constructionDetails: {
    area: string;
    steelTonnage: string;
    timeline: string;
    locationType: string;
    buildingType: string;
  };
  features: string[];
}

export interface FacilityItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  specs: string[];
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}
