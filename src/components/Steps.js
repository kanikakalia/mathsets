import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Show from "./Show";
import Solve from "./Solve";
import Simplify from "./Simplify";

class Steps extends PureComponent {
  static displayName = "Steps";

  static propTypes = {
    steps: PropTypes.array,
    simplify: PropTypes.bool,
    solve: PropTypes.bool
  };

  state = {
    updateSteps: []
  };

  componentWillReceiveProps = nextProps => {
    const { steps, simplify, solve } = this.props;

    if (nextProps.steps !== steps) {
      this.setState({
        updateSteps: nextProps.steps
      });
      console.log(this.state.updateSteps);
    } else if (nextProps.simplify !== simplify || nextProps.solve !== solve) {
      this.setState({
        updateSteps: []
      });
    }
  };

  render() {
    const { updateSteps } = this.state;
    const { simplify, solve } = this.props;

    const renderer = updateSteps.map((step, i) => {
      return (
        <div key={i} className="steps">
          {simplify
            ? <Simplify step={step} />
            : solve ? <Solve step={step} i={i} /> : <div />}
          <br />
        </div>
      );
    });
    return <Show renderer={renderer} />;
  }
}

export default Steps;