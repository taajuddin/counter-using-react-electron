import React,{useState} from 'react'

const App =()=> {
	
 const [value,setValue]=useState(0)
		
	// const handleUp=()=>setValue(value+1)
	// const handleDown=()=>setValue(value-1)
	// const handleReset=()=>setValue(0)

	return (
		<div className='app'>
			<h1>Counter App</h1>
			<div>
			<b>{value}</b><br />
			<button onClick={()=>setValue(value+1)}>+</button>
			<button onClick={()=>setValue(value-1)}>-</button>
			<button onClick={()=>setValue(0)}>Reset</button>
			</div>	
		</div>
	)
}

export default App
