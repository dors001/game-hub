import genres from '../Data/genres';
import { useQuery } from '@tanstack/react-query';
import APIClient from '../Services/api-client';

const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'], 
    queryFn: apiClient.get,
        staleTime: 24 * 60 * 60 * 1000,
        initialData: {count: genres.length, results: genres}
});

export default useGenres;