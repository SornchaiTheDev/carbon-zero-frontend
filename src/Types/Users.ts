export type THistory = {
  id: number;
  user_id: number;
  donate_amount: number;
  created_at: string;
  carbon_offset: number;
  fee: number;
};

export type TUser = {
  email: string;
  id: number;
  lastname: string;
  mobile_phone: string;
  name: string;
  user_type_id: number;
  xp: number;
  user_carbon: THistory[];
};
