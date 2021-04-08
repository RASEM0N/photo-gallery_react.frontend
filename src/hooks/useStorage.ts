import { useEffect, useState } from 'react'
import { fbFirestore, fbStorage, timestamp } from '../firebase/config'

interface IStorage {
    (file: File): { error: any; progress: number; url: string | null }
}

const useStorage: IStorage = (file) => {
    const [error, setError] = useState<any>(null)
    const [progress, setProgress] = useState<number>(0)
    const [url, setUrl] = useState<string | null>(null)

    useEffect(() => {
        // references
        const storageRef = fbStorage.ref(file.name) // for upload a photo
        const collectionRef = fbFirestore.collection('images') // for database

        // async
        // события на изменение состояние (для этого нам и progress
        // snap - это "снимок" во время изменение состояния
        storageRef.put(file).on(
            'state_changed',
            (snap) => {
                // bytesTransferred сколько загруженно
                // totalBytes и так понятно
                let percentage: number =
                    (snap.bytesTransferred / snap.totalBytes) * 100
                setProgress(percentage)
            },
            (err) => {
                setError(err)
            },
            async () => {
                const url: any = await storageRef.getDownloadURL()
                const createAt: any = await timestamp()
                await collectionRef.add({
                    url,
                    createAt,
                })
                setUrl(url)
            }
        )
    }, [file])

    return { error, progress, url }
}

export default useStorage
