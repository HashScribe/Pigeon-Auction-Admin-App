import { BIRD_GENDER } from "../enums";
import { BIRD_IMAGE_NAMES } from "../enums";
interface IBird {
  ringName: string;
  ringNumber: string;
  bornYear: string;
  birdName: string;
  gender: BIRD_GENDER;
  [BIRD_IMAGE_NAMES.MAIN_IMAGE]: string;
  [BIRD_IMAGE_NAMES.LEFT_WING_IMAGE]: string;
  [BIRD_IMAGE_NAMES.RIGHT_WING_IMAGE]: string;
  [BIRD_IMAGE_NAMES.EYE_IMAGE]: string;
  [BIRD_IMAGE_NAMES.TAIL_IMAGE]: string;
  video: string;
  description?: string;
}

export { IBird };
