type TFacilitieName =
  | "Swimming Pool"
  | "Gym"
  | "Restaurant"
  | "Spa"
  | "Free Wi-Fi"
  | "Parking";

export type TFacilities = {
  name: TFacilitieName;
  facility_id: number;
};

export type THotel = {
  name: string;
  stars: number;
  rating: number;
  address: string;
  city: string;
  country: string;
  description: string;
  hotel_id: number;
  facilities: TFacilities[];
};
