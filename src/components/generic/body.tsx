import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Main = styled.body`
  position: relative;
  width: var(--win-width);
  height: var(--win-height);
  display: block;

  overflow: hidden;
`;

type Props = {
  children?: any;
};

const Body: FunctionComponent<Props> = ({ children }) => {
  return <Main>{children}</Main>;
};

export default Body;
