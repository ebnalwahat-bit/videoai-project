import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
export default function CustomButton({title,onPress}) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn:{backgroundColor:'#17a673',padding:10,borderRadius:8,alignItems:'center'},
  txt:{color:'#fff',fontSize:16}
});
