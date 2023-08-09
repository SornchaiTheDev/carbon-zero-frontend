export type TNews = {
  id: number;
  title: string;
  location: string;
  description: string;
  join_detail: string;
  owner_id: number;
  created_at: string;
  images: TImage[];
};

type TImage = {
  created_at: string;
  image: string;
  id: number;
  new_id: number;
};
