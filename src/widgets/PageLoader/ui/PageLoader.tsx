import cls from './PageLoader.module.scss'

import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import { Loader } from '@/shared/ui/Loader'

interface PageLoaderProps {
  className?: string
}

export const PageLoader: React.FC<PageLoaderProps> = (props) => {
  const { className } = props

  return (
    <div className={classNames(cls.PageLoader, {}, [className])}>
      <Loader />
    </div>
  )
}
