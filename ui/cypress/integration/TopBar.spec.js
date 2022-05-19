import '@testing-library/cypress/add-commands'

describe("Top Bar", ()=>{
  before(()=>{
    cy.visit('localhost:3000')
    // cy.get('button[aria-label="view settings"').click().wait(500)
    // cy.get('span[text="Logout"]').click().wait(100)
  })
  it("should show the Top Bar",()=>{
    cy.get("header").contains("Dashboard")
    cy.get("header").contains("Awards")
    cy.get("header").contains("Packages")
    cy.get("header").contains("ASATS")
  })
  it("should route to select pages when not signed in",()=>{
    cy.get('header').then(header => {
      if(header.find('button[aria-label="view settings"]').length > 0){
        cy.get('button[aria-label="view settings"]').click().wait(500)
        cy.get('ul li:last').click().wait(1000)
      }
    })

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
    cy.get('header').then(header => {
      if(!header.find('button[aria-label="view settings"]').length > 0){
        cy.get('button[aria-label="log in"]').click().wait(500)
        cy.get('input[name="email"]').type("Randy.Marsh@mail.com")
        cy.get('input[name="password"]').type("password")
        cy.get('button[type="submit"]').click().wait(1000)
      }
    })

    cy.get("header").contains("Packages").click({force:true}).wait(1000)
    cy.get("main").contains("Packages")
    cy.get("header").contains("Dashboard").click({force:true}).wait(1000)
    cy.get("main").contains("Your Packages")
  })
  it("should be able to change to between dark and light mode",()=>{
    cy.get('button[aria-label="set dark mode"]').click({force:true})
    cy.get('button[aria-label="set light mode"]').click({force:true})
  })
})