import {MandateId} from './MandateId';
import {Resource} from './Resource';
import {Project} from './Project';

export class Mandate {
  archived: boolean;
  montant: number;
  gps_id: number;
  mandateId: MandateId;
  ressource: Resource;
  gps: Resource;
  projet: Project;
}
