import React from 'react'
import useFirestore from '../hooks/useFIrestore'
import { motion } from 'framer-motion'

interface IImages {
    setSelected: React.Dispatch<React.SetStateAction<string | undefined>>
}

const Images: React.FC<IImages> = ({ setSelected }) => {
    const { data } = useFirestore('images')

    return (
        <div className="img-grid">
            {data &&
                data.map((doc) => {
                    return (
                        <motion.div
                            className="img-wrap"
                            key={doc.id}
                            layout
                            whileHover={{ opacity: 1 }}
                            onClick={() => setSelected(doc.url)}
                        >
                            <motion.img
                                src={doc.url}
                                alt="uploaded pic"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1 }}
                            />
                        </motion.div>
                    )
                })}
        </div>
    )
}

export default Images
