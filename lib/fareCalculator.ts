import { FARE_RATES } from "./constants";

type VehicleType = "dzire" | "ertiga" | "innova" | "tempo";

export interface OutstationParams {
  distance: number;
  tripType: "One Way" | "Round Trip";
  vehicle: VehicleType;
  days: number;
  isHilly: boolean;
}

export const calculateOutstationFare = ({
  distance,
  tripType,
  vehicle,
  days,
  isHilly,
}: OutstationParams) => {
  const perKmRate = FARE_RATES.perKm[vehicle];
  
  let totalKm = distance;
  if (tripType === "Round Trip") {
    totalKm = distance * 2;
  }
  
  // Apply minimum KM constraint for round trips per day usually, but PRD says "250 km/day for outstation"
  const minKmBilled = FARE_RATES.minKm * days;
  const billedKm = Math.max(totalKm, minKmBilled);
  
  let baseFare = billedKm * perKmRate;
  
  // Discount for round trip? (PRD says usually discounted ~10%, let's apply a 10% discount to base fare if round trip)
  if (tripType === "Round Trip") {
    baseFare = baseFare * 0.9;
  }

  // Driver Allowance if overnight stay (let's assume days > 1 means overnight, or if they just charge per day)
  // Let's assume Driver Allowance is charged per day
  const driverAllowance = FARE_RATES.driverAllowance * days;

  // Hill charges
  const hillCharges = isHilly ? 500 : 0;

  const subTotal = baseFare + driverAllowance + hillCharges;
  const gst = subTotal * FARE_RATES.gst;
  const total = subTotal + gst;

  return {
    baseFare,
    driverAllowance,
    hillCharges,
    gst,
    total,
  };
};

export const calculateLocalRentalFare = (packageType: "4Hr/40Km" | "8Hr/80Km" | "12Hr/120Km", vehicle: VehicleType) => {
  const rates = {
    "4Hr/40Km": { dzire: 700, ertiga: 900, innova: 1200, tempo: 1800 },
    "8Hr/80Km": { dzire: 1200, ertiga: 1500, innova: 2000, tempo: 3000 },
    "12Hr/120Km": { dzire: 1600, ertiga: 2000, innova: 2800, tempo: 4000 },
  };

  const baseFare = rates[packageType][vehicle];
  const gst = baseFare * FARE_RATES.gst;
  const total = baseFare + gst;

  return {
    baseFare,
    gst,
    total,
  };
};

export const calculateAirportTransferFare = (zone: "Zone 1" | "Zone 2" | "Zone 3", vehicle: VehicleType, isLateNight: boolean) => {
  const rates = {
    "Zone 1": { dzire: 500, ertiga: 700, innova: 900, tempo: 1200 },
    "Zone 2": { dzire: 800, ertiga: 1000, innova: 1400, tempo: 1800 },
    "Zone 3": { dzire: 1100, ertiga: 1400, innova: 1800, tempo: 2200 },
  };

  let baseFare = rates[zone][vehicle];
  
  if (isLateNight) {
    baseFare = baseFare * (1 + FARE_RATES.nightSurcharge);
  }

  const gst = baseFare * FARE_RATES.gst;
  const total = baseFare + gst;

  return {
    baseFare,
    gst,
    total,
  };
};
