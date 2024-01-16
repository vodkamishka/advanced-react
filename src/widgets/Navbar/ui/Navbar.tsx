import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher/ui/ThemeSwitcher";
import React from "react";

interface NavbarProps {
    className?: string
}

const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={cls.mainLink}>Mane page</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={"about"}>About page</AppLink>
            </div>
        </div>
    );
};

export default Navbar;







