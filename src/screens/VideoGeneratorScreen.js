import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function VideoGeneratorScreen() {
  const [topic, setTopic] = useState('');
  const [script, setScript] = useState('');
  const [duration, setDuration] = useState('4');

  const generateScript = async () => {
    if(!topic) return Alert.alert('أدخل موضوعاً');
    // placeholder local generator
    setScript(`هذا فيديو عن: ${topic}. هنا ملخص مختصر.`);
  };

  const synthesize = async () => {
    if(!script) return Alert.alert('لا يوجد نص');
    // placeholder: save text to file
    const path = FileSystem.documentDirectory + 'narration.txt';
    await FileSystem.writeAsStringAsync(path, script, { encoding: FileSystem.EncodingType.UTF8 });
    Alert.alert('معاينة', 'تم حفظ نص للمعاينة (موضح كمثال).');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>أدخل موضوع الفيديو:</Text>
      <TextInput style={styles.input} value={topic} onChangeText={setTopic} placeholder="مثال: الفضاء" />
      <Button title="✍️ توليد سيناريو" onPress={generateScript} />
      <Text style={styles.script}>{script}</Text>
      <Text style={{marginTop:10}}>مدة كل صورة (ثواني):</Text>
      <TextInput style={styles.input} value={duration} onChangeText={setDuration} keyboardType="numeric" />
      <Button title="🎵 توليد صوت (معاينة)" onPress={synthesize} />
      <Button title="🎥 بناء الفيديو (مخطط)" onPress={() => Alert.alert('مخطط','سيتم دمج الصور والصوت لاحقاً')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{padding:20},
  label:{fontSize:18,marginBottom:8},
  input:{borderWidth:1,borderColor:'#ccc',padding:8,marginBottom:12},
  script:{marginVertical:15,fontSize:16}
});
