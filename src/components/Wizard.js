import React from 'react-native'
const {View, Text, StyleSheet} = React

import Button from 'react-native-button'

var styles = StyleSheet.create({
  indicator: {
    flexDirection : 'row'
  },
  background: {
    backgroundColor: '#bbbbbb',
    height: 10,
    overflow: 'hidden'
  },
  fill: {
    backgroundColor: '#3b5998',
    height: 10
  }
});

function WizardIndicator({current, total, backgroundStyle, fillStyle}) {
  const currentWith = current / total
  const backgroundWidth = 1 - currentWith

  return (
    <View style={[styles.indicator]}>
      <View style={[styles.fill, fillStyle, {flex: currentWith}]} ></View>
      <View style={[styles.background, backgroundStyle, {flex : backgroundWidth}]} ></View>
    </View>
  )
}
const buttonsStyle = {fontSize: 20, color: 'green'}

function WizardFooter ( {onPrevious, onNext, showPrevious, showEnd} ) {
   let previous = undefined;
   if( showPrevious ) {
      previous = <Button
          style={buttonsStyle}
          onPress={onPrevious}>
          Previous
        </Button >
    }
    if( showEnd )
      next = <Button
        style={buttonsStyle}>
        End!
      </Button >
    else
      next = <Button
        style={buttonsStyle}
        onPress={onNext}>
        Next
      </Button >

  return (
    <View>
      {previous}
      {next}
    </View>
  )
}

export function WizardScreen( { title, children } ) {
  return (
    <View>
      { children }
    </View>
  )
}

export function Wizard( props ) {
  return (
    < View >
      < WizardIndicator
          current= { props.current + 1 }
          total= { props.children.length } / >
        { props.children[props.current] }
      < WizardFooter
          onPrevious = { props.onPrevious }
          onNext = { props.onNext }
          showPrevious = { props.current !== 0 }
          showEnd = { props.current === props.children.length - 1} />
    < /View >
  )
}
