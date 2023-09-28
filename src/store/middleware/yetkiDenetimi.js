import { toast } from "react-toastify";

export const yetkiDenetimi = (store) => (next) => (action) => {
  if (action.type.includes("ADMIN_RIGHT")) {
    if (store.getState().site.user.role === "admin") {
      next(action);
    } else {
      toast.error(`${action.type} işlemini yapmaya yetkiniz bulunmamaktadır!`);
    }
  } else {
    next(action);
  }
};
