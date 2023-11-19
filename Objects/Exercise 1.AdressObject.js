//street, city ZipCode

const adress = {
  street: 'Petar Stoev 141',
  city: 'Plovdiv',
  zipCode: 4004
};
function showAdress (address) {
  for (const key in address) {
    console.log(key, address[key])
  }
}

showAdress(adress);
