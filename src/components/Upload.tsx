import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

const Upload: React.FunctionComponent = () => {
    const [file, setFile] = useState<File | null>(null)
    const [error, setError] = useState<string | null>(null)
    const formats = ['image/png', 'image/jpeg']

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let selected: File | undefined = e.target.files?.[0]
        if (selected && formats.includes(selected.type)) {
            setFile(selected)
            setError(null)
        } else {
            setFile(null)
            setError('Unsupported format')
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={handleChange} />
                <span>+</span>
            </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    )
}

export default Upload
