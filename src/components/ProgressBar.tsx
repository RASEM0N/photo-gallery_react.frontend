import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

interface IProgressBarProps {
    file: File
    setFile: React.Dispatch<React.SetStateAction<File | null>>
}

const ProgressBar: React.FC<IProgressBarProps> = ({ file, setFile }) => {
    const { url, progress } = useStorage(file)

    useEffect(() => {
        if (url) {
            setFile(null)
        }
    }, [url, setFile])

    return (
        <div
            className="progress-bar"
            style={{
                width: progress + '%',
            }}
        >
            &nbsp;
        </div>
    )
}

export default ProgressBar
