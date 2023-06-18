import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button, ButtonVariables } from '@/shared/ui/Button';

interface BugButtonProps {
  className?: string;
}

export const BugButton: React.FC<BugButtonProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('page-error');
  const [err, setErr] = React.useState(false);

  const toggleThrow = () => setErr(true);

  React.useEffect(() => {
    if (err) {
      throw new Error();
    }
  }, [err]);

  return (

    <Button theme={ButtonVariables.BACKGROUND_INVERTED} onClick={toggleThrow}>

      {t('Thorow')}

    </Button>
  );
};
