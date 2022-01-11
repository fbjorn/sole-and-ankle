/**
 * In a real app, this data would likely live in a database,
 * and be fetched from an API, either at runtime or at
 * compile-time.
 *
 * Keep in mind, this workshop is focused on CSS. In order
 * to make it easy to focus on the styling, we're cutting
 * some corners when it comes to our data management, and
 * our JavaScript in general. Please don't try to glean
 * any best-practices from stuff like this data file!
 */

function getImageSrc(name) {
  const prefix = process.env.ENV === "development" ? "/" : "/sole-and-ankle"
  return `${prefix}/assets/${name}`
}

const SHOES = [
  {
    slug: 'tech-challenge',
    name: 'NikeCourt Tech Challenge 20',
    imageSrc: getImageSrc('tech-challenge.jpg'),
    price: 16500,
    salePrice: null,
    // 1 hour ago! 🔥
    releaseDate: Date.now() - 1000 * 60 * 60 * 1,
    numOfColors: 2,
  },
  {
    slug: 'metcon-5',
    name: 'Nike Metcon 5 AMP',
    imageSrc: getImageSrc('metcon-5.jpg'),
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 2,
    numOfColors: 1,
  },
  {
    slug: 'phantom',
    name: 'Nike Phantom Vision',
    imageSrc: getImageSrc('phantom.jpg'),
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 4,
    numOfColors: 4,
  },
  {
    slug: 'pegasus',
    name: 'Nike Air Zoom Pegasus',
    imageSrc: getImageSrc('pegasus.jpg'),
    price: 16500,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 16,
    numOfColors: 1,
  },
  {
    slug: 'joyride',
    name: 'Nike Joyride Dual Run',
    imageSrc: getImageSrc('joyride.jpg'),
    price: 17000,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 40,
    numOfColors: 2,
  },
  {
    slug: 'legend-academy',
    name: 'Nike Tiempo Legend 8',
    imageSrc: getImageSrc('legend-academy.jpg'),
    price: 16500,
    salePrice: 12500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 50,
    numOfColors: 8,
  },
  {
    slug: 'react-infinity',
    name: 'Nike React Infinity Pro',
    imageSrc: getImageSrc('react-infinity.jpg'),
    price: 16000,
    salePrice: 14500,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 75,
    numOfColors: 1,
  },
  {
    slug: 'phantom-flyknit',
    name: 'Nike React Phantom Run Flyknit 2',
    imageSrc: getImageSrc('phantom-flyknit.jpg'),
    price: 18500,
    salePrice: 16000,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 100,
    numOfColors: 4,
  },
  {
    slug: 'lebron',
    name: 'LeBron 17',
    imageSrc: getImageSrc('lebron.jpg'),
    price: 26000,
    salePrice: null,
    releaseDate: Date.now() - 1000 * 60 * 60 * 24 * 120,
    numOfColors: 1,
  },
];

export default SHOES;
