import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
      };
    }
  
    static getDerivedStateFromError(error) {
      // Update state to display fallback UI
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        // Fallback UI when an error occurs
        return <h2>Something went wrong. Please try again later.</h2>;
      }
  
      return this.props.children;
    }
  }

  export default ErrorBoundary;