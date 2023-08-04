class person {
  constructor() {
    let data = {
      name: "DHRUV",
      age: 26,
      Qualification: "B.Sc Computer Science",
      address: "No.40, Malli Street, Chennai- 602 001",
    };
    for (var key in data) {
      console.log(`${data[key]}`);
    }
  }
}
let call = new person();
