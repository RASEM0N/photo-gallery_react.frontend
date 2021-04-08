import React from 'react'
import Images from './components/Images'
import Title from './components/Title'
import Upload from './components/Upload'

const App: React.FunctionComponent = () => (
    <div className="App">
        <Title />
        <Upload />
        <Images />
    </div>
)

export default App
