import type { NextPage } from 'next';
import styled from 'styled-components';
import { Colors } from '@theme/colors';
import Homepage from '@components/pages/homepage';

const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
  background-color: ${Colors.PRIMARY};
`;
const Main: NextPage = () => {
  return (
    <MainWrapper>
      <Homepage />
    </MainWrapper>
  );
};

export default Main;
