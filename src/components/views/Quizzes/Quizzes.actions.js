import Axios from 'axios';

const clear = () => {
	return {
		type: 'CLEAR'
	};
};

const getQuizzes = (pageNumber) => {
	return (dispatch) => {
		Axios.get(`/api/quizzes?page=${pageNumber}`)
		.then((result) => {
			dispatch(updateList(result.data, pageNumber));
		})
		.catch((error) => {
			console.log(error);
		});
	};
};

const updateList = (list, selectedPage) => {
	return {
		type: 'UPDATE_LIST',
		list,
		selectedPage
	};
};

export {
	clear,
	getQuizzes
};
