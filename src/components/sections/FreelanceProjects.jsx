import PropTypes from 'prop-types';
import ProjectShowcaseSection from '../showcase/ProjectShowcaseSection';
import { SECTION_COPY } from '../../constants/site';
import { SHOWCASE_COPY } from '../../constants/showcase';

const FreelanceProjects = ({ data }) => (
  <ProjectShowcaseSection
    id="freelance"
    title={SECTION_COPY.freelance.title}
    subtitle={SECTION_COPY.freelance.subtitle}
    items={data || []}
    copy={SHOWCASE_COPY.freelance}
    background="white"
  />
);

FreelanceProjects.propTypes = {
  data: PropTypes.array,
};

export default FreelanceProjects;
