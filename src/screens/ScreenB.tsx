import { useNavigation } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

export function ScreenB() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Screen A</Text>

      <Button
        title="Go to Screen A"
        onPress={() => navigation.navigate('ScreenA')}
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
