import React from 'react';
import {View ,} from 'react-native';
import {TextInput} from 'react-native-paper';

import styles from './styles';

const InputView = ({
  placeholder,
  onChangeText,
  value,
  keyboardType,
  editable,
  color,
  example,
  onChange,
  onSelectionChange,
  textContentType,
  error,
  secureTextEntry,placeholderTextColor,maxLength
}) => (
  <View style={styles.CreateinputRoot}>
    <TextInput
      label={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      placeholderTextColor={placeholderTextColor}
      disabled={editable}
      style={styles.input}
      textContentType={textContentType}
      // onSelectionChange={{background: onSelectionChange}}
      selectionColor={{colors:{text: '#000', primary: '#02afef'}}}
      mode="outlined"
      maxLength={maxLength}
      theme={{colors: {placeholder: error ? "red":'#000', text: '#000',background: 'transparent', primary: '#02afef',}}}
      placeholder={example}
      secureTextEntry={secureTextEntry}
    />
  </View>
);
export default InputView;
