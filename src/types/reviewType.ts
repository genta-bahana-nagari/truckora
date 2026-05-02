export type Review = {
  id: string;
  truckId: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
  verified: boolean;
};