import { List_Knots_Full_Type, List_Knots_Type, ModalProps } from "@/content/main/main_types";
import { useFavoritesStore } from "@/store/favoriteStore";
import { useGlobalModalStore } from "@/store/globalStatusStore";
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
    item: List_Knots_Type;
    // callBack: (knot: ModalProps) => void
}


export default function ModalWindow({ item }: KnotElementProps) {
    const statusModal = useGlobalModalStore(state => state.isOpen)
    const setCloseModal = useGlobalModalStore(state => state.closeModal)
    const idOpenElement = useGlobalModalStore(state => state.openElementId)
    const [modalVisible, setModalVisible] = useState(false)
    const [modalProps, setModalProps] = useState<List_Knots_Type>({
        id: '',
        name: '',
        group: '',
        description: '',
        imagePreview: 0,
        imageFull: 0,
        imageAnimated: 0
    });
    const addFavorite = useFavoritesStore(state => state.addFavorite)
    const checkAlreadyAddToFavorite = useFavoritesStore(state => state.checkElementInFavorite)
    useEffect(() => {
        if (item.id === idOpenElement && statusModal) {
            setModalProps({
                id: item.id,
                name: item.name,
                group: item.group,
                description: item.description,
                imagePreview: item.imagePreview,
                imageFull: item.imageFull,
                imageAnimated: item.imageAnimated
            });
            setModalVisible(true);


        }

    }, [item, idOpenElement])

    const handleAddFavorite = (knot: List_Knots_Type) => {
        const tempElement = knot
        addFavorite(tempElement)
    }

    const handleRemoveFromFavorite = (knot: string) => {
        const tempElement = knot
        removeFromFavorite(tempElement)
    }
    const removeFromFavorite = useFavoritesStore(state => state.removeFavorite)

    const closeModal = () => {
        setModalVisible(false);
        setCloseModal()
        setModalProps({
            id: '',
            name: '',
            group: '',
            description: '',
            imagePreview: 0,
            imageFull: 0,
            imageAnimated: 0
        });
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
                    <Text style={modalStyles.modalTitle}>{modalProps.name}</Text>
                    <Text style={modalStyles.modalMessage}>{modalProps.description.slice(0, 300)}</Text>
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
                            {checkAlreadyAddToFavorite(modalProps.id) ?
                                <HeartIconSolid size={60} color={'red'} onPress={() =>
                                    handleRemoveFromFavorite(modalProps.id)
                                } />
                                : <HeartIconOutline size={60} color={'red'} onPress={() => handleAddFavorite(modalProps)} />}

                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    )
}
