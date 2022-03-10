import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const functionsize = size => {
  switch (size) {
    case 'sm':
      return {
        paddingHorizontal: 20,
        paddingVertical: 10,
      };
    case 'lg':
      return {
        paddingHorizontal: 60,
        paddingVertical: 10,
      };
    case 'xl':
      return {
        paddingHorizontal: 80,
        paddingVertical: 15,
      };
    default:
      return {
        paddingHorizontal: 40,
        paddingVertical: 10,
      };
  }
};

const Button = ({title = 'Button', size = 'md', ...rest}) => {
  const container = StyleSheet.compose(
    styles.buttonContainer,
    functionsize(size),
  );

  return (
    <TouchableOpacity style={container} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 5,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    color: 'white',
  },
});

export default Button;
