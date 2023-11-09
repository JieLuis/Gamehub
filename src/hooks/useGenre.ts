import genre from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => ({ data: genre, isLoading: false, error: null });

export default useGenres;
