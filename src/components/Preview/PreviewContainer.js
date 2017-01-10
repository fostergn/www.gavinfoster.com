import { connect } from 'react-redux';
// import { moveDots, unHover } from '../../actions/actions';
import Preview from './Preview';

const mapStateToProps = (state) => {
  return {
    project: state.portfolio.currentProject,
    hovering: state.portfolio.hovering,
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
