import ServicePageShadowBox from "@/components/Components/Wrappers/ServicePageShadowBox";

import {
   PaymentFromPese,
   PaymentSum,
   ServiceFormInput,
} from "./ServicePageFormComponents";
import {
   ElevatedButtonControlled,
   OutlinedButtonControlled,
} from "@/components/Components/Common/Button";
export function MobileService({ heading }) {
   return (
      <>
         <ServicePageShadowBox heading={heading}>
            <ServiceFormInput
               label={"Phone Number"}
               placeholder={"XXXXXXXXXX"}
               className="mt-8"
            />
            <ServiceFormInput
               label={"Enter Amount"}
               placeholder={"XXXXXXXXXX"}
               className={"mt-4"}
            />

            <PaymentFromPese />
            <PaymentSum value={"99"} />

            <ElevatedButtonControlled
               text={"Proceed"}
               title={"click to proceed"}
               className="w-full"
            />
         </ServicePageShadowBox>
      </>
   );
}
export function Hospital({ heading }) {
   return (
      <>
         <ServicePageShadowBox heading={heading}>hello</ServicePageShadowBox>
      </>
   );
}
export function PipedGas({ heading }) {
   return (
      <>
         <ServicePageShadowBox heading={heading}>hello</ServicePageShadowBox>
      </>
   );
}
export function DTH({ heading }) {
   return (
      <>
         <ServicePageShadowBox heading={heading}>
            <ServiceFormInput
               label={"Customer Id/Vid"}
               placeholder={"XXXXXXXXXX"}
               className="mt-8"
            />
            <ServiceFormInput
               label={"Enter Amount"}
               placeholder={"XXXXXXXXXX"}
               className={"mt-4"}
            />
            <OutlinedButtonControlled
               text={"Customer Info"}
               title={"Get info"}
               className="w-full mt-3"
            />
            <PaymentFromPese />
            <PaymentSum value={"99"} />

            <ElevatedButtonControlled
               text={"Proceed"}
               title={"click to proceed"}
               className="w-full"
            />
         </ServicePageShadowBox>
      </>
   );
}
export function FastTag({ heading }) {
   return (
      <>
         <ServicePageShadowBox heading={heading}>hello</ServicePageShadowBox>
      </>
   );
}
export function ElectricityBill({ heading }) {
   return (
      <>
         <ServicePageShadowBox heading={heading}>hello</ServicePageShadowBox>
      </>
   );
}
export function WaterBill({ heading }) {
   return (
      <>
         <ServicePageShadowBox heading={heading}>hello</ServicePageShadowBox>
      </>
   );
}
export function LpgGasBill({ heading }) {
   return (
      <>
         <ServicePageShadowBox heading={heading}>hello</ServicePageShadowBox>
      </>
   );
}
export function BroadBand({ heading }) {
   return (
      <>
         <ServicePageShadowBox heading={heading}>hello</ServicePageShadowBox>
      </>
   );
}
// export function FastTag({ heading }) {
//    return (
//       <>
//          <ServicePageShadowBox heading={heading}>hello</ServicePageShadowBox>
//       </>
//    );
// }
