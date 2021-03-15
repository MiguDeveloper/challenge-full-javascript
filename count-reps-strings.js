const normalize = (word) => {
  return word.toLowerCase().replace(/[.!,]/g, '');
};

const countStringRep = () => {
  const oracion =
    'hola que tal, tal que bienvenidos a ChinDev. Si os está gustando este vídeo, suscribiros y darle a la campanita para ver los nuevos vídeos que vaya subiendo!';
  const arr = normalize(oracion).split(' ');
  const objReps = arr.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: acc[cur] ? acc[cur] + 1 : 1,
    }),
    {}
  );

  return objReps;
};

console.log(countStringRep());
