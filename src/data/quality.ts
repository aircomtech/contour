export const qualityProcesses = [
  {
    step: '01',
    title: 'Raw Material Verification & Inward Inspection',
    description:
      'Every steel plate, angle, pipe, and high-tensile bolt entering our plant undergoes rigorous chemical and mechanical property verification. Mill Test Certificates (MTC) are matched with plate heat numbers, verifying yield strength, tensile strength, and impact resistance before release into fabrication.',
    checklist: [
      'Visual inspection for surface laminations, pitting, or rust',
      'Ultrasonic testing (UT) for plates exceeding 25mm thickness',
      'Dimensional tolerance checks against IS 1852 standards',
      'Traceability heat-number stamping across all primary members',
    ],
  },
  {
    step: '02',
    title: 'Precision Cutting & Fit-Up Inspection',
    description:
      'CNC multi-torch oxy-fuel and plasma cutting systems are calibrated regularly to guarantee edge squareness, bevel angles, and hole tolerances. Fit-up inspections ensure proper root gap, alignment, and bevel geometry prior to welding.',
    checklist: [
      'Bevel angle and root face dimensional checks',
      'Web-to-flange alignment tolerance within ± 1.0 mm',
      'Cleanliness of joint surfaces free from oil, scale, and moisture',
      'Tack weld inspection and dimensional clearance verification',
    ],
  },
  {
    step: '03',
    title: 'Welding Inspection & Non-Destructive Testing (NDT)',
    description:
      'All primary welding is executed by qualified welders following approved Welding Procedure Specifications (WPS) and Procedure Qualification Records (PQR). Submerged arc and GMAW welds undergo multi-stage Non-Destructive Testing (NDT).',
    checklist: [
      '100% Visual Inspection (VT) of all weld seams for profile, undercut, and porosity',
      'Liquid Penetrant Testing (DPT) for root run and critical fillet joints',
      'Magnetic Particle Testing (MPT) for surface and near-surface discontinuities',
      'Ultrasonic Testing (UT) / Radiographic Testing (RT) for full-penetration butt welds',
    ],
  },
  {
    step: '04',
    title: 'Surface Preparation & Paint Coating Control',
    description:
      'Structural components are blast-cleaned in an automated shot-blasting booth to Swedish Standard Sa 2.5 profile, creating optimal surface anchor pattern for industrial primers and polyurethane finishes.',
    checklist: [
      'Surface profile roughness measurement using digital surface profile gauges',
      'Atmospheric condition checks: relative humidity (< 85%) and steel temperature > dew point + 3°C',
      'Wet Film Thickness (WFT) monitoring during spray application',
      'Dry Film Thickness (DFT) testing using calibrated magnetic thickness gauges',
    ],
  },
  {
    step: '05',
    title: 'Final Dimensional Check & Dispatch Verification',
    description:
      'Before dispatch from our Seriguda plant, fully assembled members are surveyed for camber, sweep, overall length, hole centers, and connection alignment. Member barcodes ensure error-free site erection tracking.',
    checklist: [
      'Overall member length tolerance within ± 2.0 mm',
      'Connection hole centers verified using precision laser measuring tools',
      'Final protective packing of machined mating surfaces and anchor bolts',
      'Dispatch inspection report and QA sign-off dossier dispatched with each consignment',
    ],
  },
];
