import '@testing-library/cypress/add-commands'

describe("Home Page", ()=>{
  before(()=>{
    cy.visit('localhost:3000')
  })
  it("should show the home page",()=>{
    cy.get("main").contains("Home")
  })
})

