import { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

Modal.setAppElement('#__next'); // Ensure accessibility

export default function EducationCard({ src, title, desc }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="text-center shadow-lg p-6 w-80 h-80 rounded-xl my-10 dark:bg-white flex-1">
        <Image
          onClick={openModal}
          src={src}
          width={100}
          height={100}
          alt={title}
          className="cursor-pointer"
        />
        <h3 className="text-lg font-medium pt-8 pb-5 font-bold">{title}</h3>
        <p className="py-2">{desc}</p>
      </div>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false} 
        contentLabel="Full Image Modal"
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50"
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 z-40"
      >
      <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
          onClick={closeModal} // Closes modal on click
        >
        <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevents close when clicking inside modal content
          >
          <Image
            src={src}
            alt={title}
            width={700}
            height={700}
            className="rounded-lg object-contain"
          />
        </div>
      </div>
      </Modal>
    </>
  );
}
