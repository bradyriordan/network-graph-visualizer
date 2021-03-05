import React from 'react'

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: this.props.formatDataError };      
    }
  
    componentDidCatch(error, info) {
      // Display fallback UI
      this.props.throwFormatDataError();
      this.props.throwDataError();
      this.setState({ hasError: this.props.formatDataError });      
    }
  
    render() {
      if (this.state.hasError) {        
        // You can render any custom fallback UI
        return (
          <>
            <h4>Something went wrong.</h4>          
          </>
        );
      }
      return this.props.children;
    }
}

export default ErrorBoundary;