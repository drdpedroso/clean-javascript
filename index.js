import { db } from "./db";

const saveUser = user => {
  if (user.email && /\S+@\S+\.\S+/.test(user.email) && user.phone) {
    let hasA = false;
    user.permissions.forEach(permission => {
      if (permission === "A") {
        hasA = true;
      }
    });
    const annualIncome = Number(user.monthlyIncome) * 12;
    if (annualIncome >= 100000 && hasA) {
      try {
        const db2 = db.init();
        db2.save(user);
      } catch (e) {
        throw new Error("Something went wrong");
      }
    } else {
      throw new Error("No enough annual income");
    }
  } else {
    throw new Error("Something went wrong");
  }
};
