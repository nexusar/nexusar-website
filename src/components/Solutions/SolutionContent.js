import { Box } from '@mui/system';
import { Container } from '@mui/material';
import CardOne from '../../components/Solutions/CardOne/CardOne';
import CardTwo from '../../components/Solutions/CardTwo/CardTwo';
import CardThree from '../../components/Solutions/CardThree/CardThree';
import CardFour from '../../components/Solutions/CardFour/CardFour';
import CardFive from '../../components/Solutions/CardFive/CardFive';
import SolutionHeader from '../../components/Solutions/SolutionHeader/SolutionHeader';
import SolutionDesc from '../../components/Solutions/SolutionDesc/SolutionDesc';

import allSolutionsData from '../../data/solutions.json';

const SolutionContent = (props) => {
  const { solutionID } = props;
  const solutionData = allSolutionsData.filter((data) => data.id === solutionID)[0];

  return (
    <Box sx={{ py: 4 }}>
      <SolutionHeader name={solutionData.name} description={solutionData.description} />
      <SolutionDesc heading={solutionData.l0} subHeading={solutionData.l0_sub} content={solutionData.l0_content} />

      <Container>
        <Box my={4}>
          <CardOne heading={solutionData.l1} highlights={solutionData.l1_choose} content={solutionData.l1_content} />
        </Box>
        <Box my={4}>
          <CardTwo heading={solutionData.l2} highlights={solutionData.l2_choose} content={solutionData.l2_content} />
        </Box>
        <Box my={4}>
          <CardThree heading={solutionData.l3} highlights={solutionData.l3_choose} content={solutionData.l3_content} />
        </Box>
        <Box my={4}>
          <CardFour
            heading1={solutionData.l4_1}
            content1={solutionData.l4_1_content}
            heading2={solutionData.l4_2}
            content2={solutionData.l4_2_content}
          />
        </Box>
        <Box my={4}>
          <CardFive
            heading1={solutionData.l5_1}
            content1={solutionData.l5_1_content}
            heading2={solutionData.l5_2}
            highlights2={solutionData.l5_2_choose}
            content2={solutionData.l5_2_content}
            heading3={solutionData.l5_3}
            content3={solutionData.l5_3_content}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default SolutionContent;
