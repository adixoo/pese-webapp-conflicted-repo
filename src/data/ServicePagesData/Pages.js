import {
   DTH,
   ElectricityBill,
   FastTag,
   MobileService,
   WaterBill,
   LpgGasBill,
   BroadBand,
   Hospital,
   PipedGas,
} from "@/components/Pages/ServicePages/ServicePages";

export const ServicePages = {
   mobile: {
      heading: "Mobile Recharge",
      name: "Mobile",
      component: <MobileService heading={"Mobile Recharge"} />,
   },
   dth: {
      heading: "DTH Recharge",
      name: "DTH",
      component: <DTH heading={"DTH Recharge"} />,
   },
   fastag: {
      heading: "FastTag",
      name: "FastTag",
      component: <FastTag heading={"FastTag"} />,
   },
   "google-play": {
      heading: "Google Play Redeem",
      name: "Google Play",
      component: "No page here",
   },
   "electricity-bill": {
      heading: "Electricity Bill",
      name: "Electricity Bill",
      component: <ElectricityBill heading={"Electricity Bill"} />,
   },
   "water-bill": {
      heading: "Water Bill",
      name: "Water Bill",
      component: <WaterBill heading={"Water Bill"} />,
   },
   "gas-bill": {
      heading: "LPG/CNG Gas Bill",
      name: "LPG/CNG Gas Bill",
      component: <LpgGasBill heading={"LPG/CNG Gas Bill"} />,
   },
   broadband: {
      heading: "Broadband",
      name: "Broadband",
      component: <BroadBand heading={"Broadband"} />,
   },
   postpaid: {
      heading: "Postpaid",
      name: "Postpaid",
      component: "No page here",
   },
   landline: {
      heading: "Landline",
      name: "Landline",
      component: "No page here",
   },
   hospital: {
      heading: "Hospital",
      name: "Hospital",
      component: <Hospital heading={"Hospital"} />,
   },
   "pipe-gas": {
      heading: "Piped Gas",
      name: "Piped Gas",
      component: <PipedGas heading={"Piped Gas"} />,
   },
   "loan-repayment": {
      heading: "Loan Repayment",
      name: "Loan Repayment",
      component: "No page here",
   },
   "life-insurance": {
      heading: "Life Insurance",
      name: "Life Insurance",
      component: "No page here",
   },
   "bike-insurance": {
      heading: "Bike Insurance",
      name: "Bike Insurance",
      component: "No page here",
   },
   "car-insurance": {
      heading: "Car Insurance",
      name: "Car Insurance",
      component: "No page here",
   },
};
