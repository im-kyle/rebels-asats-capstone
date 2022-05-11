import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
import { BrowserRouter} from 'react-router-dom';
import { ColorModeThemeProvider } from '../contexts/ThemeContext';
import EditProfile from '../components/pages/EditProfile'

beforeEach(()=>{
  render(
    <BrowserRouter>
      <ColorModeThemeProvider>
        <EditProfile />
      </ColorModeThemeProvider> 
    </BrowserRouter>
    )
})


describe("Edit Profile Page", ()=>{
  it("renders the Edit Profile title", ()=>{
    const title = screen.getByText("Edit Profile")
    expect(title).toBeInTheDocument()
  })
})