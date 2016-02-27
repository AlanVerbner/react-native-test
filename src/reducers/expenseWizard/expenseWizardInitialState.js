'use strict'

import {
  Record
} from 'immutable'

import { createExpenseItem } from '../../lib/models/expenseItem'

const currentDate = new Date()
const expenseItem = createExpenseItem(
  currentDate.getMonth() + 1,
  currentDate.getFullYear(),
  null,
  0 )

const InitialState = Record( {
  current: 0,
  expenseItem: expenseItem
} )

export default InitialState
