import { create } from "zustand";
import type { Links } from "@/app/(home)/_types/links.type";
import type { Profile } from "@/app/(home)/_types/profile.type";

export interface useUserProfile {
  links: Links[];
  profile: Profile;
  updateProfileInformations: (name: string, value: string) => void;
  updateProfilePicture: (picture: string) => void;
  updateProfilePictureFile: (file: any) => void;
  generateLink: (link: { id: string; platform: string; url: string }) => void;
  deleteLink: (id: string) => void;
  updateLink: (index: number, url: string) => void;
  setLinks: (links: Links[]) => void;
  setProfile: (profile: Profile) => void;
  updateLinkOrder: (dragIndex: number, hoverIndex: number) => void;
  updatePlatform: (index: number, platform: string) => void;
}

const useUserProfile = create<useUserProfile>()((set) => ({
  links: [],
  profile: {
    profilePictureFile: null,
    profilePicture: "",
    username: "",
    firstname: "",
    lastname: "",
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

  setLinks: (links) =>
    set(() => ({
      links,
    })),

  setProfile: (profile) =>
    set(() => ({
      profile,
    })),

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

  updateProfilePictureFile: (file) =>
    set((state) => ({
      profile: {
        ...state.profile,
        profilePictureFile: file,
      },
    })),
}));

export default useUserProfile;
