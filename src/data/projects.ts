import { ProjectItem } from '@/types';

export const projectsData: ProjectItem[] = [
  {
    id: 'peb-industrial-structure',
    slug: 'heavy-engineering-peb-facility',
    title: 'Heavy Engineering PEB Facility',
    category: 'Pre-Engineered Buildings',
    shortDesc: 'A large-span high-bay manufacturing facility with integrated 30T crane beams.',
    image: '/images/projects/project-peb-structure.jpg',
    galleryImages: [
      '/images/projects/project-peb-structure.jpg',
      '/images/hero/hero-arch-peb.jpg',
      '/images/facilities/facility-assembly.jpg',
    ],
    overview:
      'This landmark Pre-Engineered Building structure was engineered and erected to accommodate heavy industrial equipment manufacturing. Featuring clear unobstructed spans of 42 meters and clear eave heights of 14 meters, the building integrates multiple crane runway girders designed to handle continuous 30-ton material handling cycles.',
    scopeOfWork: [
      'Comprehensive structural 3D BIM modeling and connection engineering',
      'In-house automated SAW fabrication of primary tapered built-up frames',
      'Cold-formed galvanized Z & C purlins for roof and wall cladding support',
      'Supply and erection of 0.50mm high-durability Galvalume insulated roof panels',
      'Full crane girder alignment and on-site load testing verification',
    ],
    constructionDetails: {
      area: '185,000 Sq. Ft.',
      steelTonnage: '1,450 MT Structural Steel',
      timeline: '6.5 Months Handover',
      locationType: 'Industrial Corridor [Location Placeholder]',
      buildingType: 'Clear Span PEB Industrial Workshop',
    },
    features: [
      '42-meter clear internal span without center columns',
      'Dual 30T EOT crane runway support system',
      'Turbo ventilators and continuous ridge ventilation louvers',
      'Polycarbonate skylights providing 8% natural roof daylighting',
    ],
  },
  {
    id: 'industrial-warehouse',
    slug: 'modern-logistics-distribution-center',
    title: 'Modern Logistics & Distribution Center',
    category: 'Industrial Warehouses',
    shortDesc: 'Multi-bay high-throughput logistics warehouse with state-of-the-art dock levelers.',
    image: '/images/projects/project-industrial-warehouse.jpg',
    galleryImages: [
      '/images/projects/project-industrial-warehouse.jpg',
      '/images/about/about-primary.jpg',
      '/images/projects/project-commercial-steel.jpg',
    ],
    overview:
      'Engineered for maximum storage volume and high-speed freight turnaround, this modern distribution center features wide column grids of 24m x 12m for optimized forklift circulation. The building incorporates airtight thermal roof insulation and high-reflectivity solar roof coating to reduce operational cooling energy.',
    scopeOfWork: [
      'Turnkey structural engineering, fabrication, and erection',
      'FM Global compliant roof decking system with FM-approved insulation',
      'Engineered mezzanine floor for administrative logistics office',
      'Integrated docking canopies and automated sectional door frames',
      'Laser-guided precision anchor bolt layout execution',
    ],
    constructionDetails: {
      area: '250,000 Sq. Ft.',
      steelTonnage: '1,820 MT Structural Steel',
      timeline: '7 Months Handover',
      locationType: 'Logistics Park [Location Placeholder]',
      buildingType: 'Multi-Bay High-Bay Warehouse',
    },
    features: [
      'FM-approved insulated sandwich panel roofing system',
      'Wide 24m modular bay spacing optimized for VNA racking',
      'Super-flat FM2 category industrial flooring integration',
      'Heavy external weather canopies over 16 loading docks',
    ],
  },
  {
    id: 'process-plant',
    slug: 'refinery-process-plant-steel-framework',
    title: 'Refinery Process Plant Steel Framework',
    category: 'Process Plants',
    shortDesc: 'Complex multi-level industrial steel support structures and pipe racks.',
    image: '/images/projects/project-process-plant.jpg',
    galleryImages: [
      '/images/projects/project-process-plant.jpg',
      '/images/facilities/facility-welding.jpg',
      '/images/facilities/facility-fabrication.jpg',
    ],
    overview:
      'Engineered to meet stringent petrochemical safety and dynamic vibration standards, this specialized structure supports process columns, heavy heat exchangers, and overhead pipe galleries. Fabricated using high-strength micro-alloyed steel with 100% radiographic weld testing, the structure is protected with multi-coat marine grade epoxy systems.',
    scopeOfWork: [
      'Detailed finite-element analysis under dynamic operating and wind vortex shedding loads',
      'Heavy-plate fabrication up to 65mm thickness with full penetration SAW welds',
      '100% NDT inspection including Ultrasonic Testing (UT) and Radiography (RT)',
      'Grit blasting to Sa 2.5 standard followed by 3-coat heavy duty protective coating',
      'Precision site erection within active chemical manufacturing plant perimeter',
    ],
    constructionDetails: {
      area: '45,000 Sq. Ft. Multi-Tier Footprint',
      steelTonnage: '980 MT Heavy Structural Steel',
      timeline: '5 Months Handover',
      locationType: 'Process Industry Zone [Location Placeholder]',
      buildingType: 'Heavy Industrial Steel Framework & Pipe Racks',
    },
    features: [
      'High seismic and wind acceleration resistance design',
      'Galvanized grating and industrial stair towers with safety cages',
      'Fire-rated intumescent protective coatings on critical members',
      'Modular pre-assembly for accelerated shutdown window installation',
    ],
  },
  {
    id: 'commercial-steel-complex',
    slug: 'multi-storey-commercial-steel-complex',
    title: 'Multi-Storey Commercial Steel Complex',
    category: 'Commercial Steel',
    shortDesc: 'Contemporary multi-tier structural steel facility featuring composite deck floors.',
    image: '/images/projects/project-commercial-steel.jpg',
    galleryImages: [
      '/images/projects/project-commercial-steel.jpg',
      '/images/projects/project-industrial-warehouse.jpg',
      '/images/about/about-primary.jpg',
    ],
    overview:
      'Combining architectural elegance with the structural efficiency of steel, this multi-tier commercial building showcases slender built-up steel columns and composite metal decking slabs. The design provides extensive column-free open interior floor plans, maximizing usable floor space while drastically shortening construction duration.',
    scopeOfWork: [
      '3D Architectural and structural engineering coordination',
      'Precision CNC fabrication of built-up box columns and castellated beams',
      'Installation of composite metal decking with shear connector studs',
      'Integrated fire-resistant coating and structural steel surface treatment',
      'Fast-track crane-assisted erection in dense urban setting',
    ],
    constructionDetails: {
      area: '120,000 Sq. Ft. (G+4 Floors)',
      steelTonnage: '850 MT Structural Steel',
      timeline: '5.5 Months Handover',
      locationType: 'Commercial Center [Location Placeholder]',
      buildingType: 'Multi-Storey Composite Steel Building',
    },
    features: [
      'Column-free floor spans delivering flexible tenant layouts',
      'Reduced foundation load compared to heavy concrete alternatives',
      'Integrated service chases through castellated steel beams',
      'Rapid construction: 40% time savings vs traditional RCC frame',
    ],
  },
];
