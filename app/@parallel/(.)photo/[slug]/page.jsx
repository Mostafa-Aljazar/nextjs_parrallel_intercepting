import Modal from "@/components/Modal";
import { imgUrls } from "@/data";
import Image from "next/image";

const PhotoPage = ({ params: { slug } }) => {

  return (
    <Modal bg='ligth'>
      <div className="photo_container">
        {
            <Image
            src={imgUrls[slug]}
            alt={imgUrls[slug]}
            width={100}
            height={100}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            sizes="60vw"
            priority
          />
        }
      </div>
    </Modal>
  );
};

export default PhotoPage;
