"use client";

import { MagnifyingGlassIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";

import ListItem from "../PagesComponent/Commons";

import { InputModelOne } from "@/components/Components/AuthPageComponents/Input";
import { ServiceFormInput } from "../ServicePageFormComponents";
import { ElevatedButtonControlled } from "@/components/Components/Common/Button";

export default function ElectricityBillComponent() {
   const open = () => {
      const elem = document.querySelector("#electricity-bill");
      if (!elem) return;
      elem.setAttribute("mode", "active");
   };
   const close = () => {
      const elem = document.querySelector("#electricity-bill");
      if (!elem) return;
      elem.setAttribute("mode", "close");
   };
   return (
      <>
         <div>
            <h3 className="font-semibold text-gray-600 mt-6 mb-4">
               Choose Provider
            </h3>
            <InputModelOne
               placeholder={"Find your provider"}
               className="my-4"
               icon={<MagnifyingGlassIcon />}
            />

            <div className="flow-root max-h-[20rem] overflow-y-auto">
               <ul role="list" className="divide-y divide-gray-100 ">
                  <ListItem click={open} />
                  <ListItem click={open} />
                  <ListItem click={open} />
                  <ListItem click={open} />
                  <ListItem click={open} />
                  <ListItem click={open} />
                  <ListItem click={open} />
                  <ListItem click={open} />
                  <ListItem click={open} />
                  <ListItem click={open} />
                  <ListItem click={open} />
               </ul>
            </div>
         </div>
         <div
            id="electricity-bill"
            mode="close"
            className="trans-slide transition-transform w-full absolute inset-0 bg-white"
         >
            <button
               onClick={close}
               type="button"
               className="font-semibold text-gray-600 mb-4 flex items-center gap-2"
            >
               <ArrowLeftIcon className="h-5 w-5" /> Choose Provider
            </button>
            <div className="flex flex-col h-full justify-between">
               <ServiceFormInput
                  label={"Consumer ID"}
                  placeholder={"XXXXXXXXXX"}
               />
               <ElevatedButtonControlled
                  text={"Proceed"}
                  className="w-full -translate-y-full"
               />
            </div>
         </div>
      </>
   );
}
