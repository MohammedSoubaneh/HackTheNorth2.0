import React, { useRef, useEffect, useCallback} from 'react';
import CoupleImage from '../Images/oldCouple.jpg';
import ExitButton from '../Images/exitBtn.png';

export const Modal = ({showBio, setshowBio, transitionVideo}) => {

    const modalRef = useRef();

    const closeModal = e => {
        if (modalRef.current === e.target) {
            setshowBio(false);
        }
      };

    const keyPress = useCallback(
        e => {

            if (e.key === 'Escape' && showBio) {  
                setshowBio(false);
            }
        },
        [showBio, setshowBio]
      );

    useEffect(
        () => {

            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
      );
    return (
        <>
        {showBio ? 
        <div className="modalContainer">
            <div className='exitButton' >
                <img  src={ExitButton}  onClick={transitionVideo} width='50px' />
            </div>
            <div className="ourStoryOne">
                Our
            </div>
            <div className='ourStoryTwo'>
                Story
            </div>
            <div className="coupleImage">
                <img src={CoupleImage} width='300px'/>
            </div>
            <div className="dummyText">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua. Vitae suscipit tellus mauris a. Aenean euismod elementum nisi quis eleifend quam.
                </p>
                <p>
                    ipsum a arcu cursus. Lacus luctus accumsan tortor posuere ac. Faucibus pulvinar elementum integer enim neque volutpat. 
                    Consequat nisl vel pretium lectus quam id. Proin sagittis nisl rhoncus mattis rhoncus. 
                    A erat nam at lectus urna. Montes nascetur ridiculus mus mauris vitae.  
                </p>
                <p> quam. Elementum curabitur vitae nunc sed velit dignissim. Pellentesque pulvinar pellentesque habitant morbi tristique. 
                    Enim ut sem viverra aliquet eget sit amet tellus. In fermentum et sollicitudin ac 
                </p>
            </div>
        </div> 
        
        : null}
        
        </>
    )
}
