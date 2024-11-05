import { useState } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

Modal.setAppElement('#__next'); // Ensure accessibility

export default function ActivityCard({ src, title, desc, skills }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <div className="basis-1/3 flex-1">
        {/* Clickable image that opens the modal */}
        <Image
          onClick={openModal}
          className="rounded-lg object-cover cursor-pointer"
          width={"80%"}
          height={"50%"}
          layout="responsive"
          src={src}
          alt={title}
        />
        <p className="mt-2 text-center text-gray-600 dark:text-gray-400">{desc}</p>
        <ul className="mt-2 text-center text-gray-600 dark:text-gray-300 list-disc list-inside">
          {skills.map((skill, index) => (
            <li key={index} className="text-left">{skill}</li>
          ))}
        </ul>
      </div>

      {/* Modal to show full image */}
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
            {/* Full-scale image inside modal */}
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
