export const Demo = () => {
  let demo = "10";
  setTimeout(() => {
    demo = "123789";

    console.log(demo);
  }, 2000);

  console.log(demo);

  return (
    <>
      <p>Hello!</p>
      <p>{demo}</p>
    </>
  );
};
