import Image from 'next/image';
import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#__next'); // Necessary for accessibility in Next.js

export default function SkillImg({ src, name, description, viewImage }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="w-16 h-16 relative">
        <Image src={src} layout="fill" objectFit="contain" alt={`${name} logo`} />
      </div>
      <div>
        <h4 className="text-xl font-semibold dark:text-white">{name}</h4>
        <p className="text-gray-600 dark:text-gray-400 mb-2">{description}</p>
        <button onClick={openModal} className="text-teal-500 hover:underline">
          Click to view image
        </button>

        {/* Modal for viewing image */}
        <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false} // Disable default overlay close
        contentLabel="Full Image Modal"
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50"
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-40"
      >
        {/* Outer overlay div to detect background clicks */}
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={closeModal} // Closes modal on click
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevents close when clicking inside modal content
          >
            <Image
              src={viewImage}
              alt={`${name} full view`}
              width={800}
              height={600}
              className="rounded-lg object-contain"
            />
          </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
