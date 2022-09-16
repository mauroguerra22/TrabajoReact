// 1 - LLamamos a useContext
import React, { useContext } from 'react';
import CardContext from './CardContext';

// 2 - Llamar al contexto exportado
import { ItemsContext } from '../../itemsContext';

const CardList = () => {
	// 3 - usar el useContext hook y pasarle el context exportado
	const [items, setItems] = useContext(ItemsContext);

	console.log(items);

	return (
		<div>
			<h1>Card List</h1>
			{items.map((item) => {
				return <CardContext data={item} key={item.id} />;
			})}
		</div>
	);
};

export default CardList;
