import genres from '../Data/genres';
import { useQuery } from '@tanstack/react-query';
import APIClient from '../Services/api-client';
import ms from 'ms';

const apiClient = new APIClient<Genre>('/genres');

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => useQuery({
    queryKey: ['genres'], 
    queryFn: apiClient.get,
        staleTime: ms('24h'),
});

export default useGenres;