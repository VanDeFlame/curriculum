import React from 'react';
import './Skills.scss';
import { Technology } from './Technology';
import { useJsonReader } from 'hooks/useJsonReader';
import { Language } from './Language';
import { SkillsModel } from 'models/Skills.model';

function Skills () {
	const [state, setState] = React.useState<SkillsModel>();
	const jsonReader = useJsonReader();

	React.useEffect(() => {
		jsonReader<SkillsModel>('skills')
			.then(resp => setState(resp))
			.catch(err => console.error(err));
	}, []);

	if (!state) return null;
	return (
		<div className='Skills'>
			<h2 className='Skills-title'>Skills</h2>
			<div className='Skills-category category_technologies'>
				<h3>Technologies</h3>
				<div className='Skills-category-container'>{
					state.technologies.map(tech =>
						<Technology
							id={tech.id}
							name={tech.name}
							key={`tech-${tech.id}`}
						/>
					)
				}</div>
			</div>
			<div className='Skills-category category_languages'>
				<h3>Languages</h3>
				<div className='Skills-category-container'>{
					state.languages.map(lang =>
						<Language
							id={lang.id}
							name={lang.name}
							level={lang.level}
							key={`lang-${lang.id}`}
						/>
					)
				}</div>
			</div>
			<div className='Skills-category category_team'>
				<h3>Team</h3>
				<div className='Skills-category-container'>
					<div className='Team'>
						<span>Communicative</span>
					</div>
					<div className='Team'>
						<span>Leadership</span>
					</div>
					<div className='Team'>
						<span>Adaptable</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export { Skills };
