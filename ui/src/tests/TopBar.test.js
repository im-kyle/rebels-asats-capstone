import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import TopBar from '../components/layout/TopBar'
import { ColorModeThemeProvider } from '../contexts/ThemeContext';
import { BrowserRouter} from 'react-router-dom';

// jest.mock("../contexts/AuthContext" ,()=>{

//   const originalModule = jest.requireActual()

//   function useAuth() {
//     const value = {
//       firebaseUser: false,
//       login: jest.fn()
//     }
//     return value
//   }
// })
jest.mock("../components/layout/UserMenu", ()=>{
  return{
    __esModule: true,
    default: ()=>{
      return(<div></div>)
    }
  }
})

beforeEach(()=>{
  render(
    <BrowserRouter>
      <ColorModeThemeProvider>
        <TopBar />
      </ColorModeThemeProvider> 
    </BrowserRouter>
    )
})

describe("Top Bar", ()=>{
  it("renders the dashboard button and icon", ()=>{
    const dashboard = screen.getByText("Dashboard")
    const icon = screen.getByTestId("DashboardIcon")
    expect(dashboard).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  })

  it("renders the awards button and icon", ()=>{
    const awards = screen.getByText("Awards")
    const icon = screen.getByTestId("MilitaryTechIcon")
    expect(awards).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  })

  it("renders the packages button and icon", ()=>{
    const packages = screen.getByText("Packages")
    const icon = screen.getByTestId("DriveFileRenameOutlineIcon")
    expect(packages).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  })

  it("renders the app title", ()=>{
    const title = screen.getByText("ASATS")
    expect(title).toBeInTheDocument();
  })

  it("renders the light/dark mode button", ()=>{
    const modeToggle = screen.getByLabelText("set dark mode")
    expect(modeToggle).toBeInTheDocument();
    userEvent.click(modeToggle)
    const light = screen.getByLabelText("set light mode")
    expect(light).toBeInTheDocument();
  })

})
