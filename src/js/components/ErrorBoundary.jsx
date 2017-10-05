import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorInfo: null
  }

  componentDidCatch(hasError, errorInfo) {
    this.setState({
      hasError,
      errorInfo
    })
  }

  render() {
    const { hasError, errorInfo } = this.state

    return hasError ? (
      <pre>
        <code>{errorInfo.componentStack}</code>
      </pre>
    ) : (
      this.props.children
    )
  }
}
