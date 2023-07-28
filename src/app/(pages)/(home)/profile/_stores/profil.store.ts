import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface Profile {
  profilPicture: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface useProfile {
  profile: Profile;
  updateInput: (name: string, value: string) => void;
  updatePicture: (picture: string) => void;
}

export const useProfile = create<useProfile>()(
  persist(
    (set) => ({
      profile: {
        profilPicture: "",
        firstName: "",
        lastName: "",
        email: "",
      },

      updateInput: (name, value) =>
        set((state) => ({
          profile: {
            ...state.profile,
            [name]: value,
          },
        })),

      updatePicture: (picture) =>
        set((state) => ({
          profile: {
            ...state.profile,
            profilPicture: picture,
          },
        })),
    }),
    {
      name: "profile",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
