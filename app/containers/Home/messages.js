/*
 * Home Messages
 *
 * This contains all the text for the Home component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.containers.HomePage';

export default defineMessages({
  emptyArray: {
    id: `${scope}.empty_array.header`,
    defaultMessage:
      'There are no inputs. Add values by clicking on "Add String" button',
  },
  description: {
    id: `${scope}.description.header`,
    defaultMessage: 'Here are the string entries you have added',
  },
});
