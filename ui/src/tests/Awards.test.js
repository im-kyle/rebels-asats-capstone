import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw'
import { setupServer } from 'msw/node'
// import userEvent from '@testing-library/user-event'
import { BrowserRouter} from 'react-router-dom';
import { ColorModeThemeProvider } from '../contexts/ThemeContext';
import Awards from '../components/pages/Awards'
import config from '../config';

const server = setupServer(
  rest.get(`${config.test.apiUrl}/awards`, (req, res, con) =>{
    return res(con.json([]))
  })
)
beforeAll(()=>{
  server.listen()
})

beforeEach(()=>{
  server.resetHandlers()
  render(
    <BrowserRouter>
      <ColorModeThemeProvider>
        <Awards />
      </ColorModeThemeProvider> 
    </BrowserRouter>
    )
})

afterAll(()=>server.close())

describe("Awards Page", ()=>{
  it("renders the awards title", ()=>{
    const title = screen.getByText("Awards")
    expect(title).toBeInTheDocument()
  })

  xit("renders the side bar content boxes", ()=>{
    const Rank = screen.getByText("Rank")
    const AFSC = screen.getByText("AFSC")
    const Demographics = screen.getByText("Demographics")
    expect(Rank).toBeInTheDocument()
    expect(AFSC).toBeInTheDocument()
    expect(Demographics).toBeInTheDocument()
  })
})