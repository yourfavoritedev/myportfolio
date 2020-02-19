import React from 'react';
import PropTypes from 'prop-types';
import MenuWidget from '../layout/MenuWidget';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNode: 0,
    };

    this._nodes = new Map();
  }

  componentDidUpdate() {
    this.scrollToNode();
  }

  renderChildren = () => {
    const { children } = this.props;
    return (
      <React.Fragment>
        {children.map((child, index) => {
          return (
            <div className="child-node" ref={c => this._nodes.set(index, c)}>
              {child}
            </div>
          );
        })}
      </React.Fragment>
    );
  };

  scrollToNode = () => {
    const { currentNode } = this.state;
    let nodes = [];

    Array.from(this._nodes.values())
      .filter(node => node !== null)
      .forEach(node => nodes.push(node));

    if (nodes[currentNode]) {
      nodes[currentNode].scrollIntoView({
        behavior: 'smooth',
        nearest: 'block',
      });
    }
  };

  createNavButtons = () => {
    const { children } = this.props;
    const { currentNode } = this.state;

    return (
      <div className="nav-buttons">
        <button onClick={this.goToPreviousNode} disabled={currentNode === 0}>
          Previous
        </button>
        <button
          onClick={this.goToNextNode}
          disabled={currentNode + 1 === children.length}
        >
          Next
        </button>
      </div>
    );
  };

  goToPreviousNode = () => {
    this.setState(prevState => {
      return {
        currentNode: prevState.currentNode - 1,
      };
    });
  };

  goToNextNode = () => {
    this.setState(prevState => {
      return {
        currentNode: prevState.currentNode + 1,
      };
    });
  };

  setCurrentNode = num => {
    this.setState(prevState => {
      return {
        currentNode: num,
      };
    });
  };

  render() {
    const { useMenuWidget } = this.props;
    return (
      <div className="slider">
        <div className="content">{this.renderChildren()}</div>
        {!useMenuWidget && <div className="nav">{this.createNavButtons()}</div>}
        {useMenuWidget && <MenuWidget onNodeSelect={this.setCurrentNode} />}
      </div>
    );
  }
}

export default Slider;

Slider.propTypes = {
  children: PropTypes.array,
};
