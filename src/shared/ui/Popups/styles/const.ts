import { DropdownDirection } from 'shared/types/ui';
import popupsCls from './Popups.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'bottom left': popupsCls.bottomLeftDirectionOptions,
  'bottom right': popupsCls.bottomRightDirectionOptions,
  'top left': popupsCls.topLeftDirectionOptions,
  'top right': popupsCls.topRightDirectionOptions,
};
