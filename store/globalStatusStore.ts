import {create} from 'zustand';

type ModalState = {
	isOpen: boolean;
	openModal: (id: string) => void;
	closeModal: () => void;
	toggleModal: () => void;
	openElementId: string;
};

export const useGlobalModalStore = create<ModalState>((set) => ({
	isOpen: false, // По умолчанию модалка закрыта
	openElementId: '',
	openModal: (id) => set({isOpen: true, openElementId: id}),
	closeModal: () => set({isOpen: false, openElementId: ''}),
	toggleModal: () => set((state) => ({isOpen: !state.isOpen})),
}));
