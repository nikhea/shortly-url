// @ts-nocheck
import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

interface LinkItems {
  id: number;
  full_short_link: string;
  original_link: string;
}
interface LinkState {
  [x: string]: any;
  links: [];
}

export const useLinkStore = create<LinkState>()(
  devtools(
    persist(
      (set, get) => ({
        links: [],
        addLink: (link: LinkItems) => {
          set((state) => ({
            links: [link, ...state.links],
          }));
        },
        removeLink: (linkid: string) => {
          set((state) => ({
            links: state.links.filter((c) => c.id !== linkid),
          }));
        },
      }),
      {
        name: "links-storage", // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
      }
    )
  )
);
