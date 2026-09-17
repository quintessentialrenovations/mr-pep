import { create } from "zustand";
import type { Retrieved } from "@/data/types";

export type Msg = {
  id: string;
  role: "user" | "assistant";
  text: string;
  usedModel?: boolean;
  hardStop?: boolean;
};

type DeskState = {
  adult: boolean;
  lang: "en" | "es";
  messages: Msg[];
  pinned: Retrieved[];
  busy: boolean;
  setAdult: () => void;
  setLang: (l: "en" | "es") => void;
  add: (m: Msg) => void;
  setPinned: (p: Retrieved[]) => void;
  setBusy: (b: boolean) => void;
  clear: () => void;
};

function loadAdult() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem("bpx-adult") === "1";
}

export const useDesk = create<DeskState>((set) => ({
  adult: false,
  lang: "en",
  messages: [],
  pinned: [],
  busy: false,
  setAdult: () => {
    if (typeof window !== "undefined") window.localStorage.setItem("bpx-adult", "1");
    set({ adult: true });
  },
  setLang: (lang) => set({ lang }),
  add: (m) => set((s) => ({ messages: [...s.messages, m] })),
  setPinned: (pinned) => set({ pinned }),
  setBusy: (busy) => set({ busy }),
  clear: () => set({ messages: [], pinned: [] }),
}));

export function hydrateAdult() {
  useDesk.setState({ adult: loadAdult() });
}
