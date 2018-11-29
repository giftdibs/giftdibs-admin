export interface Gift {
  dateUpdated?: Date;
  id?: string;
  name?: string;
  user?: {
    firstName: string;
    id: string;
    lastName: string;
  };
}
