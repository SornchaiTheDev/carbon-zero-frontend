export type TFacilitieName =
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

export type TRoom = {
  room_type: string;
  price_per_night: number;
  availability: number;
  room_id: number;
  hotel_id: number;
};

export type TCheapestRoom = {
  Hotel: THotel;
  Room: TRoom;
};
