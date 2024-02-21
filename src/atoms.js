import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});
export const notificationsAtom = atom({
  key: "notificationsAtom",
  default: 12,
});
export const messagingAtom = atom({
  key: "messagingAtom",
  default: 1,
});

export const totalNotifications = selector({
  key: "totalNotifications",
  get: ({ get }) => {
    const networkNotifications = get(networkAtom);
    const jobsNotifications = get(jobsAtom);
    const notiNotifications = get(notificationsAtom);
    const messagingNotifications = get(messagingAtom);
    return (
      networkNotifications +
      jobsNotifications +
      notiNotifications +
      messagingNotifications
    );
  },
});
