import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../CharacterCard/CharacterCard';
import './CharacterList.css';

//LINK ROUTER DOM
import { Link } from 'react-router-dom';

const CharacterList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios('https://breakingbadapi.com/api/characters').then((res) =>
			setUsers(res.data)
		);
	}, []);

	return (
		<div className='CharacterList-container'>
			{users.map((user) => {
				return (
					<div key={user.char_id}>
						<Link to={`/detail/${user.char_id}`} className='Link'>
							<CharacterCard data={user} />
						</Link>
					</div>
				);
			})}
		</div>
	);
};

export default CharacterList;
