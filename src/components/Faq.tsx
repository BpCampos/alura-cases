import React from 'react'

interface FAQ {
  answer: string
  question: string
}

export default function Faq({ answer, question }: FAQ) {
  return (
    <li>
      <article>
        <h1 className="text-4xl font-bold mt-6">{question}</h1>
        <p className="bg-violet-800/40 font-bold rounded-xl p-5 border border-purple-950 mt-2 shadow-3xl shadow-violet-950">
          {answer}
        </p>
      </article>
    </li>
  )
}
