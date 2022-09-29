import { Component, ReactNode } from "react";

export default class ErrorBoundory extends Component<{ children: ReactNode }> {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <h1 color="red">Error Error</h1>;
    }
    return this.props.children;
  }
}
