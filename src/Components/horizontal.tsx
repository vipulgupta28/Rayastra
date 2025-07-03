
import React, { useEffect, useRef } from 'react';

const HorizontalScrollSection: React.FC = () => {
  const stickyRef = useRef<HTMLDivElement>(null);
  const stickyParentRef = useRef<HTMLDivElement>(null);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      title: 'Mountain Vista',
      description: 'Breathtaking mountain landscapes'
    },
    {
      src: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&h=600&fit=crop',
      title: 'Serene Lake',
      description: 'Crystal clear reflections'
    },
    {
      src: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=600&fit=crop',
      title: 'Forest Path',
      description: 'Peaceful woodland trails'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      title: 'Ocean Waves',
      description: 'Endless blue horizons'
    },
    {
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop',
      title: 'Desert Dunes',
      description: 'Golden sand formations'
    },
    {
      src: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?w=800&h=600&fit=crop',
      title: 'City Lights',
      description: 'Urban nighttime beauty'
    },
    {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      title: 'Autumn Colors',
      description: 'Nature\'s vibrant palette'
    },
    {
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop',
      title: 'Snowy Peaks',
      description: 'Winter wonderland views'
    }
  ];

  useEffect(() => {
    const horizontalScroll = () => {
      const sticky = stickyRef.current;
      const stickyParent = stickyParentRef.current;

      if (!sticky || !stickyParent) return;

      const stickyPosition = sticky.getBoundingClientRect().top;

      if (stickyPosition > 1) return;

      const scrollWidth = sticky.scrollWidth;
      const verticalScrollHeight =
        stickyParent.getBoundingClientRect().height -
        sticky.getBoundingClientRect().height;

      const scrolled = stickyParent.getBoundingClientRect().top;
      sticky.scrollLeft =
        (scrollWidth / verticalScrollHeight) * -scrolled * 0.85;
    };

    document.addEventListener('scroll', horizontalScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', horizontalScroll);
    };
  }, []);

  return (
    <>

      <div ref={stickyParentRef} className="sticky-parent h-[200vh] relative">
        <div
          ref={stickyRef}
          className="sticky top-0 overflow-x-auto overflow-y-hidden w-full h-screen"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="horizontal flex h-full w-[300vw]">
            {images.map(
              (key, i) => (
                <div
  key={i}
  className="w-[50vw] h-full p-6 flex-shrink-0 flex flex-col justify-center items-center gap-4"
>
  <div className="w-full h-[80%] overflow-hidden rounded-2xl shadow-lg">
    <img
      src={key.src}
      alt={key.title}
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>
  <div className="text-center">
    <h2 className="text-2xl font-semibold text-white">{key.title}</h2>
    <p className="text-md text-gray-300">{key.description}</p>
  </div>
</div>

              )
            )}
          </div>
        </div>
      </div>

    
    </>
  );
};

export default HorizontalScrollSection;
