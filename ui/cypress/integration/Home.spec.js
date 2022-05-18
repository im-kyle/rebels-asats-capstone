import '@testing-library/cypress/add-commands'

describe("Home Page", ()=>{
  before(()=>{
    cy.visit('localhost:3000')
  })
  it("should show the home page",()=>{
    cy.get("main").contains("Welcome to ASATS!")
    cy.get("main").contains("Dashboard")
    cy.get("main").contains("Awards")
    cy.get("main").contains("Packages")
  })
})

