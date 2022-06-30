function softUniReception(input) {

  let array = input.map(Number);
  let studentsPerHour = array[0] + array[1] + array[2]; 
  let students = array[3];

  let hours = 0 ;

  while (students > 0) {
    hours++;
    if (hours % 4 !== 0 || hours === 0) {
      students -= studentsPerHour;
    }
  }

  console.log(`Time needed: ${hours}h.`);
}
// softUniReception(['5','6','4','20']);
softUniReception(['1','2','3','45']);

softUniReception(['3','2','5','40']);
