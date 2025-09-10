import React, { useState } from 'react'

export default function PromptBar({ onPrompt }) {
  const [val, setVal] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (!val.trim()) return
    onPrompt(val)
    setVal('')
  }

  return (
    <form
      onSubmit={submit}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[620px] z-40"
      aria-label="AI prompt"
    >
      <input
        className="input input-bordered w-full shadow-lg"
        placeholder='Try: "show backend skills", "go to projects", "show react projects"'
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
    </form>
  )
}
