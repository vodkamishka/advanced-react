import { Button } from 'shared/ui/Button/Button';
import { Theme } from 'app/providers/ThemeProvider';
import { useEffect, useState } from 'react';
import { t } from 'i18next';

interface BugButtonProps {
    className?: string;
}

export const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);

    const onThrow = () => { setError(true); };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
            theme = {Theme.DARK}
        >
            {t('Throw error')}
        </Button>
    );
};
