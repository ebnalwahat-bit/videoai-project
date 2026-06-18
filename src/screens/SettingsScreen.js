import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ الإعدادات</Text>
      <View style={styles.row}>
        <Text>📤 نشر تلقائي لليوتيوب</Text>
        <Switch value={false} onValueChange={()=>{}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1,padding:20},
  title:{fontSize:22,marginBottom:20},
  row:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:10}
});
