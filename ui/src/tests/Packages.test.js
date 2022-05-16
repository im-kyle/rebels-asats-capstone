import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
import { BrowserRouter} from 'react-router-dom';
import { ColorModeThemeProvider } from '../contexts/ThemeContext';
import Packages from '../components/pages/Packages'

beforeEach(()=>{
  render(
    <BrowserRouter>
      <ColorModeThemeProvider>
        <Packages />
      </ColorModeThemeProvider> 
    </BrowserRouter>
    )
})


describe("Packages Page", ()=>{
  it("renders the awards title", ()=>{
    const title = screen.getByText("Packages")
    expect(title).toBeInTheDocument()
  })
})