import { FacilityItem } from '@/types';

export const facilitiesData: FacilityItem[] = [
  {
    id: 'cnc-cutting',
    title: 'Multi-Torch CNC Profile Cutting',
    tagline: 'High Precision Oxy-Fuel & HD Plasma Cutting Systems',
    description:
      'Our Seriguda manufacturing plant is powered by high-precision CNC multi-torch profile cutting machines capable of handling plates up to 80mm thickness. Automated nested cutting algorithms minimize steel scrap and ensure edge tolerances within ± 1.0 mm for seamless fit-up during subsequent fabrication.',
    image: '/images/facilities/facility-cnc.jpg',
    specs: [
      'Multi-torch simultaneous cutting for high volume web and flange plates',
      'High-definition plasma cutting for clean dross-free bevel edges',
      'Direct CAD/CAM integration with Tekla DSTV cutting files',
      'Plate thickness capacity from 4mm up to 80mm',
    ],
  },
  {
    id: 'h-beam-assembly',
    title: 'Automated H-Beam Assembly & Alignment',
    tagline: 'Heavy-Duty Hydraulic Fit-Up & Tack Welding Line',
    description:
      'We operate dedicated automated H-beam assembly lines designed to precisely clamp and align web plates with flange plates. The continuous hydraulic clamping mechanism ensures uniform pressure throughout the beam length, eliminating camber and sweep deviations before primary submerged arc welding.',
    image: '/images/facilities/facility-fabrication.jpg',
    specs: [
      'Automatic centering and mechanical clamping of webs up to 2,000mm height',
      'Continuous hydraulic tack welding station',
      'Capable of producing both parallel and tapered built-up structural sections',
      'Integrated beam conveyors minimizing overhead crane handling time',
    ],
  },
  {
    id: 'saw-welding',
    title: 'Submerged Arc Welding (SAW) Gantries',
    tagline: 'High-Penetration Continuous Automated Welding Systems',
    description:
      'Equipped with dual-wire submerged arc welding gantries, our facility welds both sides of built-up beams simultaneously. The submerged flux protection ensures deep weld penetration, zero spatter, and consistent metallurgical integrity meeting AWS D1.1 and IS 9595 specifications.',
    image: '/images/facilities/facility-welding.jpg',
    specs: [
      'Simultaneous dual-side submerged arc welding for balanced thermal input',
      'Deep penetration fillet welds with certified radiographic quality',
      'Automated flux recovery and recycling system ensuring dry, clean flux',
      'Welder and operator qualifications certified under ASME & AWS standards',
    ],
  },
  {
    id: 'finished-assembly',
    title: 'Structural Steel Assembly & Finishing',
    tagline: 'Precision Straightening, Shot Blasting & Protective Coating',
    description:
      'Post-welding, structural members pass through hydraulic flange straightening machines to eliminate thermal distortions. Components then undergo surface preparation to Sa 2.5 standards followed by high-build airless paint application with strict dry film thickness (DFT) verification before dispatch.',
    image: '/images/facilities/facility-assembly.jpg',
    specs: [
      'Hydraulic beam flange straighteners for precise flatness and alignment',
      'Enclosed shot-blasting booth achieving Swedish Sa 2.5 profile standards',
      'Airless protective spray coating with electronic DFT gauge inspection',
      'Barcoded member tagging ensuring 100% dispatch and site erection traceability',
    ],
  },
];
