db.createCollection("Preferences");

const Preference = () => {
  return {
    spicy: null, // ["wimp", "scardy-cat", "basic", "sturdy", "daredevil", ]
    sweet: null, // ["Not a sweetheart", "that's too sweet for me", "basic",  "Sugarbugar", "Sweetheart"]
    savory: null, // ["???", "", "basic", "", "heart attack"]
    sour: null, // ["sourless", "basic", "sourhead"]
  };
};

db.Users.insertMany([
  {
    spicy: [],
    sweet: [],
    savory: [],
    sour: [],
  },
]);
