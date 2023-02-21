import { useQuery } from '@tanstack/vue-query';
import { axios } from '../../../utils/axios';
import { getTopCoursesQK } from '../../../utils/queryKeys';

const queryKey = getTopCoursesQK();

const queryFn = async () => {
	return await axios.get('/courses/bests').then((response) => response.data);
};

export const useTopCourses = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey,
		queryFn,
	});

	return {
		courses: data,
		isLoading,
		isError,
	};
};
