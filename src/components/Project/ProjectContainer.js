import { connect } from 'react-redux';
import { initProject } from '../../actions/actions';
import Project from './Project';

const mapStateToProps = (state) => {
  return {
    project: state.portfolio.currentProject,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initProject: name => {
      dispatch(initProject(name));
    },
  };
};

const ProjectContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Project);

export default ProjectContainer;
