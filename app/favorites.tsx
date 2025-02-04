import { useFavoritesStore } from '@/store/favoriteStore'
import { View, Text, FlatList } from 'react-native'
import favoritesStyles from '../styles/favoritesStyles'

export default function Favorites() {
    const favorites = useFavoritesStore(state => state.favorites)

    return (
        <View>
            <Text>Favorites</Text>
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.id}
                style={favoritesStyles.favoritescontainer}
                renderItem={({ item }) =>
                    <Text>{item.name}</Text>
                }
            />



        </View>
    )
}
