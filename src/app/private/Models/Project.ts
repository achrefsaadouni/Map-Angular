import {MClient} from './MClient';
import {Projectskill} from './projectskill';

export class Project {
  idProject: number;
  projectName: string;
  Address: string;
  Client: MClient;
  LevioNbResource: number;
  projectSkills: Projectskill[];
}
