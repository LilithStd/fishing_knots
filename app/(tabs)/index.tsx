import { Image, Text, StyleSheet, View, FlatList, Button, Alert, TouchableOpacity } from 'react-native';
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
          <FlatList
            data={list_knots}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View key={item.id} style={styles.contentContainer}>
                <Text style={styles.titleCard}>{item.name}</Text>
                <TouchableOpacity
                  onPress={() => Alert.alert(item.name)}
                  style={styles.buttonBase}
                >
                  <Text
                    style={styles.buttonText}
                  >{'Continue'}</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 40,
  },
  contentContainer: {
    backgroundColor: 'yellow',
    margin: 10,
    paddingBottom: 60
  },
  testSquade: {

  },
  mainTitle: {
    padding: 10,
    textAlign: 'center',

  },
  titleCard: {
    textAlign: 'center'
  },
  buttonBase: {
    backgroundColor: '#4CAF50', // Зеленый фон
    paddingVertical: 10, // Вертикальный отступ
    borderRadius: 8, // Закругленные углы
    alignItems: 'center', // Выравнивание текста по горизонтали
    justifyContent: 'center', // Выравнивание текста по вертикали
    marginTop: 10, // Отступ сверху для кнопки
    width: 200,
    top: 40,
    left: 100
  },
  buttonText: {
    color: '#FFFFFF', // Белый текст
    fontSize: 16, // Размер текста
    fontWeight: 'bold', // Жирный шрифт
    textAlign: 'center', // Центрирование текста
  },
});
