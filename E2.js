function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const student1 = {
    name: "Darya", 
    ownCity: "Moscow",
    age: 28,
    course: "Front"
  };


  console.log(showProps(student1, "same"));  // false
  console.log(showProps(student1, "name"));  // true