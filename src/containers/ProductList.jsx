import React,{useEffect,useState} from 'react';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';
import axios from 'axios';
const API = 'https://api.escuelajs.co/api/v1/products'; 

const ProductList = () => {
	const [products, setProducts] = useState([]);
	/*funcion anonima
	useEffect((async)=>{
	//apoyar en un recurso que se llama axios nos ayuda a realizar peticiones (instalar)
		const response = await axios.get(API);
		setProducts(response.data);
		},[]);*/
	//arreglo donde podemos tener diferentes elementos o valores, los cuales estaraescuchando para uncambio
	
	useEffect(() => {
		getData();
		}, []);
		
		const getData = async () => {
		const response = await axios.get(API);
		setProducts(response.data);
		console.log(response);
	}
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem />

				))}
				
			</div>
		</section>
	);
}

export default ProductList;