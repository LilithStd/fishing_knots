import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type KnotType = {
	id: string;
	name: string;
};

export type FavoritesState = {
	favorites: KnotType[];
	checkElementInFavorite: (knot: KnotType) => boolean;
	addFavorite: (knot: KnotType) => void;
	removeFavorite: (knotId: string) => void;
};

export const useFavoritesStore = create<
	FavoritesState,
	[['zustand/persist', FavoritesState]]
>(
	persist(
		(set, get) => ({
			favorites: [],
			checkElementInFavorite: (knot: KnotType) => {
				return get().favorites.some((item) => item.id === knot.id);
			},
			addFavorite: (knot: KnotType) => {
				set((state) => {
					// Проверяем, есть ли уже узел в избранном
					const isAlreadyFavorite = state.favorites.some(
						(item) => item.id === knot.id,
					);

					if (isAlreadyFavorite || !knot.id) return state; // Если уже есть или id пустой, не добавляем

					return {favorites: [...state.favorites, knot]};
				});
			},
			removeFavorite: (knotId: string) =>
				set((state) => ({
					favorites: state.favorites.filter((item) => item.id !== knotId),
				})),
		}),
		{
			name: 'favorites-storage', // ключ для AsyncStorage
			storage: createJSONStorage(() => AsyncStorage), // используем AsyncStorage
		},
	),
);
