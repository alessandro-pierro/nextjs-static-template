import { Colors } from '@theme/colors';
import { FunctionComponent } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${Colors.PRIMARY};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Text = styled.span`
  color: ${Colors.SECONDARY_TEXT};
  font-size: 40px;
  font-weight: bold;
  font-style: italic;
`;

type Props = {};
const Homepage: FunctionComponent<Props> = () => {
  return (
    <Wrapper>
      <Text>Hello World!</Text>
    </Wrapper>
  );
};

export default Homepage;
