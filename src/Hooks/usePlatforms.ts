import { useQuery } from '@tanstack/react-query';
import APIClient from "../Services/api-client";
import ms from 'ms';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.get,
        staleTime: ms('24h'),
});

export default usePlatforms;