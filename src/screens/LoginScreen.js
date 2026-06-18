import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 MediaGen - Video AI</Text>
      <Button title="Login with Google" onPress={() => navigation.replace('Home')} />
      <Button title="Continue as Guest" onPress={() => navigation.replace('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center'},
  title:{fontSize:22,color:'#17a673',marginBottom:20}
});
