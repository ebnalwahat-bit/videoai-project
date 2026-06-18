import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
export default function VideoCard({title,thumbnail}) {
  return (
    <View style={styles.card}>
      <Image source={thumbnail ? {uri:thumbnail} : require('../../assets/icon.png')} style={styles.thumb} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  card:{width:'100%',marginBottom:12},
  thumb:{width:'100%',height:180,backgroundColor:'#eee'},
  title:{fontSize:16,marginTop:8}
});
