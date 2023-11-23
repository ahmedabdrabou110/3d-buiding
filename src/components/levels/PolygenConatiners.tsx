import Polygen from "./Polygen";

const PolygenConatiners = (polygons: any) => {
  return (
    <>
      {polygons.map((polygon: any) => (
        <Polygen polygon={polygon} key={polygon.spaces} />
      ))}
    </>
  );
};

export default PolygenConatiners;
