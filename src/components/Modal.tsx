import React from 'react'
import { motion } from 'framer-motion'

interface IModal {
    setSelected: React.Dispatch<React.SetStateAction<string | undefined>>
    selected: string | undefined
}

const Modal: React.FC<IModal> = ({ setSelected, selected }) => {
    const handleSubmit = (e: any) => {
        if (e.target.classList.contains('backdrop')) {
            setSelected(undefined)
        }
    }

    return (
        <motion.div
            className="backdrop"
            onClick={(e) => handleSubmit(e)}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
        >
            <motion.img
                src={selected}
                alt="enlarged pic"
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
            />
        </motion.div>
    )
}

export default Modal
