import React, { useState } from 'react'
import Images from './components/Images'
import Title from './components/Title'
import Upload from './components/Upload'
import Modal from './components/Modal'

const App: React.FunctionComponent = () => {
    const [selected, setSelected] = useState<string | undefined>(undefined)

    return (
        <div className="App">
            <Title />
            <Upload />
            <Images setSelected={setSelected} />
            {selected && (
                <Modal selected={selected} setSelected={setSelected} />
            )}
        </div>
    )
}

export default App
