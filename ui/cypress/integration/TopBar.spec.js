import '@testing-library/cypress/add-commands'

describe("Top Bar", ()=>{
  before(()=>{
    cy.visit('localhost:3000')
  })
  it("should show the Top Bar",()=>{
    cy.get("header").contains("Dashboard")
    cy.get("header").contains("Awards")
    cy.get("header").contains("Packages")
    cy.get("header").contains("ASATS")
  })
  it("should rotue to select pages when not signed in",()=>{
    cy.get("header").contains("Dashboard").click().wait(1000)
    cy.get("main").contains("Welcome to ASATS!")
    cy.get("header").contains("Awards").click().wait(1000)
    cy.get("main").contains("Awards")
    cy.get("header").contains("Packages").click().wait(1000)
    cy.get("main").contains("Awards")
    cy.get("header").contains("ASATS").click().wait(1000)
    cy.get("main").contains("Welcome to ASATS!")
  })
  it("should rotue to all pages when signed in",()=>{
    cy.findByRole("log in").click().wait(1000)
    cy.get("email")
  })
})