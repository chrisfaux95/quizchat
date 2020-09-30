import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faMeh, faFrown, faSmile } from '@fortawesome/free-regular-svg-icons';
import { faBomb } from '@fortawesome/free-solid-svg-icons';

export const setupIcons = () => {
  library.add(faGithub, faBomb, faFlag, faMeh, faFrown, faSmile);
};
