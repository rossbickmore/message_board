import React, { Component } from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
  red: '#FF0000',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '800px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box; 
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  p, label, input, select {
    padding: 0.5rem;
    margin: 0;
    font-size: 1rem;
  }
  h1 {
    padding: 0.5rem;
    margin: 0;
    font-size: 1.5rem;
  }
  h2 {
    padding: 0.5rem;
    margin: 0;
    font-size: 1.25rem;
  }
  a {
    text-decoration: none;
    padding: 0.5rem;
    margin: 0;
    font-size: 1rem;
    color: ${theme.black};
  }
  button { font-family: 'Roboto', sans-serif; }
  hr {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 1px;
    color: red;
    font-weight: 100;
    border-color: rgba(0, 0, 0, 0.05);
  }
`

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export default Page
