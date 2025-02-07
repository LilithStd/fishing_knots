import KnotElement from '@/components/KnotElement';
import { knots_list_full } from '@/content/main/main_content';
import { List_Knots_Type, ModalProps } from '@/content/main/main_types';
import mainStyles from '@/styles/mainStyles';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useState } from 'react';
import { Image, Text, View, FlatList, Button, Alert, TouchableOpacity, Modal, TextInput, ImageBackground } from 'react-native';
import { HeartIcon as HeartIconOutline } from 'react-native-heroicons/outline'
import { HeartIcon as HeartIconSolid } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useFavoritesStore } from '@/store/favoriteStore';
import ModalWindow from '@/components/modalWindow';


const DEFAULT_IMAGE_FOR_KNOTS = {
  PREVIEW: '../../assets/images/knots/palomar(preview).png',
  FULL: '../../assets/images/knots/palomar.png'
}

const localSource = require('../assets/knots/Palomar/Palomar_video.mp4')

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [knostList, setKnotsList] = useState(knots_list_full)
  const [modalProps, setModalProps] = useState<ModalProps | null>(null);
  const addFavorite = useFavoritesStore(state => state.addFavorite)
  const checkAlreadyAddToFavorite = useFavoritesStore(state => state.checkElementInFavorite)
  const removeFromFavorite = useFavoritesStore(state => state.removeFavorite)
  const favoritesKnots = useFavoritesStore(state => state.favorites)
  const player = useVideoPlayer(localSource, (player) => {
    player.loop = true;
    player.staysActiveInBackground = true;
    modalVisible ? player.play : player.pause
  })

  const openModal = (knot: ModalProps) => {
    setModalProps({
      id: knot.id,
      name: knot.name,
      description: knot.description,
      imageFull: knot.imageFull,
      imageAnimated: knot.imageAnimated
    });
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
  type knotType = {
    id: string,
    name: string
  }

  // const handleAddFavorite = (knot: knotType) => {
  //   const tempElement = knot.id
  //   addFavorite({ id: tempElement, name: knot.name })
  // }

  const handleRemoveFromFavorite = (knot: string) => {
    const tempElement = knot
    removeFromFavorite(tempElement)
  }

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
      <SafeAreaView style={mainStyles.container}>
        <ImageBackground
          source={require('../assets/images/background/main/3687_mountain-landscape-petropolis-brazil_1080x2400.jpg')}
          resizeMode='cover'
          style={{
            flex: 1
          }}
        >


          {/* <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
          >
            <View style={mainStyles.overlay}>
              <View style={mainStyles.modalContent}>
                <Text style={mainStyles.modalTitle}>{modalProps?.name}</Text>
                <Text style={mainStyles.modalMessage}>{modalProps?.description.slice(0, 300)}</Text>
                <Image
                  source={modalProps?.imageFull}
                  style={{ width: 200, height: 300 }}
                  onError={(error) => console.log('Image load error:', error.nativeEvent.error)}
                />
                <View style={mainStyles.buttonsContainer}>
                  <TouchableOpacity
                    style={mainStyles.closeButton}
                  >
                    <Text style={{ margin: 2 }}>Read full</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={mainStyles.closeButton} onPress={closeModal}>
                    <Text style={mainStyles.buttonText}>Close</Text>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    {checkAlreadyAddToFavorite({ id: modalProps?.id ? modalProps.id : '', name: modalProps?.name ? modalProps.name : '' }) ?
                      <HeartIconSolid size={60} color={'red'} onPress={() =>
                        handleRemoveFromFavorite(modalProps?.id ? modalProps.id : '')
                      } />
                      : <HeartIconOutline size={60} color={'red'} onPress={() => handleAddFavorite({ id: modalProps?.id ? modalProps.id : '', name: modalProps?.name ? modalProps.name : '' })} />}

                  </TouchableOpacity>
                </View>

              </View>
            </View>
          </Modal> */}
          {/* <ModalWindow status={ modalVisible } /> */}
          <View>
            <Text style={mainStyles.mainTitle}>Fishing Knots</Text>
            <TextInput
              placeholder='search'
              onChangeText={(text) => handleSearch(text)}
              // onSubmitEditing={handleSearch} // Обработчик нажатия кнопки "Enter" на клавиатуре
              returnKeyType="search" // Указывает, что кнопка Enter на клавиатуре будет отображаться как "Search"
            />
            <FlatList
              data={knostList}
              keyExtractor={(item) => item.id}
              style={mainStyles.listContainer}
              renderItem={({ item }) =>
                <KnotElement item={item} />
              }
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

