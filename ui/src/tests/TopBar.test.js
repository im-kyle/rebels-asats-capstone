import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import TopBar from '../components/layout/TopBar'
import App from '../App';
import { ColorModeThemeProvider } from '../contexts/ThemeContext';
import { AuthProvider } from '../contexts/AuthContext';
import { ApiProvider } from '../contexts/ApiContext';
import { BrowserRouter, Router, Routes } from 'react-router-dom';

describe("Top Bar", ()=>{
  it("renders the dashboard button and icon", ()=>{
    const result = render(
            <AuthProvider>
              <TopBar />
            </AuthProvider>
        )
      console.log(result)
    const dashboard = screen.getByText("Dashboard")
    const icon = screen.getByTestId("DashboardIcon")
    expect(dashboard).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  })

  xit("renders the awards button and icon", ()=>{
    const topBar = render(<TopBar />)
    const awards = topBar.getByText("Awards")
    const icon = topBar.getByTestId("MilitaryTechIcon")
    expect(awards).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  })

  xit("renders the packages button and icon", ()=>{
    const topBar = render(<TopBar />)
    const packages = topBar.getByText("Packages")
    const icon = topBar.getByTestId("DriveFileRenameOutlineIcon")
    expect(packages).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  })

  xit("renders the app title", ()=>{
    const topBar = render(<TopBar />)
    const title = topBar.getByText("ASATS")
    expect(title).toBeInTheDocument();
  })

  xit("renders the light/dark mode button", ()=>{
    const topBar = render(
      <ColorModeThemeProvider>
        <TopBar />
      </ColorModeThemeProvider>
    )
    const modeToggle = topBar.getByLabelText("set dark mode")
    expect(modeToggle).toBeInTheDocument();
    userEvent.click(modeToggle)
    const light = topBar.getByLabelText("set light mode")
    expect(light).toBeInTheDocument();
  })

  xit("renders the User Icon button", ()=>{
    const topBar = render(<TopBar />)
    const userIcon = topBar.getByLabelText("log in")
    expect(userIcon).toBeInTheDocument();
    
  })

})
