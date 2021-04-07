import { useEffect, useState } from 'react'
import { fbStorage } from '../firebase/config'

const useStorage = (file: File) => {
    const [error, setError] = useState<any>(null)
    const [progress, setProgress] = useState<number>(0)
    const [url, setUrl] = useState<string | null>(null)

    useEffect(() => {
        // references
        const storageRef = fbStorage.ref(file.name)

        // async
        // события на изменение состояние (для этого нам и progress
        // snap - это "снимок" во время изменение состояния
        storageRef.put(file).on(
            'state_changed',
            (snap) => {
                // bytesTransferred сколько загруженно
                // totalBytes и так понятно
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
                setProgress(percentage)
            },
            (err) => {
                setError(err)
            },
            async () => {
                const url: string = await storageRef.getDownloadURL()
                setUrl(url)
            }
        )
    }, [file])

    return { error, progress, url }
}

export default useStorage
