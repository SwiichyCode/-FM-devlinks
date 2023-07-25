import { create } from "zustand";

interface Customize {
  links: {
    id: string;
    name: string;
    url: string;
  }[];
  addLink: (link: { id: string; name: string; url: string }) => void;
  updateLinkUrl: (index: number, url: string) => void;
  handleOptionChange: (index: number, option: string) => void;
  deleteLink: (id: string) => void;
}

export const useCustomizeStore = create<Customize>((set) => ({
  links: [],

  addLink: (link) =>
    set((state) => ({
      links: [...state.links, link],
    })),

  updateLinkUrl: (index: number, url: string) =>
    set((state) => {
      const updatedLinks = state.links.map((link, i) =>
        i === index ? { ...link, url } : link
      );
      return { links: updatedLinks };
    }),

  handleOptionChange: (index, name) =>
    set((state) => ({
      links: state.links.map((link, i) => {
        if (i === index) {
          return {
            ...link,
            name,
          };
        }
        return link;
      }),
    })),

  deleteLink: (id) =>
    set((state) => ({
      links: state.links.filter((link) => link.id !== id),
    })),
}));
