module.exports.isDogOwner = (user, dogId) => {
  let isOwner = false;
  user.dogs.forEach((dogObject) => {
    console.log(JSON.stringify(dogObject.dogId.valueOf()));
    console.log(JSON.stringify(dogId));
    if (JSON.stringify(dogObject.dogId.valueOf()) === JSON.stringify(dogId)) {
      isOwner = true;
    }
  });

  return isOwner;
};
