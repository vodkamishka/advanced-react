import {classNames} from "shared/lib/classNames/classNames";
import cls from './LangSwitcher.module.scss';
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {Theme} from "app/providers/ThemeProvider";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button theme={Theme.DARK} onClick={toggle} className={classNames(cls.LangSwitcher, {}, [className])}>
            {t('Язык')}
        </Button>
    );
};

