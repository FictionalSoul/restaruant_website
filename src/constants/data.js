import images from './images';

const wines = [
  {
    title: 'Sula Rasa Shiraz: T',
    price: '₹5600',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '₹8900',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '₹15600',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '₹19800',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '₹25600',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '₹1600',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '₹5600',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '₹10900',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '₹12860',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '₹15760',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Best Restaurant of the year 2023',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Feeds the most people around the globe',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Outstanding services. Setting the mark for the other restaurant.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: '3rd best chef in MasterChef Australia.',
  },
];

export default { wines, cocktails, awards };
