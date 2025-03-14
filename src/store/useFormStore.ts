import create from "zustand";

interface FormData {
  type: string;
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
}

interface FormStore {
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
}

const useFormStore = create<FormStore>((set) => ({
  formData: {
    type: "college",
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  },
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data },
    })),
}));

export default useFormStore;