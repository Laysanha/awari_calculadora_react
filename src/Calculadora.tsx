import { useState } from "react"

function Calculadora() {

  const [value, setValue] = useState('');

  return (
    <div className="rounded-md p-3 bg-slate-200">
      <input 
        type="text" 
        disabled={true}
        value={value}
        className="max-w-[160px] h-9 rounded-md mb-2 p-2 bg-slate-400"
      />
      <div>
        <input 
          type="button" 
          value="AC"
          onClick={ e => setValue('')}
          className="w-8 h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500" 
        />
        <input 
          type="button" 
          value="DE" 
          onClick={ e => setValue(value.slice(0,-1)) }
          className="w-8 h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500" 
        />
        <input 
          type="button" 
          value="%" 
          onClick={ e => setValue(value + e.target.value) }
          className="w-8 h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500" 
        />
        <input 
          type="button" 
          value="/"
          onClick={ e => setValue(value + e.target.value) }
          className="w-8 h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500" 
        />
      </div>
      
      <div>
        <input 
          type="button" 
          value="7" 
          onClick={ e => setValue(value + e.target.value) }
          className="w-8 h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500" 
        />
        <input 
          type="button" 
          value="8" 
          onClick={ e => setValue(value + e.target.value) }
          className="w-8 h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500" 
        />
        <input 
          type="button" 
          value="9" 
          onClick={ e => setValue(value + e.target.value) }
          className="w-8 h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500" 
        />
        <input 
          type="button" 
          value="*"
          onClick={ e => setValue(value + e.target.value) } 
          className="w-8 h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500" 
        />
      </div>
      
      <div>
        <input 
          type="button" 
          value="4" 
          onClick={ e => setValue(value + e.target.value) }
          className="w-8 h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500" 
        />
        <input 
          type="button" 
          value="5" 
          onClick={ e => setValue(value + e.target.value) }
          className="w-8 h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500" 
        />
        <input 
          type="button" 
          value="6" 
          onClick={ e => setValue(value + e.target.value) }
          className="w-8 h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500" 
        />
        <input 
          type="button" 
          value="-" 
          onClick={ e => setValue(value + e.target.value) }
          className="w-8 h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500" 
        />
      </div>

      <div>
        <input 
          type="button" 
          value="1" 
          onClick={ e => setValue(value + e.target.value) }
          className="w-8 h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500" 
        />
        <input 
          type="button" 
          value="2" 
          onClick={ e => setValue(value + e.target.value) }
          className="w-8 h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500" 
        />
        <input 
          type="button" 
          value="3" 
          onClick={ e => setValue(value + e.target.value) }
          className="w-8 h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500" 
        />
        <input 
          type="button" 
          value="+" 
          onClick={ e => setValue(value + e.target.value) }
          className="w-8 h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500" 
        />
      </div>

      <div className="flex">
        <input 
        type="button" 
        value="." 
        onClick={ e => setValue(value + e.target.value) }
        className="min-w-8 h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500" 
      />
        <input 
        type="button" 
        value="0" 
        onClick={ e => setValue(value + e.target.value) }
        className="min-w-8 h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500" 
      />
        <input 
        type="button" 
        value="=" 
        onClick={ e => setValue(eval(value)) }
        className="w-full h-8 m-1 rounded-md bg-blueCalc-800 cursor-pointer text-lg text-slate-100 hover:bg-blueCalc-500"

      />
      </div>
    </div>
  )
}

export default Calculadora
