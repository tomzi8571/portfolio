import React, { useMemo, useState } from 'react'
import { skills } from '../data/skills.js'

const TABS = ['All', 'Deployment', 'Frontend', 'Backend']

export default function Skills({ filter, onFilterChange }) {
  const [showIcons, setShowIcons] = useState(true)

  const items = useMemo(() => {
    if (filter === 'All') return skills
    return skills.filter((s) => s.category === filter)
  }, [filter])

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t}
              className={`btn btn-sm ${filter === t ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => onFilterChange(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 cursor-pointer select-none">
          <span className="text-sm opacity-80">Show icons</span>
          <input
            type="checkbox"
            className="toggle toggle-primary"
            checked={showIcons}
            onChange={(e) => setShowIcons(e.target.checked)}
            aria-label="Toggle skill icons"
          />
        </label>
      </div>

      {/* Flowing, content-width buttons */}
      <ul className="flex flex-wrap gap-2">
        {items.map((s) => (
          <li key={s.name} className="list-none">
            <button
              type="button"
              title={`${s.name}${s.category ? ' • ' + s.category : ''}`}
              className="btn btn-md btn-outline rounded-full inline-flex items-center gap-2 whitespace-nowrap"
            >
              {(s.svg || s.icon) && showIcons && (
                <span className="inline-flex items-center justify-center w-5 h-5">
                  {s.svg ? (
                    <img src={s.svg} alt="" className="w-4 h-4 object-contain" />
                  ) : s.icon ? (
                    <i className={`${s.icon} text-lg`} aria-hidden="true"></i>
                  ) : (
                    // <span className="text-xs font-semibold">{s.name.charAt(0)}</span>
                    <span className="text-xs font-semibold"></span>
                  )}
                </span>
              )}
              <span>{s.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
