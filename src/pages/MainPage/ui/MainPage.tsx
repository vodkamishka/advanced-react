import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundry';

function MainPage () {
    const { t } = useTranslation('main-page');
    return (
        <div>
            <BugButton/>
            {t('Главная страница')}
        </div>
    );
}

export default MainPage;
