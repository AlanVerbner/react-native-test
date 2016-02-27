'use strict'

import React from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import t from 'tcomb-form-native'
import {SegmentedControls} from 'react-native-radio-buttons'

const {Text, TextInput, View, StyleSheet} = React

const styles = StyleSheet.create({
  wizardIcon: {},
  step: {
    flex: 1
  }
});

const iconDef = {
  backgroundColor: '#e0284f',
  borderRadius: 23,
  paddingHorizontal: 8,
  paddingTop: 9,
  paddingBottom: 7,
  size: 80
}

export function pickMonthStep(month, year, onDateChange) {
  return (
    <View style={styles.step}>
      <Icon name="calendar" {...iconDef} style={styles.wizardIcon}/>
      <Text>Month?</Text>
      <TextInput value={month + ""} keyboardType='numeric' onChangeText={text => {
        onDateChange(parseInt(text), year)
      }}></TextInput>
      <Text>Year?</Text>
      <TextInput value={year + ""} keyboardType='numeric' onChangeText={text => {
        onDateChange(month, parseInt(text))
      }}></TextInput>
    </View>
  )
}

export function pickCategoryStep(categories, selectedCategory, onCategoryChange) {
  const options = categories
  return (
    <View style={styles.step}>
      <Icon name="tag" {...iconDef} style={styles.wizardIcon}/>
      <Text>Category?</Text>
      <SegmentedControls direction='column' options={options} selectedOption={selectedCategory} onSelection={option => {
        onCategoryChange(option)
      }} extractText={(option) => option.name}/>
    </View>
  )
}

export function pickPriceStep(price, onPriceChange) {
  return (
    <View style={styles.step}>
      <Icon name="credit-card" {...iconDef} style={styles.wizardIcon}/>
      <Text>Price?</Text>
      <TextInput defaultValue={price + ""} keyboardType='numeric' onChangeText={text => {
        onPriceChange(parseFloat(text))
      }}></TextInput>
    </View>
  )
}

export function summaryStep(expenseItem) {
  return (
    <View style={styles.step}>
      <Icon name="check" {...iconDef} style={styles.wizardIcon}/>
      <Text>When:
        {expenseItem.month}
        /
        {expenseItem.year}
      </Text>
      <Text>Category:
        {expenseItem.category
          ? expenseItem.category.name
          : ''}
      </Text>
      <Text>Price: $
        {expenseItem.price}
      </Text>
    </View>
  )
}
