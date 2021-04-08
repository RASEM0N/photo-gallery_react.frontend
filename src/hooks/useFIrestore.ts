import { useEffect, useState } from 'react'
import { fbFirestore } from '../firebase/config'

interface IData {
    createAt: {
        nanoseconds: number
        seconds: number
    }
    id: string
    url: string
}

interface IFirestore {
    (collection: string): { error: any; data: Array<IData> }
}

const useFirestore: IFirestore = (collection) => {
    const [error, setError] = useState<any>(null)
    const [data, setData] = useState<Array<IData>>([])

    useEffect(() => {
        // запускается каждый раз когда происходят изменения
        // и 1 раз самостоятельно
        // - слушаем обновление данных в реальном времени
        const unsubscribe = fbFirestore
            .collection(collection)
            .orderBy('createAt', 'desc')
            .onSnapshot(
                (snap) => {
                    let documents: any[] = []
                    snap.forEach((doc) => {
                        documents.push({ ...doc.data(), id: doc.id })
                    })
                    setData(documents)
                },
                (error) => {
                    setError(error)
                }
            )

        return () => unsubscribe()
    }, [collection])

    return { data, error }
}

export default useFirestore
