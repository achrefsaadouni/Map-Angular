import {Modules} from './Modules';

export class Question {
  id: number;
  description: string;
  title: string;
  cu: string;
  module: Modules = null;
}
