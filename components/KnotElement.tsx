import { List_Knots_Full_Type, ModalProps } from '@/content/main/main_types'
import knotElementStyles from '@/styles/KnotElementStyles'
import { TouchableOpacity, View, Text } from 'react-native'

type callBackType = {
    callback: (knot: ModalProps) => void
}

interface KnotElementProps {
    item: List_Knots_Full_Type;
    callBack: (knot: ModalProps) => void
}

export default function KnotElement({ item, callBack }: KnotElementProps) {

    return (
        <View key={item.id} style={knotElementStyles.knotElementContainer}>
            <Text style={knotElementStyles.knotElementTitle}>{item.name}</Text>
            <TouchableOpacity
                onPress={() => callBack(item)}
                style={knotElementStyles.knotElementButton}
            >
                <Text
                    style={knotElementStyles.knotElementText}
                >{'Continue'}</Text>
            </TouchableOpacity>
        </View>
    )
}
