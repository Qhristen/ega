import {library} from "@fortawesome/fontawesome-svg-core";

import {
  fab,
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Init = () => {
  library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faGithub);
};
export default Init;
