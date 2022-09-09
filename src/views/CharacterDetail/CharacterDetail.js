import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CharacterDetail.css';
import { useParams } from 'react-router';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

const CharacterDetail = () => {
	const [user, setUser] = useState([]);

	let { id } = useParams();

	useEffect(() => {
		axios(`https://breakingbadapi.com/api/characters/${id}`).then((res) =>
			setUser(res.data)
		);
	}, [id]);

	return (
		<div className='CharacterList-detail'>
			{user.map((char) => {
				return (
					<div>
						<CharacterCard data={char} />
					</div>
				);
			})}
		</div>
	);
};

export default CharacterDetail;
