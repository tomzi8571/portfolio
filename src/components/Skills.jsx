import React, {useMemo, useState} from 'react'
import {skills} from '../data/skills.js'
import Icon from './Icon.jsx'

const TABS = ['All', 'Deployment', 'Frontend', 'Backend', 'Others']

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

    const ShowIconsButton = enabled => <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
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
                    <button
                        type="button"
                        title={`${s.name}${s.category ? ' • ' + s.category : ''}${s.description ? ' • ' + s.description : ''}`}
                        className="btn btn-outline btn-md rounded-full inline-flex items-center gap-2 whitespace-nowrap border-base-content/10 hover:border-base-content/0 bg-base-200 hover:bg-base-300 transition-colors"
                    >
                        {showIcons && (
                            <Icon name={s.name} className="w-6 h-6 p-1" fallback=" "/>
                        )}
                        <span>{s.name}</span>
                    </button>
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
                {ShowIconsButton(false)}

                {/* Flowing, content-width buttons */}
                <SkillButtons/>
            </div>
        </div>

    )
}
