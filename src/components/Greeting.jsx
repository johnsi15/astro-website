import { useState } from 'preact/hooks'

export default function Greeting({ messages }) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)]

  const [greeting, setGreeting] = useState(randomMessage())

  return (
    <div>
      <h3>{greeting} ¡Gracias por tu visita!</h3>
      <button
        className='border border-blue-600 p-2 rounded-sm bg-blue-900 hover:opacity-75'
        onClick={() => setGreeting(randomMessage())}
      >
        Nuevo saludo
      </button>
    </div>
  )
}
