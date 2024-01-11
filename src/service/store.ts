import { create } from "zustand";
import { GameQuery } from "../App";

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (setOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => {
    set(() => {
      const output = { gameQuery: { searchText: searchText } };
      console.log(output); // Moved the console log here to log the store
      return { gameQuery: { searchText: searchText } };
    });
  },
  setGenreId: (genreId) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        genre: {
          ...store.gameQuery.genre,
          id: genreId,
        },
      },
    })),
  setPlatformId: (platformId) =>
    set((store) => ({
      gameQuery: {
        ...store.gameQuery,
        platform: { ...store.gameQuery.platform, id: platformId },
      },
    })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
