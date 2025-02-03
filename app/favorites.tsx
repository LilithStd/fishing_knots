import { useFavoritesStore } from '@/store/favoriteStore'
import { View, Text, FlatList } from 'react-native'

export default function Favorites() {
    const favorites = useFavoritesStore(state => state.favorites)

    return (
        <View>
            <Text>Favorites</Text>
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.id}
                // style={main_styles.listContainer}
                renderItem={({ item }) =>
                    <Text>{item.name}</Text>
                    // <KnotElement item={item} callBack={openModal} />
                }
            />



        </View>
    )
}
