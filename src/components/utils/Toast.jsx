import { motion, AnimatePresence } from 'framer-motion';
import { XIcon } from 'lucide-react';

const Toast = ({ message, type = 'success', isVisible, onClose }) => {
  // Définissons les styles en fonction du type de message
  const styles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500'
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className={`
            fixed bottom-4 right-4 z-50
            min-w-[300px] max-w-md
            p-4 rounded-lg shadow-lg
            text-white
            ${styles[type]}
          `}
        >
          <div className="flex items-center justify-between">
            <p className="flex-1 text-sm font-medium">{message}</p>
            <button
              onClick={onClose}
              className="p-1 ml-4 transition-colors rounded-full hover:bg-white/20"
            >
              <XIcon size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;