// Made by Vladyslav Udovychenko, 04.03.2019 00:32 AM

const data = {person: {name: {first: 'FirstName', middleInitial: 'I', lastName: 'LastName'}}};

const deepSearch = (data, path) => {
  
  const pathArray = path.split('.');
  
  pathArray.forEach((path, index) => {
    if(data[pathArray[index]] === undefined) {
      return undefined;
    } else {
      data = data[pathArray[index]];
    }
  });
  return data;
}

console.log(deepSearch(data, 'person.name.lastName'))

