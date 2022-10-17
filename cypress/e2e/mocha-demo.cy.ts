describe('empty spec', () => {
  before(() => {
    cy.log('Hello from the before hook')
  })
  after(() => {
    cy.log('Hello from the after hook')
  })
  beforeEach(() => {
    cy.log('Hello from the beforeEach hook')
  })
  afterEach(() => {
    cy.log('Hello from the afterEach hook')
  })
  it('testcase #1', () => {
    cy.log('hello world')
  })
  it('testcase #2', () => {
    cy.log('hello world')
  })
  it('testcase #3', () => {
    cy.log('hello world')
  })
  it('testcase #4', () => {
    cy.log('hello world')
  })
})