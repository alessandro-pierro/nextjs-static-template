import { default as NextHead } from 'next/head';
import { FunctionComponent } from 'react';

const appTitle = 'Alessandro Pierro';

const Head: FunctionComponent = () => {
  return (
    <NextHead>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{appTitle}</title>
    </NextHead>
  );
};

export default Head;
