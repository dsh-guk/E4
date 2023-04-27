function showOwnProps(obj) {
    let result = "";
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result += key + ": " + obj[key] + "\n";
      }
    }
    console.log(result);
  }
  
  
  const student1 = {
    name: "Darya",
    ownCity: "Moscow",
    age: 28,
    course: "Front"
  };
  
  
  showOwnProps(student1);