interface GalleryItemProps {
  image: string;
  name: string;
}

function GalleryItem({ image, name,}: GalleryItemProps) {
  return (
    <div className="galleryItem"
      style={{ backgroundImage: `url(${image})`}}
      >
        <h1> {name}</h1>
    </div>
  )
}

export default GalleryItem;
