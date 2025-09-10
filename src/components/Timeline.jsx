import React from 'react'
import { timeline } from '../data/timeline.js'
import DOMPurify from 'dompurify'

export default function Timeline() {
  const allowedTags = ['strong', 'em', 'b', 'i', 'br', 'a']
  const allowedAttrs = ['href', 'target', 'rel']

  return (
    <ol className="relative border-l border-base-300 ml-3">
      {timeline.map((t, i) => (
        <li key={i} className="mb-8 ml-4">
          <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-base-100" />
          <time className="mb-1 text-xs font-normal leading-none text-base-content/70">
            {t.period}
          </time>
          <h3 className="text-lg font-semibold text-primary">{t.title}</h3>
          <p className="text-base-content/80 font-semibold">{t.company}</p>
          {t.description && (
            <div
              className="text-base-content/60"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(t.description, {
                  ALLOWED_TAGS: allowedTags,
                  ALLOWED_ATTR: allowedAttrs,
                }),
              }}
            />
          )}
          <ul className="mt-2 flex flex-wrap gap-2">
            {t.skills.map((s) => (
              <li key={s} className="badge badge-outline badge-sm">
                {s}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  )
}
