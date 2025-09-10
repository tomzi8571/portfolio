import React from 'react'
import { site } from '../config/site.js'

export default function Contact() {
  const githubUrl = site.githubUser ? `https://github.com/${site.githubUser}` : 'https://github.com'
  const linkedinUrl = site.linkedin || 'https://www.linkedin.com/in/thomaszillinger/'

  return (
    <div className="space-y-4">
      <p className="text-base-content/80">
        Reach out for opportunities, collaborations, or consulting.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        {/* Email button */}
        <a
          className="btn btn-primary inline-flex items-center gap-2"
          href={`mailto:${site.email}`}
          aria-label="Email"
          title={site.email}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path d="M4 6h16v12H4z" />
            <path d="m22 6-10 7L2 6" />
          </svg>
          Email
        </a>

        {/* GitHub button */}
        <a
          className="btn btn-outline inline-flex items-center gap-2"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          title={githubUrl}
        >
          <i className="devicon-github-original text-base" aria-hidden="true"></i>
          GitHub
        </a>

        {/* LinkedIn button */}
        <a
          className="btn btn-outline inline-flex items-center gap-2"
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          title={linkedinUrl}
        >
          <i className="devicon-linkedin-plain text-base" aria-hidden="true"></i>
          LinkedIn
        </a>
      </div>
    </div>
  )
}
