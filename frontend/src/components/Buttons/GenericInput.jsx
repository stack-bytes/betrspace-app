import { StyleSheet, TextInput, View } from 'react-native';


export const GenericInput = ({ placeholder, password, changeText }) => {
  return (
    <TextInput style={styles.container} placeholder={placeholder} onChangeText={changeText} placeholderTextColor={"#1A1A1A44"} 
    secureTextEntry={`${password ? true : false}`}></TextInput>    
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
    paddingLeft: 20,
    justifyContent: 'center',
    borderRadius: 25,
    flexDirection: 'row',
    elevation: 8,
    backgroundColor: '#F9F9F9',
    height: 62,
    width: 310, 
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderTopColor: '#FFFFFF',
    borderLeftColor: '#FFFFFF',
    shadowColor: '#000000',
    shadowOffset: { width: 4, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    color: "#1A1A1A",
    fontSize: 21,
    marginBottom: 5
  },
});

export default GenericInput;