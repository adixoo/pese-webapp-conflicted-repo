import { create } from "zustand";
const accountDetailsStore = create((set) => ({
   fullName: "",
   phone: "",
   email: "",
   //    requested: false,
   //    changeNumber: (num) =>
   //       set((state) => ({ number: num, requested: state.requested })),
   //    requestedOtp: (bool) =>
   //       set((state) => ({ requested: bool, number: state.number })),
   changeNumber: (num) => set((state) => ({ number: num })),
}));
export default useStore;
