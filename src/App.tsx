import React from 'react';
import './App.scss';
import { Jobs } from 'components/Jobs';
import { Contact } from 'components/Contact';
import { Skills } from 'components/Skills';

function App () {
	return (
		<div className='App'>
			<div className='CV'>
				<div className='CV-bg' />

				<div className='CV-Iam'>
					<h3 className='CV-Iam-name'>Alexis Jauge</h3>
					<h1 className='CV-Iam-nickname'>VanDeFlame</h1>
					<h3 className='CV-Iam-area'>FrontEnd Developer</h3>
				</div>

				<Contact />

				<div className='CV-Profile'>
					<h2 className='CV-Profile-title'>Profile</h2>
					<p className='CV-Profile-description'>
						FrontEnd developer dedicated to solve problems,
						develop and optimize features, and improve user experience.
						Always in search of knowledge, open to new experiences, and personal growth.
					</p>
				</div>

				<Jobs />
				<Skills />
			</div>
		</div>
	);
}

export { App };
