import {create} from 'zustand';

export type KnotType = {
	id: string;
	name: string;
	description: string;
};

type FavoritesStore = {
	favorites: KnotType[];
	toggleFavorite: (knot: KnotType) => void;
};

export const useFavoritesStore = create<FavoritesStore>((set, get) => ({
	favorites: [],
	toggleFavorite: (knot: KnotType) =>
		set((state) => ({
			favorites: state.favorites.some((fav) => fav.id === knot.id)
				? state.favorites.filter((fav) => fav.id !== knot.id)
				: [...state.favorites, knot],
		})),
}));
