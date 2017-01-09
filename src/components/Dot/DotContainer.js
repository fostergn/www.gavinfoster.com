import { connect } from 'react-redux';
import { moveDots, unHover } from '../../actions/actions';
import Dot from './Dot';

const mapStateToProps = (state) => {
  return {
    dotPos: state.portfolio.dotPos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    moveDots: (pos, name) => {
      dispatch(moveDots(pos, name));
    },
    unHover: () => {
      dispatch(unHover());
    },
  };
};

const DotContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dot);

export default DotContainer;
