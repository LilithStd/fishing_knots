import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Тип узла
export type List_Knots_Type = {
	id: string;
	group: string;
	name: string;
	imagePreview: number;
	imageFull: number;
	imageAnimated: number;
	description: string;
};

// Тип состояния избранного
export type FavoritesState = {
	favorites: List_Knots_Type[];
	checkElementInFavorite: (knot: string) => boolean;
	addFavorite: (knot: List_Knots_Type) => void;
	removeFavorite: (knotId: string) => void;
};

// Zustand-хранилище
export const useFavoritesStore = create<FavoritesState>()(
	persist(
		(set, get) => ({
			favorites: [],

			checkElementInFavorite: (knot) => {
				return get().favorites.some((item) => item.id === knot);
			},

			addFavorite: (knot) => {
				set((state) => {
					if (state.favorites.some((item) => item.id === knot.id) || !knot.id) {
						return state;
					}
					return {favorites: [...state.favorites, knot]};
				});
			},

			removeFavorite: (knotId) =>
				set((state) => ({
					favorites: state.favorites.filter((item) => item.id !== knotId),
				})),
		}),
		{
			name: 'favorites-storage',
			storage: createJSONStorage(() => AsyncStorage),
		},
	),
);
