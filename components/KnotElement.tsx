import { List_Knots_Full_Type } from '@/content/main/main_types'
import knotElementStyles from '@/styles/KnotDetailsStyles'
import { TouchableOpacity, View, Text } from 'react-native'

type callBackType = {
    callback: (name: string, description: string, imageFull: string, imageAnimated: string) => void
}

interface KnotElementProps {
    item: List_Knots_Full_Type;
}

export default function KnotElement<List_Knots_Full_Type>({ item }: KnotElementProps) {

    return (
        <View key={item.id} style={knotElementStyles.knotElementContainer}>
            <Text style={knotElementStyles.knotElementTitle}>{item.name}</Text>
            <TouchableOpacity
                // onPress={() => callBack(item.name, item.description, item.imageFull, item.imageAnimated)}
                // onPress={() => Alert.alert(item.name)}
                style={knotElementStyles.knotElementButton}
            >
                <Text
                    style={knotElementStyles.knotElementText}
                >{'Continue'}</Text>
            </TouchableOpacity>
        </View>
    )
}
