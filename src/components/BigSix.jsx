import React from 'react'

const BIG_SIX = [
	{
		title: 'Enterprise Backend Development',
		desc: 'I care deeply about reliable backends—designing Java/Spring Boot services with clean REST APIs that the team can evolve safely.',
		icon: 'spring',
	},
	{
		title: 'Full Stack Engineering',
		desc: 'Frontend work matters to the team’s velocity, so React + Tailwind UIs are built to integrate cleanly with our APIs and deliver fast feedback.',
		icon: 'react',
	},
	{
		title: 'Microservices',
		desc: 'I break systems into small, observable services so teammates can work independently without stepping on each other.',
		icon: 'microservices',
	},
	{
		title: 'CI/CD and Quality',
		desc: 'Continuous delivery is non‑negotiable for me and the team: pipelines (Jenkins/Argo), fast tests, and guarded releases keep us shipping confidently.',
		icon: 'cicd',
	},
	{
		title: 'Agile Teams',
		desc: 'I foster a positive, friendly culture with open communication and mutual support, so the team enjoys the work, thrives, and consistently delivers high‑quality value to customers.',
		icon: 'team',
	},
	{
		title: 'Cloud Ready Deployment',
		desc: '12‑factor practices, stateless processes, and containers keep apps portable and production‑friendly, reducing team toil and incident risk.',
		icon: 'cloud',
	},
]

function Icon({ kind }) {
	const color = 'text-base-content'
	const svgSize = 'w-6 h-6'
	const fontSize = 'text-[1.5rem] leading-none'
	switch (kind) {
		case 'spring':
			return <i className={`devicon-spring-plain ${color} ${fontSize}`} aria-hidden="true" />
		case 'react':
			return <i className={`devicon-react-original ${color} ${fontSize}`} aria-hidden="true" />
		case 'microservices':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round"
					strokeLinejoin="round"
					className={`${svgSize} ${color}`}
					aria-hidden="true"
				>
					<circle cx="5" cy="5" r="2.5" />
					<circle cx="19" cy="5" r="2.5" />
					<circle cx="12" cy="19" r="2.5" />
					<path d="M7.5 6.5 16.5 6.5" />
					<path d="M6.5 7.5 10.5 16.5" />
					<path d="M17.5 7.5 13.5 16.5" />
				</svg>
			)
		case 'cicd':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round"
					strokeLinejoin="round"
					className={`${svgSize} ${color}`}
					aria-hidden="true"
				>
					<path d="M4 12h6" />
					<path d="m9 9 3 3-3 3" />
					<path d="M20 12h-6" />
					<path d="m15 15-3-3 3-3" />
					<path d="M7 20a5 5 0 0 1-3-9" />
					<path d="M17 4a5 5 0 0 1 3 9" />
				</svg>
			)
		case 'team':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round"
					strokeLinejoin="round"
					className={`${svgSize} ${color}`}
					aria-hidden="true"
				>
					<circle cx="12" cy="7" r="3" />
					<path d="M5 20a7 7 0 0 1 14 0" />
					<circle cx="4" cy="9" r="2" />
					<circle cx="20" cy="9" r="2" />
				</svg>
			)
		case 'cloud':
			return (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="1.8"
					strokeLinecap="round"
					strokeLinejoin="round"
					className={`${svgSize} ${color}`}
					aria-hidden="true"
				>
					<path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11.5 2" />
				</svg>
			)
		default:
			return null
	}
}

export default function BigSix() {
	return (
		<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
			{BIG_SIX.map((b) => (
				<div key={b.title} className="card bg-base-200">
					<div className="card-body p-5">
						<div className="flow-root">
							<div className="float-left w-10 h-10 rounded-xl bg-base-100 border border-base-300 mr-3 mb-1 flex items-center justify-center">
								<Icon kind={b.icon} />
							</div>
							<div className="text-primary font-semibold">{b.title}</div>
							<div className="text-base-content/80 text-sm mt-1">{b.desc}</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}
