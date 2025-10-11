import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
}

const VideoModal = ({ isOpen, onClose, videoSrc }: VideoModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl mx-4 bg-gray-900 rounded-lg border border-gray-700 shadow-xl p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-10 -right-0 text-white bg-gray-800 rounded-full p-1 hover:bg-gray-700 transition-colors"
          onClick={onClose}
        >
          <X size={24} />
        </button>
        <div className="aspect-video">
          <video
            className="w-full h-full rounded-md"
            src={videoSrc}
            controls
            autoPlay
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
