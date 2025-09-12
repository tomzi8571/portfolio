import React, {useEffect, useState} from 'react'
import {getIcon} from '../data/Icons.js'
import styles from './Icon.module.css'

/**
 * Icon component
 * Contract:
 *  - name (string, required): key in iconMap
 *  - className (string): applied to outer container; you control sizing via w-/h-/text-* utilities
 *  - link (boolean): when true and icon metadata has href, wraps rendered icon in <a>
 *  - fallback (ReactNode): custom node if icon not found (default: letter placeholder)
 *  - ...rest: forwarded to outer span or anchor
 * Behavior:
 *  - Only this component knows about icon data (centralized lookup via getIcon)
 *  - Devicon: <i> inherits font-size from container (apply text-* externally)
 *  - Image: scales to fill container (w-full h-full object-contain)
 *  - Fallback: simple text label
 *  - Grayscale: include 'grayscale' in className to apply
 */
export default function Icon({name, className = '', link = false, fallback = null, ...rest}) {
    const meta = getIcon(name)

    // Track image load errors and reset when src changes
    const [imgError, setImgError] = useState(false)
    useEffect(() => {
        setImgError(false)
    }, [meta?.src])

    if (!meta) {
        return fallback;
    }
    const title = meta?.title || name
    const baseContainer = (extra = '') => `${styles.iconCQ} ${extra}`.trim()

    const applyGray = /\bgrayscale\b/.test(className) ? 'grayscale' : ''
    let inner = null
    switch (meta.type) {
        case 'devicon':
            inner = (<i
                    className={`${meta.class} leading-none ${applyGray}`.trim()}
                    aria-hidden="true"
                />)
            break
        case 'img':
            if (!imgError) {
                inner = (<img
                        src={meta.src}
                        alt={name}
                        loading="lazy"
                        decoding="async"
                        onError={() => setImgError(true)}
                        className={`block w-full h-full object-contain ${applyGray}`.trim()}
                    />)
            } else {
                if (!meta?.iconShort) {
                    return fallback
                }

                inner = (<span className={`leading-none ${applyGray}`.trim()}>{meta?.iconShort}</span>)
            }
            break
        case 'fallback':
        default:
            inner = (<span className={`leading-none ${applyGray}`.trim()}>{meta?.iconShort}</span>)
            break
    }

    if (link && meta.href) {
        return (<a href={meta.href}
                   target="_blank"
                   rel="noreferrer"
                   title={title}
                   aria-label={title}
                   className={baseContainer(className)}
                   {...rest}
            >
                {inner}
            </a>)
    }

    return (<span
            className={baseContainer(className)}
            title={title}
            aria-label={title}
            {...rest}
        >
            {inner}
        </span>)
}
