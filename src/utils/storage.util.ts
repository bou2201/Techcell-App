import AsyncStorage from '@react-native-async-storage/async-storage';

export const getAsyncStorage = async (key: string, isObject?: boolean) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value) {
      return isObject ? JSON.parse(value) : value;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};

export const saveAsyncStorage = async (key: string, data: Object | string) => {
  try {
    if (data && typeof data === 'string') {
      await AsyncStorage.setItem(key, data);
    } else {
      await AsyncStorage.setItem(key, JSON.stringify(data));
    }
  } catch (error) {
    console.log(error);
  }
};

export const removeAsyncStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error);
  }
};

export const logAsyncStorage = async () => {
  try {
    const values = await AsyncStorage.getAllKeys();
    console.table(values.map((value) => ({ value })));
  } catch (error) {
    console.log(error);
  }
};
