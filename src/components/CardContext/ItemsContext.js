import { createContext, useState } from 'react';
import Header2 from '../Header/Header2';
import CardList from './CardList';

// 1 - CREAR EL CONTEXTO
export const ItemsContext = createContext();

// STATE que le vamos a pasar a useState
const initialState = [
	{ id: 45454, name: 'Keyboard Dell', price: 20 },
	{ id: 45458, name: 'Mouse Dell', price: 10 },
	{ id: 45459, name: 'Samsung Monitor', price: 300 },
	{ id: 45453, name: 'MacBook Pro', price: 860 },
	{ id: 45457, name: 'Motorola S10', price: 660 },
];

// 2 - CREAR EL COMPONENTE PROVIDER (ItemsProvider)

export const ItemsProvider = ({ children }) => {
	const [items, setItems] = useState(initialState);

	const foo = () => {
		alert(`Cantidad de items en nuesto carrito: ${items.length}`);
	};

	// 3 - RETORNAMOS NUESTRO CONTEXT CON UN .PROVIDER

	return (
		<ItemsContext.Provider value={[items, setItems, foo]}>
			{/* 4 - DENTRO DE ItemsContext.Provider PASAR CHILDREN */}
			{children}
		</ItemsContext.Provider>
	);
};