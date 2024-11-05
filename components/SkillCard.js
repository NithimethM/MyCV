import { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

Modal.setAppElement('#__next'); // Ensure accessibility

export default function SkillCard({ src, title, desc }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="basis-1/3 flex-1">
        <Image
          onClick={openModal}
          className="rounded-lg object-cover cursor-pointer"
          width={"100%"}
          height={"60%"}
          layout="responsive"
          src={src}
          alt={title}
        />
        <p className="text-center mt-2 text-gray-600 dark:text-gray-400">{desc}</p>
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
              width={800}
              height={600}
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
