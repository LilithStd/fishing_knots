import { Image, Text, StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const list_knots = [
  { id: '1', name: 'knot-1', image: 'image_knot', description: 'description of knot 1' },
  { id: '2', name: 'knot-2', image: 'image_knot', description: 'description of knot 2' },
  { id: '3', name: 'knot-3', image: 'image_knot', description: 'description of knot 3' },
  { id: '4', name: 'knot-4', image: 'image_knot', description: 'description of knot 4' },
  { id: '5', name: 'knot-5', image: 'image_knot', description: 'description of knot 5' },
  { id: '6', name: 'knot-6', image: 'image_knot', description: 'description of knot 6' },
  { id: '7', name: 'knot-7', image: 'image_knot', description: 'description of knot 7' },
  { id: '8', name: 'knot-8', image: 'image_knot', description: 'description of knot 8' },
  { id: '9', name: 'knot-9', image: 'image_knot', description: 'description of knot 9' }
]


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.testSquade}>
          <Text style={styles.mainTitle}>Fishing Knots</Text>
          <View>
            {list_knots.map((item) => (
              <View key={item.id} style={styles.contextContainer}>
                <Text>{item.name}</Text>
                <Text>{item.description}</Text>
              </View>

            ))}
          </View>
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contextContainer: {
    backgroundColor: 'yellow',
    textAlign: 'center',
    justifyContent: 'center'
  },
  testSquade: {
    backgroundColor: 'green'
  },
  mainTitle: {
    padding: 10,
    textAlign: 'center',

  }
});
