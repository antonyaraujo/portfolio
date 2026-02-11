
import { motion, AnimatePresence } from 'framer-motion';

interface SlideModalProps {
  isOpen: boolean;
  onClose: () => void;
  slideUrl: string;
}

export function SlideModal({ isOpen, onClose, slideUrl }: SlideModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the modal content
            className="relative bg-background p-2 rounded-lg shadow-2xl w-11/12 max-w-4xl cursor-default"
          >
            <button
              onClick={onClose}
              className="absolute -top-3 -right-3 z-10 bg-primary text-background rounded-full h-8 w-8 flex items-center justify-center text-xl font-bold hover:scale-110 transition-transform"
              aria-label="Close"
            >
              &times;
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={slideUrl}
                frameBorder="0"
                width="100%"
                height="100%"
                allowFullScreen
                className="rounded-md"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
