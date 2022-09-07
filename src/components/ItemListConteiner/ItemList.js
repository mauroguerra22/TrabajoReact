import  axios  from 'axios';
import React, { useState, useEffect } from 'react';
/* import CardUser from '../Item/Item'; */


const ItemList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios
		.get('https://api.nasa.gov/planetary/apod?api_key=yd5oC0qrC72u5p6WJIKrdApvvdVOrdSd1lzdugLQ'
		).then(res => setUsers(res.users));
	}, []);

	return (
		<div>
		</div>
	);
};

export default ItemList;
