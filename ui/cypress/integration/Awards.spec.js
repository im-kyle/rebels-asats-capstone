import '@testing-library/cypress/add-commands'

describe("Awards Page", ()=>{
  before(()=>{
    cy.visit('localhost:3000/awards')
  })
  it("should show the Filter Catagories",()=>{
    cy.get("body").contains("Filter by Rank")
    cy.get("body").contains("Civilian (Category I)")
    cy.get("body").contains("Civilian (Category II)")
    cy.get("body").contains("Civilian (Category III)")
    cy.get("body").contains("Cadet")
    cy.get("body").contains("Junior Enlisted")
    cy.get("body").contains("Non-commissioned Officer")
    cy.get("body").contains("Senior Non-commissioned Officer")
    cy.get("body").contains("Company Grade Officer")
    cy.get("body").contains("Field Grade Officer")
  })
})