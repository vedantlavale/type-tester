import { motion } from "framer-motion";
import { formatPercentage } from "../utils/helpers";

const Results = ({
    errors,
    accuracyPercentage,
    total,
    className = "",
}: {
    errors: number;
    accuracyPercentage: number;
    total: number;
    className?: string;
}) => {
    const initial = { opacity: 0 };
    const animate = { opacity: 1 };
    const transition = { duration: 0.3 };

    return (
        <motion.ul 
            initial={initial}
            animate={animate}
            transition={transition}
            className={`flex flex-col items-center text-primary-400 space-y-3 ${className}`}
        >
            <motion.li 
                className="text-xl font-semibold"
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ ...transition, delay: 0.1 }}
            >
                Results
            </motion.li>
            <motion.li
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ ...transition, delay: 0.2 }}
            >
                Accuracy: {formatPercentage(accuracyPercentage)}
            </motion.li>
            <motion.li 
                className="text-red-500"
                initial={{ x: 20 }}
                animate={{ x: 0 }}
                transition={{ ...transition, delay: 0.3 }}
            >
                Errors: {errors}
            </motion.li>
            <motion.li
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ ...transition, delay: 0.4 }}
            >
                Typed: {total}
            </motion.li>
        </motion.ul>
    );
};

export default Results; 