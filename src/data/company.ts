import { CoreValue } from '@/types';

export const companyData = {
  name: 'Contour Steel Engineering India (P) Ltd.',
  shortName: 'Contour Steel Engineering',
  tagline: 'BUILT FOR A STRONGER TOMORROW',
  experienceYears: '19+',
  structuresDelivered: '1,100+',
  totalSqFt: '30 Million',
  phones: [
    { display: '+91 91009 96655', raw: '+919100996655' },
    { display: '+91 93268 63516', raw: '+919326863516' },
  ],
  email: 'hydsales@contoursteel.co.in',
  whatsapp: {
    display: '+91 91009 96655',
    link: 'https://wa.me/919100996655?text=Hello%20Contour%20Steel%20Engineering%2C%20I%20am%20interested%20in%20your%20PEB%20and%20structural%20steel%20services.',
  },
  offices: [
    {
      name: 'Hyderabad (Head Office)',
      address: 'H No: 9-4-77/A/249, 3rd Floor, Rauf Plaza, Toli Chowki – 500008',
      phone: '+91 91009 96655',
      email: 'hydsales@contoursteel.co.in',
      mapQuery: 'Rauf+Plaza+Toli+Chowki+Hyderabad',
      mapUrl: 'https://maps.google.com/?q=Rauf+Plaza+Toli+Chowki+Hyderabad+500008',
    },
    {
      name: 'Pune (Branch Office)',
      address: '#209, 2nd Floor, Ajinkyatara Building, Sinhagad Road – 411030',
      phone: '+91 93268 63516',
      email: 'punesales@contoursteel.co.in',
      mapQuery: 'Ajinkyatara+Building+Sinhagad+Road+Pune',
      mapUrl: 'https://maps.google.com/?q=Ajinkyatara+Building+Sinhagad+Road+Pune+411030',
    },
    {
      name: 'Seriguda (Plant)',
      address: 'Contour Steel Engineering (Plant), Seriguda – 509202',
      phone: '+91 91009 96655',
      email: 'plant@contoursteel.co.in',
      mapQuery: 'Seriguda+Telangana',
      mapUrl: 'https://maps.google.com/?q=Seriguda+Telangana+509202',
    },
  ],
  socials: {
    linkedin: 'https://www.linkedin.com/company/contour-steel-engineering',
    youtube: 'https://www.youtube.com/@contoursteelengineering',
    x: 'https://x.com/contoursteel',
    facebook: 'https://www.facebook.com/contoursteel',
  },
};

export const coreValuesData: CoreValue[] = [
  {
    title: 'Quality and Excellence',
    description: 'Relentless adherence to stringent quality control, dimensional accuracy, and flawless fabrication finishes.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Integrity and Transparency',
    description: 'Honest partnerships, transparent commercial dealings, and genuine material traceability from mill to site.',
    icon: 'Lock',
  },
  {
    title: 'Engineering Innovation',
    description: 'Leveraging cutting-edge 3D BIM, automated CNC machinery, and value engineering for optimized structures.',
    icon: 'Cpu',
  },
  {
    title: 'Sustainability',
    description: 'Promoting 100% recyclable structural steel, energy-efficient building envelopes, and eco-friendly manufacturing.',
    icon: 'Leaf',
  },
  {
    title: 'Customer Satisfaction',
    description: 'Client-centric project execution, proactive communication, and customized solutions aligned with client goals.',
    icon: 'Users',
  },
  {
    title: 'Timely Project Delivery',
    description: 'Disciplined project scheduling, synchronized fabrication, and rapid on-site erection ensuring on-time handover.',
    icon: 'Clock',
  },
  {
    title: 'Safety and Reliability',
    description: 'Zero Harm safety culture on every construction site, rigorous risk assessment, and certified rigging teams.',
    icon: 'HardHat',
  },
  {
    title: 'Continuous Improvement',
    description: 'Constantly refining processes, upgrading plant machinery, and investing in human skill development.',
    icon: 'TrendingUp',
  },
];

export const whyChooseData = [
  {
    title: 'Uncompromising Quality',
    description: 'Strict adherence to IS & International codes with 100% material traceability and certified weld inspections.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Engineering Excellence',
    description: 'Advanced 3D Tekla BIM modeling, clash-free detailing, and structural optimization for economical strength.',
    icon: 'Cog',
  },
  {
    title: 'On-Time Delivery',
    description: 'Synchronized in-house plant fabrication and disciplined logistics ensuring guaranteed milestone handover.',
    icon: 'Clock',
  },
  {
    title: 'Sustainable Solutions',
    description: 'Eco-conscious green building solutions with recyclable steel, daylight harvesting, and energy-saving envelopes.',
    icon: 'Leaf',
  },
  {
    title: 'Experienced Team',
    description: 'Over 19 years of dedicated domain leadership with seasoned structural engineers and certified site crews.',
    icon: 'Users',
  },
];
