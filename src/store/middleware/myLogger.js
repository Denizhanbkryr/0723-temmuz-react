export const myLogger = (store) => (next) => (action) => {
  console.warn("[ACTION] ", action);
  console.log("[STORE] ", store.getState());
  next(action); // action reducer'a devam eder
  console.log("[ACTION APPLIED] ");
  console.log("[STORE] ", store.getState());
};
