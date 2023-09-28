import genres from '../Data/genres';
import { useQuery } from '@tanstack/react-query';
import APIClient from '../Services/api-client';
import ms from 'ms';
import { Genre } from '../entities/Genre';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery({
    queryKey: ['genres'], 
    queryFn: apiClient.get,
        staleTime: ms('24h'),
});

export default useGenres;