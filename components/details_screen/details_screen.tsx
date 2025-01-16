import { Text, View } from 'react-native'
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'

type Knot = {
    id: string;
    name: string;
    description: string;
};

type RootStackParamList = {
    Home: undefined;
    Details: { item: Knot };
};

type DetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function Details_Screen({ route }: DetailsScreenProps) {
    const { item } = route.params;

    return (
        <View style={''}>
            <Text style={''}>{item.name}</Text>
            <Text>{item.description}</Text>
        </View>
    );

}