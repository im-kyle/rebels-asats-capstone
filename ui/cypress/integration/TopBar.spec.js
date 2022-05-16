import '@testing-library/cypress/add-commands'

describe("Home Page", ()=>{
  before(()=>{
    cy.visit('localhost:3000')
  })
  it("should show the Top Bar",()=>{
    cy.get("header").contains("Dashboard").click().wait(1000)
    cy.get("main").contains("Dashboard")
  })
})