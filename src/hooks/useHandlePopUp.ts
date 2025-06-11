import { useState } from 'react';
import { handleDataLayerIntro } from '../utils/handleDataLayerIntro';

export const useHandlePopUp = (title: string) => {
    const [isActive, setIsActive] = useState(false);

    const onOpenPopUp = () => {
        handleDataLayerIntro('click_link', 'click', title);
        // console.log(window.dataLayer);
        document.body.style.overflow = 'hidden';
        return setIsActive(true);
    };
    const onClosePopUp = () => {
        document.body.style.overflow = 'auto';
        return setIsActive(false);
    };

    return {
        isActive,
        onOpenPopUp,
        onClosePopUp,
    };
};
