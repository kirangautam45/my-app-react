import React, { useState } from 'react'

const Button = () => {
  const [counts, setCounts] = useState(100)

  function handleincrement() {
    setCounts((counts) => counts + 10)
  }
  return <button onClick={handleincrement}>count is {counts}</button>
}

export default Button
