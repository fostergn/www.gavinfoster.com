import { connect } from 'react-redux';
import { sendMessage } from '../../actions/actions';
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
    sendMessage: (msg) => {
      dispatch(sendMessage(msg));
    },
  };
};

const PreviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview);

export default PreviewContainer;
