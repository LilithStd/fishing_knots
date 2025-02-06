import { List_Knots_Full_Type, ModalProps } from "@/content/main/main_types";
import { useFavoritesStore } from "@/store/favoriteStore";
import modalStyles from "@/styles/modalStyles";
import React, { useEffect, useState } from "react";
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import { HeartIcon as HeartIconOutline } from 'react-native-heroicons/outline'
import { HeartIcon as HeartIconSolid } from 'react-native-heroicons/solid'

type knotType = {
    id: string,
    name: string
}

interface KnotElementProps {
    item: ModalProps;
    // callBack: (knot: ModalProps) => void
}


export default function ModalWindow({ item }: KnotElementProps) {
    const [modalVisible, setModalVisible] = useState(false)
    const [modalProps, setModalProps] = useState<ModalProps | null>(null);
    const addFavorite = useFavoritesStore(state => state.addFavorite)
    const checkAlreadyAddToFavorite = useFavoritesStore(state => state.checkElementInFavorite)

    useEffect(() => {
        if (item.id !== '') {
            setModalProps({
                id: item.id,
                name: item.name,
                description: item.description,
                imageFull: item.imageFull,
                imageAnimated: item.imageAnimated
            });
            setModalVisible(true);
        }

    }, [item])

    const handleAddFavorite = (knot: knotType) => {
        const tempElement = knot.id
        addFavorite({ id: tempElement, name: knot.name })
    }

    const handleRemoveFromFavorite = (knot: string) => {
        const tempElement = knot
        removeFromFavorite(tempElement)
    }
    const removeFromFavorite = useFavoritesStore(state => state.removeFavorite)

    const closeModal = () => {
        setModalVisible(false);
        setModalProps(null);
    };
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={closeModal}
        >
            <View style={modalStyles.overlay}>
                <View style={modalStyles.modalContent}>
                    <Text style={modalStyles.modalTitle}>{modalProps?.name}</Text>
                    <Text style={modalStyles.modalMessage}>{modalProps?.description.slice(0, 300)}</Text>
                    <Image
                        source={modalProps?.imageFull}
                        style={{ width: 200, height: 300 }}
                        onError={(error) => console.log('Image load error:', error.nativeEvent.error)}
                    />
                    <View style={modalStyles.buttonsContainer}>
                        <TouchableOpacity
                            style={modalStyles.closeButton}
                        >
                            <Text style={{ margin: 2 }}>Read full</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={modalStyles.closeButton} onPress={closeModal}>
                            <Text style={modalStyles.buttonText}>Close</Text>
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
        </Modal>
    )
}
