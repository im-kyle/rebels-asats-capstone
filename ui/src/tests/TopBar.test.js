import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import TopBar from '../components/layout/TopBar'
import App from '../App';

describe("Top Bar", ()=>{
  it("renders the dashboard button and icon", ()=>{
    const topBar = render(<TopBar />)
    const dashboard = topBar.getByText("Dashboard")
    const icon = topBar.getByTestId("DashboardIcon")
    expect(dashboard).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  })

  it("renders the awards button and icon", ()=>{
    const topBar = render(<TopBar />)
    const awards = topBar.getByText("Awards")
    const icon = topBar.getByTestId("MilitaryTechIcon")
    expect(awards).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  })

  it("renders the packages button and icon", ()=>{
    const topBar = render(<TopBar />)
    const packages = topBar.getByText("Packages")
    const icon = topBar.getByTestId("DriveFileRenameOutlineIcon")
    expect(packages).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  })

  it("renders the app title", ()=>{
    const topBar = render(<TopBar />)
    const title = topBar.getByText("ASATS")
    expect(title).toBeInTheDocument();
  })

  it("renders the light/dark mode button", ()=>{
    const topBar = render(
      <BrowserRouter>
        <App />
      </BrowserRouter> );
    const modeToggle = topBar.getByLabelText("set dark mode")
    expect(modeToggle).toBeInTheDocument();
    userEvent.click(modeToggle)
    const light = topBar.getByLabelText("set light mode")
    expect(light).toBeInTheDocument();
  })

  it("renders the User Icon button", ()=>{
    const topBar = render(<TopBar />)
    const userIcon = topBar.getByLabelText("log in")
    expect(userIcon).toBeInTheDocument();
    
  })

  
})
