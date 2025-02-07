import { useFavoritesStore } from '@/store/favoriteStore'
import { View, Text, FlatList, ImageBackground } from 'react-native'
import favoritesStyles from '../styles/favoritesStyles'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { knots_list_full } from '@/content/main/main_content';
import KnotElement from '@/components/KnotElement';

export default function Favorites() {
    const favorites = useFavoritesStore(state => state.favorites)

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{
                flex: 1
            }}>
                <ImageBackground
                    source={require('../assets/images/background/favorites/8213_waves-blue-gradient-abstraction_1080-2400.jpg')}
                    resizeMode='cover'
                    style={{
                        flex: 1,

                    }}
                >
                    <View style={favoritesStyles.favoritescontainer}>
                        <Text>Favorites</Text>
                        <FlatList
                            style={favoritesStyles.listContainer}
                            data={favorites}
                            keyExtractor={(item) => item.id}

                            renderItem={({ item }) =>
                                <KnotElement item={item} />
                            }
                        />
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </SafeAreaProvider>

    )
}
