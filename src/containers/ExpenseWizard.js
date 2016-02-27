'use strict'

import React from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';

import {Map} from 'immutable'

import {Wizard, WizardScreen} from '../components/Wizard'
import {pickMonthStep, pickCategoryStep, pickPriceStep, summaryStep} from '../components/expenseWizardViews'

import * as wizardActions from '../reducers/expenseWizard/expenseWizardActions'
const actions = [wizardActions]

var mapStateToProps = function(state) {
  return {current: state.expenseWizard.current, expenseItem: state.expenseWizard.expenseItem, expenseCategories: state.expenses.categories}
}

function mapDispatchToProps(dispatch) {
  const creators = Map().merge(...actions).filter(value => typeof value === 'function').toObject();

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}

const ExpenseWizard = React.createClass({

  render() {
    return (
      <Wizard current={this.props.current} onPrevious={() => this.props.actions.movePrevious()} onNext={() => this.props.actions.moveNext()}>
        <WizardScreen>
          {pickMonthStep(this.props.expenseItem.month, this.props.expenseItem.year, (month, year) => {
            this.props.actions.dateChanged(month, year)
          })}
        </WizardScreen>
        <WizardScreen>
          {pickCategoryStep(this.props.expenseCategories, this.props.expenseItem.category, category => {
            this.props.actions.categoryChanged(category)
          })}
        </WizardScreen>
        <WizardScreen>
          {pickPriceStep(this.props.expenseItem.price, price => {
            this.props.actions.priceChanged(price)
          })}
        </WizardScreen>
        <WizardScreen>
          {summaryStep(this.props.expenseItem)}
        </WizardScreen>
      </Wizard>
    )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseWizard)
