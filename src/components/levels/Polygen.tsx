const Polygen = (polygen: any) => {
  return (
    <polygon
      data-space={polygen.spaces}
      data-room={polygen.room_data}
      className="map__space"
      x={polygen.x}
      y={polygen.y}
      width={polygen.width}
      height={polygen.height}
    />
  );
};

export default Polygen;
