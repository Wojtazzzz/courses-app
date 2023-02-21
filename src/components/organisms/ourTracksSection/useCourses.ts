import { useQuery } from '@tanstack/vue-query';
import { axios } from '../../../utils/axios';

export const useCourses = () => {
	const queryFn = async () => {
		return await axios.get('/courses').then((response) => response.data);
	};

	const queryKey = ['courses'];

	const { data, isLoading, isError } = useQuery({
		queryKey,
		queryFn: async () => await queryFn(),
	});

	return {
		courses: data,
		isLoading,
		isError,
	};
};
