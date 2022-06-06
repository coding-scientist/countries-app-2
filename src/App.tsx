import { useState } from 'react';

interface User {
	name: string;
	age: number;
	readonly id: number;
}

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<h1>Hello</h1>
			<div className='country'>
				<p>Hello</p>
				<p>Hello</p>
			</div>
		</>
	);
}

export default App;
