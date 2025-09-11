import React from 'react'
import { site } from '../config/site.js'

const items = [
	{
		name: 'React',
		type: 'devicon',
		icon: 'devicon-react-original',
		href: 'https://react.dev',
	},
	{
		name: 'Tailwind CSS',
		type: 'devicon',
		icon: 'devicon-tailwindcss-plain',
		href: 'https://tailwindcss.com',
	},
	{
		name: 'jsDelivr',
		type: 'img',
		src: 'https://cdn.simpleicons.org/jsdelivr',
		href: 'https://www.jsdelivr.com',
	},
	{
		name: 'Devicon',
		type: 'devicon',
		icon: 'devicon-devicon-plain colored',
		href: 'https://devicon.dev',
	},
	{
		name: 'SI',
		type: 'fallback',
		href: 'https://github.com/tandpfun/skill-icons',
	},
	{
		name: 'Simple Icons',
		type: 'img',
		src: 'https://cdn.simpleicons.org/simpleicons',
		href: 'https://simpleicons.org',
	},
	{
		name: 'Netlify',
		type: 'devicon',
		icon: 'devicon-netlify-plain',
		href: 'https://www.netlify.com',
	},
	{
		name: 'GitHub',
		type: 'devicon',
		icon: 'devicon-github-original',
		href: 'https://github.com',
	},
    {
		name: 'GitHub Copilot',
		type: 'img',
		src: ' https://cdn.simpleicons.org/githubcopilot',
		href: 'https://github.com',
	},
]

export default function Credits() {
	const year = new Date().getFullYear()
	const linkedin = site.linkedin || ''
	return (
		<div className="section py-10 border-t border-base-300">
			<div className="text-sm opacity-70 mb-3">I built this page mostly using</div>
			<ul className="flex flex-wrap items-center justify-center gap-8 py-8">
				{items.map((it) => (
					<li key={it.name} className="list-none">
						<a
							href={it.href}
							target="_blank"
							rel="noreferrer"
							title={it.name}
							aria-label={it.name}
							className="inline-flex items-center justify-center w-12 h-12 opacity-70 hover:opacity-100 transition"
						>
							{it.type === 'devicon' && (
								<i
									className={`${it.icon} text-4xl text-base-content grayscale`}
									aria-hidden="true"
								></i>
							)}
							{it.type === 'img' && (
								<img
									src={it.src}
									alt=""
									className="w-14 h-8 object-contain grayscale"
								/>
							)}
							{it.type === 'fallback' && (
								<span className="inline-flex items-center justify-center w-14 h-10 rounded-full border border-base-300 text-[26px] font-semibold">
									{it.name}
								</span>
							)}
						</a>
					</li>
				))}
			</ul>
			<div className="text-sm opacity-70 mb-3">
				I appreciate how valuable and helpful these services and components are in building this profile page.
				Thanks to everyone behind these projects for making the work so much easier! A special shout‑out to
				GitHub Copilot, which assisted massively in figuring out how to use the components and Tailwind CSS classes.
			</div>

			{/* Legal / Footer small print */}
			<div className="max-w-3xl mx-auto text-xs text-base-content/70 space-y-2">
				<div className="pt-8 font-semibold text-xl opacity-80 mb-2">Legal</div>

				{/* Privacy */}
				<div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-md">
					<input type="checkbox" />
					<div className="collapse-title p-3">Privacy</div>
					<div className="collapse-content p-3 pt-0">
						<p>
							No tracking cookies, no analytics, and no contact form. When you click Email,
							your mail client opens and you choose what to send. This site serves static
							files; assets are delivered via GitHub Pages and CDNs (e.g., jsDelivr), which
							may process IP addresses for delivery.
						</p>
						<p className="mt-2">
							If you later add analytics or a form, update this notice and provide consent
							where required (GDPR/ePrivacy).
						</p>
					</div>
				</div>

				{/* Licenses */}
				<div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-md">
					<input type="checkbox" />
					<div className="collapse-title p-3">Licenses</div>
					<div className="collapse-content p-3 pt-0 space-y-1">
						<p>
							Code: MIT. Content (text/images): CC BY‑NC 4.0. Third‑party
							assets remain the property of their owners.
						</p>
						<p>
							Notable dependencies include React, Vite, Tailwind CSS, DaisyUI, Devicon,
							Simple Icons, and jsDelivr. See their sites for licenses and terms.
						</p>
					</div>
				</div>

				{/* Imprint / Impressum (Austria) */}
				<div className="collapse collapse-arrow bg-base-100 border border-base-300 rounded-md">
					<input type="checkbox" />
					<div className="collapse-title p-3">Imprint (Impressum)</div>
					<div className="collapse-content p-3 pt-0 space-y-1">
						<p>Responsible for content (Medieninhaber): {site.name}</p>
						{site.email && (
							<p>
								Email: <a className="link" href={`mailto:${site.email}`}>{site.email}</a>
							</p>
						)}
						{linkedin && (
							<p>
								LinkedIn: <a className="link" href={linkedin} target="_blank" rel="noreferrer">{linkedin}</a>
							</p>
						)}
						<p>Purpose of the website: Personal portfolio and contact information.</p>
					</div>
				</div>

				{/* Copyright */}
				<div className="pt-3 text-center opacity-70">© {year} {site.name}. All rights reserved.</div>
			</div>
		</div>

	)
}
