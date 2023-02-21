import { useQuery } from '@tanstack/vue-query';
import { axios } from '../../../utils/axios';
import { getTopCoursesQK } from '../../../utils/queryKeys';
import { z } from 'zod';

const schema = z.array(
	z.object({
		id: z.number(),
		name: z.string(),
		price: z.number(),
		thumbnail: z.string(),
		sales: z.number().min(0),
		rating: z.number().min(0).max(5),
	})
);

const queryKey = getTopCoursesQK();

const queryFn = async () => {
	const response = await axios.get('/courses/bests');
	return schema.parse(response.data);
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
