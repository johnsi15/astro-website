import { useState } from 'preact/hooks'

export function Counter() {
  const [count, setCount] = useState(0)

  const styleButton = 'text-4xl rounded border-2 border-slate-200 w-10 h-16 active:scale-95 hover:opacity-70'

  return (
    <div className='flex gap-2 flex-col items-center justify-center'>
      <h3 className='text-3xl m-5 tracking-widest'>Contador: {count}</h3>

      <div className='flex gap-5'>
        <button onClick={() => setCount(count + 1)} className={styleButton}>
          +
        </button>
        <button onClick={() => setCount((currentCount: number) => currentCount - 1)} className={styleButton}>
          -
        </button>
      </div>
    </div>
  )
}
