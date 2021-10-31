export const getProducts = async () => {
	const response = await fetch('https://fakestoreapi.com/products');
	const data = await response.json();
	return data;
};

export const getSignleProduct = async id => {
	console.log(id);
	const response = await fetch(`https://fakestoreapi.com/products/${id}`);
	const data = await response.json();
	return data;
};
