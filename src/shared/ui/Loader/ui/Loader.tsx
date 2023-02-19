import { classNames } from 'shared/lib/ClassNames/ClassNames';
import './Loader.scss';

interface LoaderProps {
  className?: string;
}

export const Loader: React.FC<LoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames('lds-ellipsis', {}, [className])}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};
