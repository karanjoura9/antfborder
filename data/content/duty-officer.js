window.ANT_CONTENT_PAGE = {
  title: 'Duty Officer',
  subtitle: 'Label-wise duty cards. Multiple members can be assigned under the same duty label.',
  type: 'duty-cards',
  groups: [
    {
      label: 'Name of Duty Officer',
      members: [
        { name: 'Karan', rank: 'SI', shift: '08:00 - 16:00' },
        { name: 'Naveen', rank: 'ASI', shift: '16:00 - 00:00' }
      ]
    },
    {
      label: 'Nigrani Duty',
      members: [
        { name: 'kk', rank: 'HC', shift: '08:00 - 16:00' },
        { name: 'k11', rank: 'Ct', shift: '16:00 - 00:00' }
      ]
    },
    {
      label: 'Production Warrant Duty',
      members: [
        { name: 'Amritpal Singh', rank: 'HC', shift: '16:00 - 00:00' },
        { name: 'Rajat Kumar', rank: 'Ct', shift: 'Standby' }
      ]
    },
    {
      label: 'Other Duty',
      members: [
        { name: 'Maninder Singh', rank: 'Ct', shift: 'As assigned' },
        { name: 'Gagandeep Singh', rank: 'ASI', shift: 'As assigned' }
      ]
    }
  ]
};
