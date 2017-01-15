import { connect } from 'react-redux';
import Preview from './Preview';

const mapStateToProps = (state) => {
  return {
    project: state.portfolio.currentProject,
    hovering: state.portfolio.hovering,
    isDrawing: state.portfolio.isDrawing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

const PreviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);

export default PreviewContainer;
