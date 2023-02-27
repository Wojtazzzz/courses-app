import { useQuery } from '@tanstack/vue-query';
import { axios } from '../../../utils/axios';
import { getFeedbackQK } from '../../../utils/queryKeys';
import { z } from 'zod';

const schema = z.array(
	z.object({
		id: z.number(),
		content: z.string(),
		user_id: z.number(),
	})
);

const queryKey = getFeedbackQK();

const queryFn = async () => {
	const response = await axios.get('/feedback');
	return schema.parse(response.data);
};

export const useFeedback = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey,
		queryFn,
	});

	return {
		feedback: data,
		isLoading,
		isError,
	};
};
