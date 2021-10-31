interface addNoteAction {
	type: 'ADD_NOTE';
	payload: string;
}

interface removeNoteAction {
	type: 'REMOVE_NOTE';
	payload: number;
}

type actionType = addNoteAction | removeNoteAction;

const notesReducer = (state: string[] = [], action: actionType) => {
	switch (action.type) {
		case 'ADD_NOTE':
			return [...state, action.payload];

		case 'REMOVE_NOTE':
			return state.filter((_, idx) => idx != action.payload);

		default:
			return state;
	}
};

export default notesReducer;
