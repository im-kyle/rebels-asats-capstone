import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
import { BrowserRouter} from 'react-router-dom';
import { ColorModeThemeProvider } from '../contexts/ThemeContext';
import Dashboard from '../components/pages/Dashboard'

beforeEach(()=>{
  render(
    <BrowserRouter>
      <ColorModeThemeProvider>
        <Dashboard />
      </ColorModeThemeProvider> 
    </BrowserRouter>
    )
})


describe("Dashboard Page", ()=>{
  it("renders the awards title", ()=>{
    const title = screen.getByText("Dashboard")
    expect(title).toBeInTheDocument()
  })
})