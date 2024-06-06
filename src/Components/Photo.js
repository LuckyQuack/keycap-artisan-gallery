import React, {useState} from 'react';
import Clown from '../webpics/IMG_4840.JPG';
import Smeg from '../webpics/IMG_4755.JPG';
import Anatomy from '../webpics/IMG_4352.JPG';
import Chika from '../webpics/IMG_4845.JPG';
import Catbus from '../webpics/IMG_4852.JPG';
import Sirius from '../webpics/IMG_4882.JPG';
import Skulls from '../webpics/IMG_4950.JPG';
import Goon from '../webpics/IMG_4955.JPG';
import Power from '../webpics/IMG_4970.JPG';
import ImageModal from './ImageModal';

const Photo = () => {
    const photos = [
        
        {
            image: Power,
            title: "PowerTrip",
            text: "Mastonon SkullF*^# PowerTrip"
        },
        {
            image: Skulls,
            title: "StarWars",
            text: "Mastonon Chosen One & Maul"
        },
        {
            image: Goon,
            title: "Gummy",
            text: "Bogan GoonBlank"
        },
        {
            image: Anatomy,
            title: "BreakinWind",
            text: "HelloCaps Anatomy Blank"
        },
        {
            image: Clown,
            title: "Clown",
            text: "NightCaps EggFace v2"
        },
        {
            image: Smeg,
            title: "Knight",
            text: "NightCaps SmegFace"
        },
        {
            image: Chika,
            title: "Anime",
            text: "Maison Chika Eye"
        },
        {
            image: Catbus,
            title: "Catbus",
            text: "Omniclectic Nekobasu Fang"
        },
        {
            image: Sirius,
            title: "FireFang",
            text: "Artkey x HungerWorks Sirius"
        },
    ];

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setSelectedImage(null);
    };

  return (
    <div className='photo-section'>
      {
        photos.map((data, index) => (
            <div className='photo-info' key={index} onClick={() => openModal(data.image)}>
                <div className='info-boxes'>
                    <img src={data.image} alt={data.title}/>
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
            </div>
        ))}
        <ImageModal isOpen={modalIsOpen} onClose={closeModal} imageSrc={selectedImage} />
    </div>
  );
}

export default Photo;
