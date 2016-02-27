'use strict'

import {
  Record
} from 'immutable'

const ExpenseCategory = Record( {
  id: 0,
  name: ''
} )

export function createExpenseCategory( id, name ) {
  return new ExpenseCategory( {
    id: id,
    name: name
  } )
}
