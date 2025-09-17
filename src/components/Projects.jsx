import React, {useEffect, useMemo, useState} from 'react'
import {fetchPopularRepos} from '../utils/github.js'
import {site} from '../config/site.js'
import {capitalize} from 'lodash-es'

export default function Projects({query}) {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let alive = true

        async function load() {
            setLoading(true)
            const data = await fetchPopularRepos(site.githubUser)
            if (alive) setRepos(data)
            if (alive) setLoading(false)
        }

        load()
        return () => {
            alive = false
        }
    }, [])

    const filtered = useMemo(() => {
        const q = (query || '').toLowerCase()
        if (!q) return repos
        return repos.filter(
            (r) =>
                r.name.toLowerCase().includes(q) ||
                (r.description || '').toLowerCase().includes(q),
        )
    }, [repos, query])

    if (!site.githubUser || site.githubUser === 'YOUR_GITHUB_USERNAME') {
        return (
            <div className="alert alert-warning max-w-xl">
        <span>
          Set your GitHub username in <code>src/config/site.js</code> to load your popular repositories.
        </span>
            </div>
        )
    }

    function getHomepage(homepageHref) {
        return (
            <a
                href={homepageHref}
                target="_blank"
                rel="noopener noreferrer"
                title={homepageHref}
                aria-label="Homepage"
                className="inline-flex items-center text-base-content/70 hover:text-primary transition-colors"
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
                    <path d="M3 10.5 12 3l9 7.5"/>
                    <path d="M5 9.5V21h5v-6h4v6h5V9.5"/>
                </svg>
            </a>
        )
    }

    return (
        <div>
            {/*<div className="mb-4 flex items-center gap-2">*/}
            {/*    <input*/}
            {/*        value={query}*/}
            {/*        onChange={(e) => onQueryChange(e.target.value)}*/}
            {/*        placeholder="Search projects …"*/}
            {/*        className="input input-bordered w-full sm:w-80"*/}
            {/*    />*/}
            {/*</div>*/}

            {loading ? (
                <div className="text-base-content/70">Loading projects …</div>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.map((r) => {
                        const homepageRaw = (r.homepage || '').trim()
                        const homepageHref = homepageRaw
                            ? /^(https?:)?\/\//i.test(homepageRaw)
                                ? homepageRaw
                                : `https://${homepageRaw}`
                            : ''
                        return (
                            <div key={r.id} className="card bg-base-200/40 hover:bg-base-200/80 border border-base-content/3 transition-colors">
                                <div className="card-body p-5">
                                    <div className="card-title 2xl:text-primary font-semibold">
                                        <a
                                            href={r.html_url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="link link-hover"
                                            title={r.html_url}
                                            aria-label={`${r.name} repository on GitHub`}
                                        >
                                            {capitalize(r.name || '')}
                                        </a>
                                    </div>
                                    {r.description && (
                                        <div className="text-base-content/80 text-sm mt-1">
                                            {r.description}
                                        </div>
                                    )}
                                    <div className="mt-2 text-xs text-base-content/80 flex items-center gap-2">
                                        {/* GitHub icon link */}
                                        <a
                                            href={r.html_url}
                                            target="_blank"
                                            rel="noreferrer"
                                            title="GitHub"
                                            aria-label="GitHub Repo"
                                            className="inline-flex items-center text-base-content/50 hover:text-primary transition-colors"
                                        >
                                            <i className="devicon-github-original text-base" />
                                        </a>
                                        {homepageHref && getHomepage(homepageHref)}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
