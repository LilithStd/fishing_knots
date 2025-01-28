import KnotElement from '@/components/KnotElement';
import { knots_list, knots_list_full } from '@/content/main/main_content';
import { List_Knots_Type, ModalProps } from '@/content/main/main_types';
import main_styles from '@/styles/mainStyles';
import { useEffect, useState } from 'react';
import { Image, Text, View, FlatList, Button, Alert, TouchableOpacity, Modal, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const DEFAULT_IMAGE_FOR_KNOTS = {
  PREVIEW: '../../assets/images/knots/palomar(preview).png',
  FULL: '../../assets/images/knots/palomar.png'
}

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [knostList, setKnotsList] = useState(knots_list_full)
  // const list_knots_handler = (array: List_Knots_Type[], searchText: string) => {
  //   return array
  //     .filter((item) => item.name.toLowerCase().includes(searchText.toLowerCase()))
  // }

  const [modalProps, setModalProps] = useState<ModalProps | null>(null);

  const openModal = (title: string, message: string, image: string) => {
    setModalProps({ title, message, image });
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalProps(null);
  };

  useEffect(() => {
    if (searchText.length >= 0) {
      setKnotsList(knots_list_full);
    }
  }, [])

  const handleSearch = (searchContext: string) => {
    setSearchText(searchContext)
    if (searchContext.length > 0) {
      const filtered = knots_list_full.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setKnotsList(filtered);
    } else {
      setKnotsList(knots_list_full); // Если поиск пустой, показываем весь список
    }
  };


  return (
    <SafeAreaProvider>
      <SafeAreaView style={main_styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={main_styles.overlay}>
            <View style={main_styles.modalContent}>
              <Text style={main_styles.modalTitle}>{modalProps?.title}</Text>
              <Text style={main_styles.modalMessage}>{modalProps?.message}</Text>
              <Image
                source={require('../../assets/images/knots/palomar.png')}
                style={{ width: 100, height: 100 }}
                onError={(error) => console.log('Image load error:', error.nativeEvent.error)}
              />
              <TouchableOpacity style={main_styles.closeButton} onPress={closeModal}>
                <Text style={main_styles.buttonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View>
          <Text style={main_styles.mainTitle}>Fishing Knots</Text>
          <TextInput
            placeholder='search'
            onChangeText={(text) => handleSearch(text)}
            // onSubmitEditing={handleSearch} // Обработчик нажатия кнопки "Enter" на клавиатуре
            returnKeyType="search" // Указывает, что кнопка Enter на клавиатуре будет отображаться как "Search"
          />
          <Button
            title='Search'
            onPress={() => {
              // setSearch(true)
            }}
          />
          <FlatList
            data={knostList}
            keyExtractor={(item) => item.id}
            style={main_styles.listContainer}
            renderItem={({ item }) =>
              <KnotElement item={item} />
              //   (
              //   <View key={item.id} style={main_styles.contentContainer}>
              //     <Text style={main_styles.titleCard}>{item.name}</Text>
              //     <TouchableOpacity
              //       onPress={() => openModal(item.name, item.description, item.imageFull ? item.imageFull : '../../assets/images/knots/palomar(preview).png')}
              //       // onPress={() => Alert.alert(item.name)}
              //       style={main_styles.buttonBase}
              //     >
              //       <Text
              //         style={main_styles.buttonTextMy}
              //       >{'Continue'}</Text>
              //     </TouchableOpacity>
              //   </View>
              // )
            }
          />
        </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

