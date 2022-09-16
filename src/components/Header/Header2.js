import { ItemsContext } from '../../itemsContext';

const Header2 = () => {
	const [items, setItems, foo] = useContext(ItemsContext);

	const newState = [
		{ id: 45454, name: 'New Keyboard Dell Bluetooth', price: 220 },
		{ id: 45458, name: 'New Mouse Dell Bluetooth', price: 60 },
		{ id: 45458, name: 'Headeset Bluetooth', price: 180 },
	];

	return (
		<nav className='Navigation'>
			<p>Carrito: {items.length}</p>
			<button onClick={() => setItems(newState)}>Change State</button>
			<button onClick={() => setItems([])}>Delete</button>
			<button onClick={() => foo()}>items Quantity</button>
		</nav>
	);
};

export default Header2;