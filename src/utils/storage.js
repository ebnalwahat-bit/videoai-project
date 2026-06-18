import * as SecureStore from 'expo-secure-store';
export async function save(key, value){
  return SecureStore.setItemAsync(key, JSON.stringify(value));
}
export async function load(key){
  const v = await SecureStore.getItemAsync(key);
  return v ? JSON.parse(v) : null;
}
