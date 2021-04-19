import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../stores";
import { decrement, increment } from "../stores/modules/counter";

const useCounter = () => {
	const dispatch = useDispatch();
	const count = useSelector((state: RootState) => state.counter.count);

	const incrementCount = useCallback(() => {
		dispatch(increment());
	}, [dispatch]);

	const decrementCount = useCallback(() => {
		dispatch(decrement());
	}, [dispatch]);

	return {
		count,
		incrementCount,
		decrementCount
	};
};

export default useCounter;
