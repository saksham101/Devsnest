export interface User {
	username: string;
	profilePicture: string;
}

export const updateUser = () => {
	return (dispatch: any) => {
		fetch('/user.json')
			.then(res => res.json())
			.then(data => {
				dispatch({
					type: 'UPDATE_USER',
					payload: data,
				});
			});
	};
};
