'use sstrict'

import {
  Record
} from 'immutable'

const ExpenseItem = Record({
  id: 0,
  month: 1,
  year: 1,
  category: null,
  price: 10,
  createdAt: new Date()
})

export function createExpenseItem( month, year, category, price ) {
  return new ExpenseItem( {
    month: month,
    year: year,
    category: category,
    price: price,
    createdAt: new Date()
  } )
}
