import { createRoot } from 'react-dom/client'
import { SketchPicker } from 'react-color'
import { useState } from 'react'
import Header from './Header'
import Gundam from './Gundam'
import './index.css'

function All() {
	const [active, setActive] = useState(false)
	const [shadow, setShadow] = useState("#000")
	const [color, setColor] = useState({r: 1, g: 1, b: 1})
	const [picker, setPicker] = useState({r: 0, g: 0, b: 0})
	const [part, setPart] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
	const handlePartColor = (index, rgb) => {
		setPicker(rgb)
		if (active === true) setShadow(index.hex)
		else setColor({r: rgb.r/255, g: rgb.g/255, b: rgb.b/255})
	}
    return (
        <>
			<Header handleActive={() => setActive(!active)} handleColor={(colors) => setColor(colors)} handlePart={(parts) => setPart(parts)} />
			<SketchPicker className="Picker" color={picker} onChange={(index) => handlePartColor(index, index.rgb)} />
			<div className="App"><Gundam part={part} color={color} shadow={shadow} /></div>
		</>
    )
}

createRoot(document.getElementById('root')).render(
  <All />,
)
