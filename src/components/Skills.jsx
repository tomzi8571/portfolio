import React, {useMemo, useState} from 'react'
import {skills} from '../data/skills.js'
import Icon from './Icon.jsx'

const TABS = ['All', 'Hard/Soft Skills', 'Deployment', 'Frontend', 'Backend', 'Others']

export function Skills({filter, onFilterChange}) {
    const [showIcons, setShowIcons] = useState(true)

    const items = useMemo(() => {
        if (filter === 'All') return skills
        return skills.filter((s) => s.category === filter)
    }, [filter])

    const Selector = () => <>
        {TABS.map((t) => (
            <button
                key={t}
                className={`btn btn-sm ${filter === t ? 'btn-primary' : 'btn-outline'}  border-base-content/30`}
                onClick={() => onFilterChange(t)}
            >
                {t}
            </button>
        ))}
    </>;

    const ShowIconsButton = ({ enabled }) => <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        {enabled ? (
                <label className="flex items-center gap-2 cursor-pointer select-none">
                    <span className="text-sm opacity-80">Show icons</span>
                    <input
                        type="checkbox"
                        className="toggle toggle-primary"
                        checked={showIcons}
                        onChange={(e) => setShowIcons(e.target.checked)}
                        aria-label="Toggle skill icons"
                    />
                </label>)
            : (<></>)
        }
    </div>;

    const SkillButtons = () => <ul className="flex flex-wrap gap-2">
        {items.map((s) => {
            return (
                <li key={s.name} className="list-none">
                    <div className="relative inline-block group">
                        <button
                            type="button"
                            title={`${s.description ? s.description : ''}`}
                            aria-describedby={s.description ? `skill-desc-${s.name.replace(/\s+/g, '-')}` : undefined}
                            className="btn btn-outline btn-md rounded-full inline-flex items-center gap-2 whitespace-nowrap border-base-content/10 hover:border-base-content/0 bg-base-200/20 hover:bg-primary/40 transition-colors"
                        >
                            {showIcons && (
                                <Icon name={s.name} className="w-6 h-6 p-1" fallback=" " />
                            )}
                            <span>{s.name}</span>
                        </button>

                        {s.description && (
                            <div
                                id={`skill-desc-${s.name.replace(/\s+/g, '-')}`}
                                role="tooltip"
                                className="absolute left-1/2 -translate-x-1/2 mt-2 w-64 rounded bg-base-100/90 p-2 text-sm shadow z-10 opacity-0 invisible pointer-events-none transition-opacity duration-150 group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible"
                            >
                                {s.description}
                            </div>
                        )}
                    </div>
                </li>
            )
        })}
    </ul>;

    return (
        <div>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                    <Selector/>
                </div>

                <ShowIconsButton enabled={false} />
                <div className="w-full mt-4">
                {/* Flowing, content-width buttons */}
                <SkillButtons/>
                </div>
            </div>
        </div>

    )
}
