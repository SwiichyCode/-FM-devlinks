import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface Links {
  id: string;
  platform: string;
  url: string;
}

export interface Profile {
  profilePicture: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface useUserProfile {
  links: Links[];
  profile: Profile;
  updateProfileInformations: (name: string, value: string) => void;
  updateProfilePicture: (picture: string) => void;
  generateLink: (link: { id: string; platform: string; url: string }) => void;
  deleteLink: (id: string) => void;
  updateLink: (index: number, url: string) => void;
  updateLinkOrder: (dragIndex: number, hoverIndex: number) => void;
  updatePlatform: (index: number, platform: string) => void;
}

const useUserProfile = create<useUserProfile>()(
  persist(
    (set) => ({
      links: [],
      profile: {
        profilePicture: "",
        firstName: "",
        lastName: "",
        email: "",
      },

      generateLink: (link) =>
        set((state) => ({
          links: [...state.links, link],
        })),

      deleteLink: (id) =>
        set((state) => ({
          links: state.links.filter((link) => link.id !== id),
        })),

      updateLink: (index: number, url: string) =>
        set((state) => {
          const updatedLinks = state.links.map((link, i) =>
            i === index ? { ...link, url } : link
          );
          return { links: updatedLinks };
        }),

      updateLinkOrder: (dragIndex: number, hoverIndex: number) =>
        set((state) => {
          const links = [...state.links];
          const dragLink = links[dragIndex];
          links.splice(dragIndex, 1);
          links.splice(hoverIndex, 0, dragLink);
          return { links };
        }),

      updatePlatform: (index, platform) =>
        set((state) => {
          const updatedLinks = state.links.map((link, i) =>
            i === index ? { ...link, platform } : link
          );
          return { links: updatedLinks };
        }),

      updateProfileInformations: (name, value) =>
        set((state) => ({
          profile: {
            ...state.profile,
            [name]: value,
          },
        })),

      updateProfilePicture: (picture) =>
        set((state) => ({
          profile: {
            ...state.profile,
            profilePicture: picture,
          },
        })),
    }),
    {
      name: "user-profile",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserProfile;
