import { List_Knots_Full_Type, ModalProps } from '@/content/main/main_types'
import knotElementStyles from '@/styles/KnotElementStyles'
import { TouchableOpacity, View, Text } from 'react-native'
import ModalWindow from './modalWindow'
import { useGlobalModalStore } from '@/store/globalStatusStore'
import { List_Knots_Type } from '@/store/favoriteStore'


interface KnotElementProps {
    item: List_Knots_Type;
}

export default function KnotElement({ item }: KnotElementProps) {
    const setOpenModal = useGlobalModalStore(state => state.openModal)
    return (
        <View key={item.id} style={knotElementStyles.knotElementContainer}>
            <ModalWindow item={item} />
            <Text style={knotElementStyles.knotElementTitle}>{item.name}</Text>
            <TouchableOpacity
                onPress={() => setOpenModal(item.id)}
                style={knotElementStyles.knotElementButton}
            >
                <Text
                    style={knotElementStyles.knotElementText}
                >{'Continue'}</Text>
            </TouchableOpacity>
        </View>
    )
}
