import { Injectable } from '@angular/core';
import { Path } from './path.model';
import { PATHS } from './paths';

@Injectable()
export class PathService {

  constructor() { }

  getPaths() {
    return PATHS;
  }

  getPathById(pathId: number) {
    var pLength = PATHS.length;
    for (var i = 0; i < pLength; i++) {
      if (PATHS[i].id === pathId) {
        return PATHS[i];
      }
    }
  }
}
