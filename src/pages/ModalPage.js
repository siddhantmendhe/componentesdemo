import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage(){
    const [showModal,setShowModal]= useState(false);

    const handleClick=()=>{
        setShowModal(true);
    };
    const handleClose=()=>{
        setShowModal(false);
    }

    const actionBar=(
        <div>
            <Button onClick={handleClose} primary>I Accept</Button>
        </div>
    )

    const modal=(
        <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an import agreement for you to accept</p>
        </Modal>
    )

    return (<div>
        <Button onClick={handleClick} primary>
            Open Modal</Button>
        {showModal && modal}

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ante mi, quis tempus leo fermentum ac. Duis lacinia erat ante, a imperdiet eros dictum sit amet. Morbi ornare ultrices felis, at venenatis tortor pretium ut. Curabitur eu quam eu arcu tincidunt hendrerit. Integer eu magna gravida, venenatis massa quis, scelerisque risus. Donec non libero a velit ultrices feugiat mollis et est. Ut id nulla efficitur, pellentesque diam eget, aliquet elit. Donec rutrum hendrerit elit in placerat. Etiam vitae eleifend nunc. In a dolor interdum, viverra justo quis, suscipit purus.

        Sed pretium a leo ut rhoncus. Fusce leo orci, rhoncus sit amet leo at, gravida porta justo. Maecenas sapien nulla, fringilla in scelerisque a, mollis at arcu. Fusce tempor vitae urna at molestie. Etiam nisl lectus, vestibulum vel quam ac, bibendum commodo elit. In hac habitasse platea dictumst. Donec non risus id ante egestas egestas. In hac habitasse platea dictumst. Sed vestibulum hendrerit magna egestas malesuada. Maecenas id enim eros. Mauris lacus nunc, efficitur a urna non, auctor iaculis mauris. Integer luctus laoreet cursus. Cras vitae metus pharetra, bibendum libero non, accumsan purus. Proin vehicula sed libero a iaculis. Donec at tellus non massa maximus hendrerit.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ante mi, quis tempus leo fermentum ac. Duis lacinia erat ante, a imperdiet eros dictum sit amet. Morbi ornare ultrices felis, at venenatis tortor pretium ut. Curabitur eu quam eu arcu tincidunt hendrerit. Integer eu magna gravida, venenatis massa quis, scelerisque risus. Donec non libero a velit ultrices feugiat mollis et est. Ut id nulla efficitur, pellentesque diam eget, aliquet elit. Donec rutrum hendrerit elit in placerat. Etiam vitae eleifend nunc. In a dolor interdum, viverra justo quis, suscipit purus.

        Sed pretium a leo ut rhoncus. Fusce leo orci, rhoncus sit amet leo at, gravida porta justo. Maecenas sapien nulla, fringilla in scelerisque a, mollis at arcu. Fusce tempor vitae urna at molestie. Etiam nisl lectus, vestibulum vel quam ac, bibendum commodo elit. In hac habitasse platea dictumst. Donec non risus id ante egestas egestas. In hac habitasse platea dictumst. Sed vestibulum hendrerit magna egestas malesuada. Maecenas id enim eros. Mauris lacus nunc, efficitur a urna non, auctor iaculis mauris. Integer luctus laoreet cursus. Cras vitae metus pharetra, bibendum libero non, accumsan purus. Proin vehicula sed libero a iaculis. Donec at tellus non massa maximus hendrerit.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ante mi, quis tempus leo fermentum ac. Duis lacinia erat ante, a imperdiet eros dictum sit amet. Morbi ornare ultrices felis, at venenatis tortor pretium ut. Curabitur eu quam eu arcu tincidunt hendrerit. Integer eu magna gravida, venenatis massa quis, scelerisque risus. Donec non libero a velit ultrices feugiat mollis et est. Ut id nulla efficitur, pellentesque diam eget, aliquet elit. Donec rutrum hendrerit elit in placerat. Etiam vitae eleifend nunc. In a dolor interdum, viverra justo quis, suscipit purus.

        Sed pretium a leo ut rhoncus. Fusce leo orci, rhoncus sit amet leo at, gravida porta justo. Maecenas sapien nulla, fringilla in scelerisque a, mollis at arcu. Fusce tempor vitae urna at molestie. Etiam nisl lectus, vestibulum vel quam ac, bibendum commodo elit. In hac habitasse platea dictumst. Donec non risus id ante egestas egestas. In hac habitasse platea dictumst. Sed vestibulum hendrerit magna egestas malesuada. Maecenas id enim eros. Mauris lacus nunc, efficitur a urna non, auctor iaculis mauris. Integer luctus laoreet cursus. Cras vitae metus pharetra, bibendum libero non, accumsan purus. Proin vehicula sed libero a iaculis. Donec at tellus non massa maximus hendrerit.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ante mi, quis tempus leo fermentum ac. Duis lacinia erat ante, a imperdiet eros dictum sit amet. Morbi ornare ultrices felis, at venenatis tortor pretium ut. Curabitur eu quam eu arcu tincidunt hendrerit. Integer eu magna gravida, venenatis massa quis, scelerisque risus. Donec non libero a velit ultrices feugiat mollis et est. Ut id nulla efficitur, pellentesque diam eget, aliquet elit. Donec rutrum hendrerit elit in placerat. Etiam vitae eleifend nunc. In a dolor interdum, viverra justo quis, suscipit purus.

        Sed pretium a leo ut rhoncus. Fusce leo orci, rhoncus sit amet leo at, gravida porta justo. Maecenas sapien nulla, fringilla in scelerisque a, mollis at arcu. Fusce tempor vitae urna at molestie. Etiam nisl lectus, vestibulum vel quam ac, bibendum commodo elit. In hac habitasse platea dictumst. Donec non risus id ante egestas egestas. In hac habitasse platea dictumst. Sed vestibulum hendrerit magna egestas malesuada. Maecenas id enim eros. Mauris lacus nunc, efficitur a urna non, auctor iaculis mauris. Integer luctus laoreet cursus. Cras vitae metus pharetra, bibendum libero non, accumsan purus. Proin vehicula sed libero a iaculis. Donec at tellus non massa maximus hendrerit.
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies ante mi, quis tempus leo fermentum ac. Duis lacinia erat ante, a imperdiet eros dictum sit amet. Morbi ornare ultrices felis, at venenatis tortor pretium ut. Curabitur eu quam eu arcu tincidunt hendrerit. Integer eu magna gravida, venenatis massa quis, scelerisque risus. Donec non libero a velit ultrices feugiat mollis et est. Ut id nulla efficitur, pellentesque diam eget, aliquet elit. Donec rutrum hendrerit elit in placerat. Etiam vitae eleifend nunc. In a dolor interdum, viverra justo quis, suscipit purus.

        Sed pretium a leo ut rhoncus. Fusce leo orci, rhoncus sit amet leo at, gravida porta justo. Maecenas sapien nulla, fringilla in scelerisque a, mollis at arcu. Fusce tempor vitae urna at molestie. Etiam nisl lectus, vestibulum vel quam ac, bibendum commodo elit. In hac habitasse platea dictumst. Donec non risus id ante egestas egestas. In hac habitasse platea dictumst. Sed vestibulum hendrerit magna egestas malesuada. Maecenas id enim eros. Mauris lacus nunc, efficitur a urna non, auctor iaculis mauris. Integer luctus laoreet cursus. Cras vitae metus pharetra, bibendum libero non, accumsan purus. Proin vehicula sed libero a iaculis. Donec at tellus non massa maximus hendrerit.
        </p>        
        </div>)
}

export default ModalPage;