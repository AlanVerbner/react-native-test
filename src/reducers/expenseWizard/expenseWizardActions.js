'use strict'

const {
  WIZARD_NEXT,
  WIZARD_PREVIOUS,
  WIZARD_DATE_CHANGED,
  WIZARD_CATEGORY_CHANGED,
  WIZARD_PRICE_CHANGED
} = require ('../../lib/constants').default;

export function moveNext() {
  return {
    type: WIZARD_NEXT
  }
}

export function movePrevious() {
  return {
    type: WIZARD_PREVIOUS
  }
}

export function dateChanged(month, year) {
  return {
    type: WIZARD_DATE_CHANGED,
    payload: {
      month : month,
      year: year
    }
  }
}

export function categoryChanged(category) {
  return {
    type: WIZARD_CATEGORY_CHANGED,
    payload: {
      category: category
    }
  }
}

export function priceChanged(price) {
  return {
    type: WIZARD_PRICE_CHANGED,
    payload: {
      price: price
    }
  }
}
