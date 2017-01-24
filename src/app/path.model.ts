import { Choice } from './choice.model';

export class Path{
  constructor(
    public id: number
    public description: string,
    public options: Choice[],
    )
    { }
}
