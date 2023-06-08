import React from 'react';
import './Jobs.scss';
import { useJsonReader } from 'hooks/useJsonReader';
import { JobExp } from 'models/JobExp.model';

function Jobs () {
	const [state, setState] = React.useState<JobExp[]>();
	const jsonReader = useJsonReader();

	React.useEffect(() => {
		jsonReader<JobExp[]>('jobsExperience')
			.then(resp => setState(resp))
			.catch(err => console.error(err));
	}, []);

	if (!state) return null;
	return (
		<div className='Jobs'>
			<h2 className='Jobs-title'>Jobs</h2>
			{ state.map(job =>
				<div
					key={`job-${job.company}`}
					className='Jobs-experience'
				>
					<h4 className='Jobs-experience-position'>
						{ job.position }
					</h4>

					<div className='Jobs-experience-container'>
						<h3 className='Jobs-experience-company'>
							{ job.company }
						</h3>

						<div className='Jobs-experience-date'>
							<span className='date_start'>
								{ job.startDate }
							</span>
							<span className='date_separator'>
                &mdash;
							</span>
							<span className='date_end'>
								{ job.endDate }
							</span>
						</div>
					</div>
					<ul className='Jobs-experience-info'>
						{ job.info.map((info, index) =>
							<li key={`${job.company}-info-${index}`}>
								{ info }
							</li>
						)}
					</ul>

				</div>
			)}
		</div>
	);
}

export { Jobs };
