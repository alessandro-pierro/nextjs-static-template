import { FunctionComponent } from 'react';
import Body from './body';
import Head from './head';

type Props = {
  children?: any;
};

const HTML: FunctionComponent<Props> = ({ children }) => {
  return (
    <>
      <Head />
      <Body>{children}</Body>
    </>
  );
};

export default HTML;
