import React from 'react'
import { site } from '../config/site.js'

export default function Hero() {
  return (
    <div className="text-center sm:text-left">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
        {site.name}
        <span className="block text-primary text-2xl sm:text-3xl mt-3">
          Full Stack • Cloud Ready • Microservices
        </span>
      </h1>
      <p className="mt-4 text-base-content/80">
        Java, Spring Boot, React, CI/CD, and scalable architectures.
      </p>
    </div>
  )
}
