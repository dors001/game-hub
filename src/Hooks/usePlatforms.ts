import { useQuery } from '@tanstack/react-query';
import APIClient from "../Services/api-client";
import ms from 'ms';
import { Platform } from '../entities/Platform';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.get,
        staleTime: ms('24h'),
});

export default usePlatforms;