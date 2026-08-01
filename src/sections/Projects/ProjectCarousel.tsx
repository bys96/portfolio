import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectCarouselProps = {
  images?: string[];
  title: string;
};

function ProjectCarousel({ images = [], title }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const touchStartX = useRef<number | null>(null);
  const activePointerId = useRef<number | null>(null);

  const hasImages = images.length > 0;
  const hasMultipleImages = images.length > 1;

  const moveToPrevious = () => {
    if (!hasMultipleImages) return;

    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1,
    );
  };

  const moveToNext = () => {
    if (!hasMultipleImages) return;

    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1,
    );
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!hasMultipleImages) return;

    // 마우스는 스와이프에서 제외하고 터치·펜만 허용
    if (event.pointerType === "mouse") return;

    touchStartX.current = event.clientX;
    activePointerId.current = event.pointerId;

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse") return;
    if (touchStartX.current === null) return;
    if (activePointerId.current !== event.pointerId) return;

    const distance = event.clientX - touchStartX.current;
    const swipeThreshold = 50;

    if (distance >= swipeThreshold) {
      moveToPrevious();
    } else if (distance <= -swipeThreshold) {
      moveToNext();
    }

    resetPointer();
  };

  const handlePointerCancel = () => {
    resetPointer();
  };

  const resetPointer = () => {
    touchStartX.current = null;
    activePointerId.current = null;
  };

  return (
    <div className="project-card__image-wrapper">
      {hasImages ? (
        <div
          className="project-card__viewport"
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          <div
            className="project-card__slides"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {images.map((image, imageIndex) => (
              <div className="project-card__slide" key={`${title}-${image}`}>
                <img
                  className="project-card__image"
                  src={image}
                  alt={`${title} 프로젝트 화면 ${imageIndex + 1}`}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="project-card__placeholder">
          <span>{title}</span>
        </div>
      )}

      {hasMultipleImages && (
        <>
          <button
            className="project-card__carousel-button project-card__carousel-button--previous"
            type="button"
            onClick={moveToPrevious}
            aria-label={`${title} 이전 이미지 보기`}
          >
            <ChevronLeft size={22} aria-hidden="true" />
          </button>

          <button
            className="project-card__carousel-button project-card__carousel-button--next"
            type="button"
            onClick={moveToNext}
            aria-label={`${title} 다음 이미지 보기`}
          >
            <ChevronRight size={22} aria-hidden="true" />
          </button>

          <div
            className="project-card__dots"
            aria-label={`${title} 이미지 선택`}
          >
            {images.map((_, imageIndex) => (
              <button
                className={`project-card__dot ${
                  currentIndex === imageIndex ? "project-card__dot--active" : ""
                }`}
                type="button"
                key={`${title}-dot-${imageIndex}`}
                onClick={() => setCurrentIndex(imageIndex)}
                aria-label={`${imageIndex + 1}번 이미지 보기`}
                aria-current={currentIndex === imageIndex ? "true" : undefined}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ProjectCarousel;
