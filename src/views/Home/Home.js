import React from 'react';
import CharacterList from '../../components/CharacterList/CharacterList';

const Home = () => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				alignItems: 'center',
				padding: '25px',
			}}
		>
			<h1>Home</h1>
			<CharacterList />
		</div>
	);
};

export default Home;
