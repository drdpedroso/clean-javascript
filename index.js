const saveUser = (user, db) => {
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
        user.id = Math.floor((Math.random() * 100) + 1); // generate a random id between 1 and 100 (don't do it in production :P)
        db.init();
        db.save(user);
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

export default saveUser;