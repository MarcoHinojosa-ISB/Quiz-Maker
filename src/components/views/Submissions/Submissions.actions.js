import Axios from 'axios';

const clear = () => {
	return {
		type: 'SUBMISSIONS_CLEAR'
	};
};

const getSubmissions = (pageNumber) => {
	return (dispatch) => {
		Axios.get(`/api/submissions?page=${pageNumber}`)
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
		type: 'SUBMISSIONS_UPDATE_LIST',
		list,
		selectedPage
	};
};

export {
  clear,
  getSubmissions
};