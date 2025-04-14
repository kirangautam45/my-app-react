import React from 'react'

const facts = [
  { label: 'Capital', value: 'Thimphu' },
  { label: 'Official Language', value: 'Dzongkha' },
  { label: 'Government', value: 'Constitutional monarchy' },
  { label: 'Currency', value: 'Ngultrum (BTN)' },
  { label: 'Population', value: 'Under 800,000' },
]

const KeyFact = () => (
  <>
    <h2 className='section-title'>🏔️ Key Facts</h2>
    <ul className='list'>
      {facts.map((info) => (
        <li key={info.label}>
          <strong>{info.label}:</strong> {info.value}
        </li>
      ))}
    </ul>
  </>
)

export default KeyFact
