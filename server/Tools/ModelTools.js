function createClassesObjectArray(classes = []) {
  if (classes.length === 0) {
    return null;
  }
  let objectClasses = [];
  classes.forEach((obClass) => {
    const obj = {
      classNumber: obClass,
      isFinished: false,
      participants: [],
    };
    objectClasses.push(obj);
  });
  return objectClasses;
}

module.exports.createClassesObjectArray = createClassesObjectArray;
