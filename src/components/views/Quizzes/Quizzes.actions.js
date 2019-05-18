import Axios from 'axios';

const getQuizzes = (limit, offset) => {
	return (dispatch) => {
		Axios.get(`/api/quizzes?limit=${limit}&offset=${offset * limit}`)
		.then((result) => {
			dispatch(updateList(result.data, offset+1));
		})
		.catch((error) => {
			console.log(error);
		})
	}
}

const updateList = (list, selectedPage) => {
	return {
		type: 'UPDATE_LIST',
		list,
		selectedPage
	}
}

export {
	getQuizzes,
	updateList
};
