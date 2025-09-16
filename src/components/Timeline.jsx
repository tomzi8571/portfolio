import React from 'react'
import {timeline} from '../data/timeline.js'
import DOMPurify from 'dompurify'

export default function Timeline() {
    const allowedTags = ['strong', 'em', 'b', 'i', 'br', 'a']
    const allowedAttrs = ['href', 'target', 'rel']

    function Icon(t) {
        if (t.icon) {
            const IconComponent = t.icon;
            return (
                <span
                    tabIndex={0}
                    className="w-12 h-12 mr-2 inline-flex items-center justify-center border-1 fill-base-200
                                border-base-content/20 transition-transform duration-200 relative cursor-pointer
                                hover:border-accent/20 focus:border-none focus:m-0 focus:p-0 focus:border-base-content/20
                                focus:border-1 focus:fill-white focus:scale-500 focus:z-20 focus:left-14"
                    // className="inline-flex items-center justify-center w-12 h-12 mr-2 border-2 border-base-content/20 rounded-full transition-transform duration-200 bg-base-200 cursor-pointer outline-none focus:scale-500 focus:z-20"
                >
                    <IconComponent className="w-full h-full" aria-hidden="true"/>
                </span>
            );
        }

        return null;
    }

    return (<ol className="relative border-l border-base-300 ml-3">
        {timeline.map((t, i) => (<li key={i} className="mb-8 ml-4">
            <div className="absolute w-3 h-3 bg-primary rounded-full mt-1.5 -left-1.5 border border-base-100"/>
            <time className="mb-1 text-xs font-normal leading-none text-base-content/70">
                {t.period}
            </time>
            {t.url ? (<span className="flex items-center gap-2">
                            {Icon(t)}
                    <a href={t.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className="block"
                    >
                              <h3 className="text-lg font-semibold text-primary hover:text-accent/40">{t.title}</h3>
                              <p className="text-base-content/80 font-semibold hover:text-accent/40">{t.company}</p>
                    </a>
                          </span>) : (<span className="flex items-center gap-2">
              {t.svg && (<span
                  className="inline-block align-middle"
                  dangerouslySetInnerHTML={{__html: t.svg}}
                  aria-hidden="true"
              />)}
                <div>
                <h3 className="text-lg font-semibold text-primary">{t.title}</h3>
                <p className="text-base-content/80 font-semibold">{t.company}</p>
              </div>
            </span>)}
            {t.description && (<div
                className="text-base-content/60"
                dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(t.description, {
                        ALLOWED_TAGS: allowedTags, ALLOWED_ATTR: allowedAttrs,
                    }),
                }}
            />)}
            <ul className="mt-2 flex flex-wrap gap-2">
                {t.skills.map((s) => (<li key={s} className="badge badge-outline border-base-content/10 badge-sm">
                    {s}
                </li>))}
            </ul>
        </li>))}
    </ol>)
}
