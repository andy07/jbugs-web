export interface RestBug {
  id: number;
  title: string;
  description: string;
  version: string;
  targetDate: string;
  status: string;
  fixedVersion: string;
  severity: string;
  createdBy: string;
  assignedTo: string;
}

export interface Attachment {
  id: number;
  file: string | ArrayBuffer;
  name: string;
  type: string;
  bugId: number;
}
