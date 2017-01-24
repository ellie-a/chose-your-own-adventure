import { Path } from './path.model';
import { Choice } from './choice.model';

export const PATHS: Path[] = [
  new Path (
    //Path Id
    1,
    //Path description
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //Path choices
    [
      new Choice("Do something cool", 2),
      new Choice("Do something else cool", 3)
    ]) 
]
