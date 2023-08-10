import { TFacilitieName } from "~/Types/Hotel";

export const randomFacilities = () => {
  // random 3 facilities
  const MOCK_FACILITYS: TFacilitieName[] = [
    "Free Wi-Fi",
    "Gym",
    "Parking",
    "Spa",
    "Swimming Pool",
    "Restaurant",
  ];
  const randomFacilities = MOCK_FACILITYS.sort(() => 0.5 - Math.random()).slice(
    0,
    4
  );
  return randomFacilities;
};
