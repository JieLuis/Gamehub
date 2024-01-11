import useGenres from "./useGenres";

const useGenre = (genreId?: number) => {
  const { data } = useGenres();
  return data?.results.find((p) => p.id === genreId);
};

export default useGenre;
