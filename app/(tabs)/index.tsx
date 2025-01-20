import { useState } from 'react';
import { Image, Text, StyleSheet, View, FlatList, Button, Alert, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const knots_group = {
  1: 'Узлы для привязывания крючков',
  2: 'Узлы для соединения лесок',
  3: 'Узлы для создания петель',
  4: 'Узлы для специальных задач',
  5: 'Универсальные и декоративные узлы'
}

const list_knots = [
  { id: '1', group: 1, name: 'Паломар (Palomar Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Узел известен своей прочностью и простотой. Возник в США и стал популярен среди рыбаков благодаря универсальности. Отлично подходит для плетеных лесок.' },
  { id: '2', group: '1', name: 'Клинч (Clinch Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Классический узел, часто используемый для монолески. Придуман рыбаками для быстрого и надежного крепления крючков и приманок.' },
  { id: '3', group: '1', name: 'Усиленный клинч (Improved Clinch Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Современная версия клинча, более прочная благодаря дополнительному этапу фиксации. Появился в середине 20 века.' },
  { id: '4', group: '1', name: 'Универсальный узел (Uni Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Прост в освоении и чрезвычайно надежен. Создан как замена многим узлам, чтобы уменьшить путаницу среди новичков.' },
  { id: '5', group: '1', name: 'Снейл (Snell Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Известен со времен раннего рыболовства, когда крючки изготавливались из костей и дерева. Используется для обеспечения правильного угла крючка.' },
  { id: '6', group: '2', name: 'Плоский узел (Square Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Один из древнейших узлов, использовался в парусном деле и рыболовстве. Удобен для временного соединения лесок.' },
  { id: '7', group: '2', name: 'Грейпвайн (Grapevine Knot, Double Fisherman’s Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Придуман альпинистами, но стал популярным у рыбаков благодаря своей прочности.' },
  { id: '8', group: '2', name: 'Узел «Кровавый» (Blood Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Исторически использовался рыбаками в Европе для соединения тонких лесок. Его название связано с прочностью фиксации.' },
  { id: '9', group: '2', name: 'Парусный узел (Surgeon’s Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Произошел из хирургической практики, но оказался удобным для рыбаков благодаря надежности.' },
  { id: '10', group: '2', name: 'Альбрайт (Albright Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Изобретен в 1950-х годах известным рыболовом Джимом Альбрайтом. Используется для соединения лесок разного диаметра.' },
  { id: '11', group: '3', name: 'Узел «Овёс» (Bimini Twist)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Универсальный узел для привязки поводков. Предположительно, возник в 20 веке.' },
  { id: '12', group: '3', name: 'Лидер-луп (Leader Loop)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Произошел из хирургической практики, но оказался удобным для рыбаков благодаря надежности.' },
  { id: '13', group: '3', name: 'Перфекшн-луп (Perfection Loop)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Прост в использовании. История уходит корнями к морским узлам, адаптированным для рыболовства.' },
  { id: '14', group: '3', name: 'Узел капучино (Dropper Loop)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Создан для ловли на несколько приманок одновременно. Появился с развитием спортивного рыболовства.' },
  { id: '15', group: '3', name: 'Узел восьмерка (Figure Eight Loop)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Один из древнейших узлов, использовался моряками и рыбаками для создания петель.' },
  { id: '16', group: '4', name: 'Узел Арбор (Arbor Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Специализирован для крепления лески к катушке. Используется со времен появления первых рыболовных катушек.' },
  { id: '17', group: '4', name: 'Узел трилене (Trilene Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Разработан компанией Berkley для использования с их лесками. Надежен для ловли на тяжелые приманки.' },
  { id: '18', group: '4', name: 'Узел FG (FG Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Современный узел, особенно популярный среди любителей плетеных лесок.' },
  { id: '19', group: '4', name: 'Узел Шепард (Shepherd’s Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Использовался пастухами и рыбаками, хорошо подходит для временных соединений.' },
  { id: '20', group: '4', name: 'Узел бабочка (Butterfly Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Из альпинизма перекочевал в рыболовство благодаря своей универсальности.' },
  { id: '21', group: '5', name: 'Узел констриктор (Constrictor Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Его часто называют «зажимным», использовался для временной фиксации сетей и снастей.' },
  { id: '22', group: '5', name: 'Узел строительный (Builder’s Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Возник как вспомогательный узел в строительстве, стал применяться в рыбалке для крепления сетей.' },
  { id: '23', group: '5', name: 'Узел брюшной (Belly Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Удобен для закрепления снастей на лодке или снаряжении.' },
  { id: '24', group: '5', name: 'Узел прусик (Prusik Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Сначала применялся альпинистами, но стал полезен для рыбаков, особенно при ловле на скользящей оснастке.' },
  { id: '25', group: '5', name: 'Узел ласточка (Swallow Knot)', imagePreview: '../../assets/images/knots/palomar(preview).png', imageFull: '../../assets/images/knots/palomar.png', description: 'Декоративный узел, иногда используется для крепления снастей или грузил.' },
]

type ModalProps = {
  title: string;
  message: string;
  image: string;
};

const DEFAULT_IMAGE_FOR_KNOTS = {
  PREVIEW: '../../assets/images/knots/palomar(preview).png',
  FULL: '../../assets/images/knots/palomar.png'
}

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const showCustomAlert = () => {
    setModalVisible(true);
  };

  const [modalProps, setModalProps] = useState<ModalProps | null>(null);

  const openModal = (title: string, message: string, image: string) => {
    setModalProps({ title, message, image });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalProps(null);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.overlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{modalProps?.title}</Text>
              <Text style={styles.modalMessage}>{modalProps?.message}</Text>
              <Image
                source={require('../../assets/images/knots/palomar.png')}
                style={{ width: 100, height: 100 }}
                onError={(error) => console.log('Image load error:', error.nativeEvent.error)}
              />
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.testSquade}>
          <Text style={styles.mainTitle}>Fishing Knots</Text>
          <FlatList
            data={list_knots}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View key={item.id} style={styles.contentContainer}>
                <Text style={styles.titleCard}>{item.name}</Text>
                <TouchableOpacity
                  onPress={() => openModal(item.name, item.description, item.imageFull ? item.imageFull : '../../assets/images/knots/palomar(preview).png')}
                  // onPress={() => Alert.alert(item.name)}
                  style={styles.buttonBase}
                >
                  <Text
                    style={styles.buttonTextMy}
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
  buttonTextMy: {
    color: '#FFFFFF', // Белый текст
    fontSize: 16, // Размер текста
    fontWeight: 'bold', // Жирный шрифт
    textAlign: 'center', // Центрирование текста
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
