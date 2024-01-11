import usePlatforms from "./usePlatforms";

const usePlatform = (platformId?: number) => {
  const { data } = usePlatforms();
  return data?.results.find((g) => g.id === platformId);
};

export default usePlatform;
