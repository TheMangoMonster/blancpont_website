import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original:
      "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    original:
      "https://images.unsplash.com/photo-1696462332624-50688f6ed002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3150&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1696462332624-50688f6ed002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    original:
      "https://images.unsplash.com/photo-1696462238429-9286e3526c96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1696462238429-9286e3526c96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTB8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    original:
      "https://images.unsplash.com/photo-1696463165184-b99d8e3788bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3869&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1696463165184-b99d8e3788bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    original:
      "https://images.unsplash.com/photo-1696463469925-77c6b7d9f0d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1696463469925-77c6b7d9f0d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    original:
      "https://images.unsplash.com/photo-1696463099308-6335d8b98e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3870&q=80",
    thumbnail:
      "https://images.unsplash.com/photo-1696463099308-6335d8b98e4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
];

export default function Gallery() {
  return <ImageGallery items={images} />;
}
