import Image from "next/image";
import Container from "@/components/Container";

const galleryPhotos = [
  { src: "/images/gallery/w1.jpg", alt: "Front yard landscape" },
  { src: "/images/gallery/w2.jpg", alt: "Garden pathway" },
  { src: "/images/gallery/w3.jpg", alt: "Outdoor patio & fireplace" },
  { src: "/images/gallery/w4.jpg", alt: "Putting green install" },
  { src: "/images/gallery/w5.jpg", alt: "Fire pit seating area" },
  { src: "/images/gallery/w6.jpg", alt: "Completed hardscape" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-brand-cream py-20">
      <Container>
        <h2 className="font-display text-3xl font-semibold text-brand-dark md:text-4xl">
          Recent work
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {galleryPhotos.map((photo) => (
            <div key={photo.src} className="relative aspect-square overflow-hidden rounded">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}