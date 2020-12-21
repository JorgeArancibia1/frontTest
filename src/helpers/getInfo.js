// const environment = {
//   dev: `http://localhost:4000/`,
//   prod: `https://back-ripley.herokuapp.com/`,
// };

export const getInfo = async () => {
	
	// const HOST = environment.prod;
	console.log(process.env.ENVIRONMENT)

	const url = `${process.env.ENVIRONMENT}api/products`;
	const response = await fetch(url);
	const data = await response.json();

	return data;
};
