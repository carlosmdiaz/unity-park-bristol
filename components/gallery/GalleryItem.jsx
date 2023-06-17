import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import GalleryItemSwiper from './GalleryItemSwiper';

const GalleryItem = (props) => {
  const { image } = props;
  const [isOpen, setIsOpen] = useState(false);

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="w-[360px] h-[180px] mt-4 shadow-xl rounded-lg hover:scale-105 transition-all">
      <Image
        src={image}
        width={400}
        height={400}
        className="md:object-fill object-cover shadow-lg"
        style={{ width: "100%", height: "100%", borderRadius: "15px" }}
        onClick={() => setIsOpen(true)}
      />
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
      >
        <GalleryItemSwiper />
        <button onClick={() => setIsOpen(false)}>Close Modal</button>
      </Modal>
    </div>
  );
};

export default GalleryItem;
