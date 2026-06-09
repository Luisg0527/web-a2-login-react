import { useEffect, useState } from 'react'

const LifeCycle = () => {
  const [text, setText] = useState("")

  // componentDidMount
  useEffect(() => {
    console.log("Component cargado")
  }, [])

  // componentDidUpdate
  useEffect(() => {
    console.log("Component actualizado")
  }, [text])

  // componentWillUnmount
  useEffect(() => {
    return () => console.log("Component desmontado")
  }, [])

  // mount || update
  useEffect(() => {
    console.log("Component Siempre")
  })

  return (
    <div className="lifecycle-panel">
      <p className="lifecycle-title">LifeCycle</p>
      <input
        type="text"
        className="lifecycle-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe para ver didUpdate en consola"
      />
    </div>
  )
}

export default LifeCycle
