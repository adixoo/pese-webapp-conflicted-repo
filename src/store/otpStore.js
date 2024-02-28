import { create } from "zustand";
const useStore = create((set) => ({
   number: "",
   //    requested: false,
   //    changeNumber: (num) =>
   //       set((state) => ({ number: num, requested: state.requested })),
   //    requestedOtp: (bool) =>
   //       set((state) => ({ requested: bool, number: state.number })),
   changeNumber: (num) => set((state) => ({ number: num })),
}));
export default useStore;
