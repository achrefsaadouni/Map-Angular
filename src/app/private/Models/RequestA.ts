import {Resource} from './Resource';
import {Project} from './Project';
import {MClient} from './MClient';

export class RequestA {
  id: number;
  requestedProfil: string;
  experienceYear: number;
  project: Project;
  startDateMondate: Date;
  endDateMondate: Date;
  Client: MClient;
  depositDate: Date;
  traiter: boolean;
  suggessedResource: Resource;
}
