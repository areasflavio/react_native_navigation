import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

export function ScreenA() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Screen A</Text>

      <Button
        title="Go to Screen B"
        onPress={() => navigation.navigate('ScreenB')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
