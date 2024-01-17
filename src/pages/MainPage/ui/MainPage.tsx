import React from 'react';
import {useTranslation} from "react-i18next";

function MainPage() {
    const {t} = useTranslation('main-page');
    return (
        <div>{t('Главная страница')}</div>
    );
}

export default MainPage;