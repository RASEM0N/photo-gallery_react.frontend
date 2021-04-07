import React, { useState } from 'react'

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
            <input type="file" onChange={handleChange} />
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
            </div>
        </form>
    )
}

export default Upload
