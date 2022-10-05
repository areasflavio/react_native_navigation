import { useNavigation, useRoute } from '@react-navigation/native';
import { Button, StyleSheet, Text, View } from 'react-native';

type ParamsProps = {
  name: string;
};

export function ScreenB() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name } = route.params as ParamsProps;

  return (
    <View style={styles.container}>
      <Text>{name}</Text>

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
