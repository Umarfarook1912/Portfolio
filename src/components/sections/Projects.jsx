import PropTypes from 'prop-types';
import ProjectShowcaseSection from '../showcase/ProjectShowcaseSection';
import { SECTION_COPY } from '../../constants/site';
import { SHOWCASE_COPY } from '../../constants/showcase';

const Projects = ({ data }) => (
  <ProjectShowcaseSection
    id="projects"
    title={SECTION_COPY.projects.title}
    subtitle={SECTION_COPY.projects.subtitle}
    items={data}
    copy={SHOWCASE_COPY.projects}
    background="gray"
  />
);

Projects.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Projects;
