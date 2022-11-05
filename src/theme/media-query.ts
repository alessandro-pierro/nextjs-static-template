type Size = {
  min: number;
  max: number;
};
export const MediaQuerySize = {
  MOBILE: {
    min: 601,
    max: 768,
  },
  TABLET: {
    min: 769,
    max: 992,
  },
  DESKTOP: {
    min: 993,
    max: 1200,
  },
};

export const MediaQuery = {
  orientation: {
    is: (orientation: 'landscape' | 'portrait') => {
      return `@media (orientation: ${orientation})`;
    },
    landscape: () => MediaQuery.orientation.is('landscape'),
    portrait: () => MediaQuery.orientation.is('portrait'),
  },
  smallerThan: (size: Size) => {
    return `@media only screen and (max-width: ${size.min}px)`;
  },
  biggerThan: (size: Size) => {
    return `@media only screen and (min-width: ${size.max}px)`;
  },
  equalsOrSmallerThan: (size: Size) => {
    return `@media only screen and (max-width: ${size.max}px)`;
  },
  equalsOrBiggerThan: (size: Size) => {
    return `@media only screen and (min-width: ${size.min}px)`;
  },
  between: (smallSize: Size, bigSize: Size) => {
    return `@media only screen and (min-width: ${smallSize.min}px) and (max-width: ${bigSize.max}px)`;
  },
  is: (size: Size) => {
    return `@media only screen and (min-width: ${size.min}px) and (max-width: ${size.max}px)`;
  },
};
