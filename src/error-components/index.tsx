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
      return (
        <dialog open>
          <h1 color="red">ERROR</h1>
        </dialog>
      );
    }
    return this.props.children;
  }
}
