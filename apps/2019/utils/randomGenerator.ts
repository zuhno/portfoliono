const randomGenerator = (min: number, max: number) => {
  return Math.floor(Math.random() * (Math.floor(max) - Math.floor(min)) + Math.floor(min));
};

export default randomGenerator;
