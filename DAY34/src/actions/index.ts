export const addNote = (payload: string) => {
	return {
		type: 'ADD_NOTE',
		payload,
	};
};

export const removeNote = (idx: number) => {
	return {
		type: 'REMOVE_NOTE',
		payload: idx,
	};
};
