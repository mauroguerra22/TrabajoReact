import React, { useState, useEffect } from 'react';
import CardUser from '../Item/Item';

const ItemList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://api.edamam.com/api/nutrition-data')
			.then((response) => response.json())
			.then((json) => setUsers(json));
	}, []);

	return (
		<div>
			{users.map((user) => {
				return <ItemList key={user} data={user} />;
			})}
		</div>
	);
};

export default ItemList;
