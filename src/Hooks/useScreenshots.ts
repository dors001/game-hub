import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import { Screenshot } from "../entities/Screenshot";


const useScreenshots = (game_pk: string) => {
    const apiClient = new APIClient<Screenshot>(`/games/${game_pk}/screenshots`)

    return useQuery({
        queryKey: ['screenshots', game_pk],
        queryFn: apiClient.getAll,
    })
}

export default useScreenshots;