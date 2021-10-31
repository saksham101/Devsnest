import { User } from '../actions';

const initialUser = {
	username: '',
	profilePicture: '',
};

export interface actionType {
	type: 'UPDATE_USER';
	payload: User;
}

const userReducer = (state: User = initialUser, action: actionType) => {
	switch (action.type) {
		case 'UPDATE_USER':
			return action.payload;
		default:
			return state;
	}
};

export default userReducer;
