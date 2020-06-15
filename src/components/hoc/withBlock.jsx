import React from "react";

import "../../styles/withBlock.scss";

function withBlock(Component) {
  return class withBlock extends React.Component {
    state = { showTooltip: false };

    mouseOver = () => this.setState({ showTooltip: true });

    mouseOut = () => this.setState({ showTooltip: false });

    render() {
      return (
        <div
          className="block__container"
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
        >
          <Component {...this.props} showTooltip={this.state.showTooltip} />
        </div>
      );
    }
  };
}

export default withBlock;
