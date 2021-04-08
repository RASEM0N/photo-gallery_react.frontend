import React from 'react'
import useFirestore from '../hooks/useFIrestore'

const Images: React.FunctionComponent = () => {
    const { data } = useFirestore('images')
    console.log(data)

    return (
        <div className="img-grid">
            {data &&
                data.map((doc) => {
                    return (
                        <div className="img-wrap" key={doc.id}>
                            <img src={doc.url} alt="..." />
                        </div>
                    )
                })}
        </div>
    )
}

export default Images
