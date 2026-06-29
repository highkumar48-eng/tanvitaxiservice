import { WHATSAPP_BASE } from "./constants";

export const generateWhatsAppLink = (message: string) => {
  return `${WHATSAPP_BASE}${encodeURIComponent(message)}`;
};

export const createBookingMessage = ({
  tripType,
  pickup,
  drop,
  date,
  time,
  vehicle,
  total
}: {
  tripType: string;
  pickup: string;
  drop?: string;
  date: string;
  time: string;
  vehicle: string;
  total: number;
}) => {
  let msg = `Hi Tanvi Taxi Services!\n\n`;
  msg += `*Booking Request:*\n`;
  msg += `Trip Type: ${tripType}\n`;
  msg += `Pickup: ${pickup}\n`;
  if (drop) msg += `Drop: ${drop}\n`;
  msg += `Date: ${date}\n`;
  msg += `Time: ${time}\n`;
  msg += `Vehicle: ${vehicle}\n`;
  if (total > 0) msg += `Estimated Fare: ₹${total}\n\n`;
  msg += `Please confirm availability.`;

  return generateWhatsAppLink(msg);
};

export const createServiceInquiryMessage = (serviceName: string) => {
  return generateWhatsAppLink(
    `Hi, I want to book ${serviceName}. Please provide details and availability.`
  );
};

export const createDriverApplicationMessage = (data: any) => {
  let msg = `Hi, I want to become a driver partner with Tanvi Taxi Services.\n\n`;
  msg += `Name: ${data.name}\n`;
  msg += `Phone: ${data.phone}\n`;
  msg += `WhatsApp: ${data.whatsapp}\n`;
  msg += `City: ${data.city}\n`;
  msg += `Address: ${data.address}\n`;
  msg += `Experience: ${data.experience} years\n`;
  msg += `License: ${data.license}\n`;
  msg += `Vehicle Type: ${data.vehicleType}\n`;
  msg += `Own Vehicle: ${data.ownVehicle}\n`;
  if (data.education) msg += `Education: ${data.education}\n`;
  if (data.languages) msg += `Languages: ${data.languages}\n`;
  if (data.area) msg += `Area: ${data.area}\n`;
  if (data.notes) msg += `Notes: ${data.notes}\n`;

  return generateWhatsAppLink(msg);
};
