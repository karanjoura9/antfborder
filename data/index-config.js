(function () {
  window.ANT_INDEX_CONFIG = {
    brand: {
      title: 'Anti Narcotics Task Force',
      subtitle: 'Border Range',
      leftLogo: 'logo.png',
      leftLogoAlt: 'ANTF logo',
      rightLogo: 'https://punjabpolice.gov.in/media/images/Logo_of_Punjab_Police_India.original.png',
      rightLogoAlt: 'Punjab Police logo'
    },
    quickUpdates: [
      'Pending litigation review before next hearing',
      'NDPS case files to be updated daily',
      'Standing orders to be circulated to all units',
      'Duty officer status report by end of shift'
    ],
    ticker: [
      'EMPLOYEE OF THE MONTH: INSPECTOR MANDEEP SINGH',
      'UNIT: ANTF HQ OPERATIONS',
      'PERFORMANCE: 17 MAJOR FOLLOW-UP ACTIONS COMPLETED'
    ],
    menu: [
      {
        type: 'link',
        label: 'HOME',
        href: 'pages/home.html',
        crumb: 'Home'
      },
      {
        type: 'group',
        label: 'H.R',
        items: [
          { label: '1) All officers of HQ', href: 'pages/content.html?page=hr-officers', crumb: 'H.R / All Officers of HQ' },
          { label: '2) All officers at ranges', href: 'pages/content.html?page=hr-aig-ranges', crumb: 'H.R / All Officers at Ranges' },
          { label: '3) Staff of border range', href: 'pages/content.html?page=hr-border-range-staff', crumb: 'H.R / Staff of Border Range' }
        ]
      },
      {
        type: 'group',
        label: 'ORDERS',
        items: [
          { label: '1) Standing Orders', href: 'pages/content.html?page=orders-standing', crumb: 'Orders / Standing Orders' },
          { label: '2) Circular Orders', href: 'pages/content.html?page=orders-circular', crumb: 'Orders / Circular Orders' }
        ]
      },
      {
        type: 'group',
        label: 'LITIGATION',
        items: [
          { label: '1) High Court', href: 'pages/content.html?page=litigation-high-court', crumb: 'Litigation / High Court' },
          { label: '2) Supreme Court', href: 'pages/content.html?page=litigation-supreme-court', crumb: 'Litigation / Supreme Court' }
        ]
      },
      { type: 'link', label: 'UNDER INVESTIGATION', href: 'pages/content.html?page=under-investigation', crumb: 'Under Investigation Cases' },
      { type: 'link', label: 'UNDER TRIAL CASES', href: 'pages/content.html?page=under-trial', crumb: 'Under Trial Cases' },
      { type: 'link', label: 'PENDING ARREST', href: 'pages/content.html?page=pending-arrests', crumb: 'Pending Arrests' },
      { type: 'link', label: 'TARGETS', href: 'pages/content.html?page=targets-month', crumb: 'Targets of the Month' },
      {
        type: 'group',
        label: 'LANDMARK JUDGEMENTS',
        items: [
          { label: '1) Landmark judgements regarding NDPS Act', href: 'pages/content.html?page=landmark-judgements', crumb: 'Landmark Judgements / NDPS Act' }
        ]
      },
      { type: 'link', label: 'NDPS ACT', href: 'pages/content.html?page=ndps-act', crumb: 'NDPS Act' },
      { type: 'link', label: 'ALL MAJOR ACTS', href: 'pages/content.html?page=criminal-major-acts', crumb: 'All Major Acts' },
      { type: 'link', label: 'DOCUMENTARY MOVIES', href: 'pages/content.html?page=guide-movies', crumb: 'Documentary Movies' },
      { type: 'link', label: 'DUTY OFFICER', href: 'pages/content.html?page=duty-officer', crumb: 'Duty Officer' }
    ]
  };
})();
