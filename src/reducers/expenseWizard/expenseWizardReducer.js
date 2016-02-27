'use strict'

import InitialState from './expenseWizardInitialState'

const {
  WIZARD_NEXT,
  WIZARD_PREVIOUS,
  WIZARD_DATE_CHANGED,
  WIZARD_CATEGORY_CHANGED,
  WIZARD_PRICE_CHANGED
} = require( '../../lib/constants' ).default;

const initialState = new InitialState;

export default function expenseWizardReducer( state = initialState, action ) {
  switch ( action.type ) {
    case WIZARD_NEXT:
      return state.set( 'current', state.current + 1 )
    case WIZARD_PREVIOUS:
      return state.set( 'current', state.current - 1 )
    case WIZARD_DATE_CHANGED:
      const monthToSet = action.payload.month || state.expenseItem.month
      const yearToSet = action.payload.year || state.expenseItem.year
      const updatedExpenseItem = state.expenseItem.merge( {
        'month': monthToSet,
        'year': yearToSet
      } )
      return state.set( 'expenseItem', updatedExpenseItem )
    case WIZARD_CATEGORY_CHANGED:
      return state.set( 'expenseItem', state.expenseItem.merge( {
        'category': action.payload.category
      } ) )
    case WIZARD_PRICE_CHANGED:
      return state.set( 'expenseItem', state.expenseItem.merge( {
        'price': action.payload.price
      } ) )
    default:
      return state
  }
}
