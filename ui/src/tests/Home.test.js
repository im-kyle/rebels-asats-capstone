import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
import { BrowserRouter} from 'react-router-dom';
import { ColorModeThemeProvider } from '../contexts/ThemeContext';
import Home from '../components/pages/Home'

beforeEach(()=>{
  render(
    <BrowserRouter>
      <ColorModeThemeProvider>
        <Home />
      </ColorModeThemeProvider> 
    </BrowserRouter>
    )
})


describe("Home Page", ()=>{
  it("renders the awards title", ()=>{
    const title = screen.getByText("Home")
    expect(title).toBeInTheDocument()
  })
})