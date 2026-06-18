import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>مرحباً بك 👋</Text>
      <Button title="✍️ توليد فيديو جديد" onPress={() => navigation.navigate('Generate')} />
      <Button title="⚙️ الإعدادات" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center'},
  title:{fontSize:22,color:'#17a673',marginBottom:20}
});
