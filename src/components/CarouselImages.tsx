function CarouselImages() {
  return (
    <div className="scene">
      <div className="carousel">
        {[...Array(10)].map((_, i) => (
          <figure
            key={i}
            className="carousel__figure"
            style={{ transform: `rotateY(${i * 45}deg) translateZ(400px)` }}
          >
            <img src={`img/img${i + 1}.png`} alt={`img${i + 1}`} />
          </figure>
        ))}
      </div>
    </div>
  );
}

export default CarouselImages;


