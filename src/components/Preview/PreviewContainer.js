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
    // moveDots: pos => {
    //   dispatch(moveDots(pos));
    // },
    // unHover: () => {
    //   dispatch(unHover());
    // },
  };
};

const PreviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);

export default PreviewContainer;
