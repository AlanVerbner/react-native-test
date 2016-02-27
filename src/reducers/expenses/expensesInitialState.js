'use strict'

import {
  List,
  Record
} from 'immutable'

import {
  createExpenseCategory
} from '../../lib/models/expenseCategory'

const categories = List.of(
  createExpenseCategory( '1', 'Supermercado' ),
  createExpenseCategory( '2', 'Salida' )
)

const InitialState = Record({
  categories: categories
})

export default InitialState
