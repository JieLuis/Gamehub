import { useQuery } from "@tanstack/react-query";
import { ScreenShot } from "../entities/ScreenShots";
import APIClient from "../service/api-client";

const useScreenShots = (gameId: number) => {
  const apiClient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShots;
