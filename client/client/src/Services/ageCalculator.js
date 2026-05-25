export const CalculateAge = (dob) => {
  if (new Date(dob) < new Date()) {
    const previousYear = new Date().getFullYear() - 1;
    const birthYear = new Date(dob).getFullYear();
    const currentYear = new Date().getFullYear();
    if (
      birthYear === previousYear &&
      new Date().getMonth() <= new Date(dob).getMonth()
    ) {
      return `Age: ${
        12 - new Date(dob).getMonth() + new Date().getMonth()
      } Months`;
    } else if (birthYear === currentYear) {
      return new Date().getMonth() - new Date(dob).getMonth();
    } else {
      return ` Age: ${
        new Date().getFullYear() - new Date(dob).getFullYear()
      }year's`;
    }
  }
};
