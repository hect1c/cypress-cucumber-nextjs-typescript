const {
  After,
  Given,
  Then
} = require("cypress-cucumber-preprocessor/steps");
import Button from '@components/button'
import { test } from '$cypress/lib/auth.helper'


Given('I open NextJS Page', function() {
  const result = test()
  cy.visit('/')
})