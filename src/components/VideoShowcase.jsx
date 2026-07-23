import { showcaseMedia } from '../data/videos';
import useReveal from '../hooks/useReveal';

export default function VideoShowcase() {
  const ref = useReveal();

  return (
    <section className="py-20 sm:py-28 overflow-hidden reveal" ref={ref} id="showcase-section">
      {/* Heading */}
      <div className="text-center mb-14 px-4">
        <p className="text-gold uppercase tracking-[0.3em] text-sm font-medium mb-3">Inspiration</p>
        <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-text-primary">SEE IT IN YOUR SPACE</h2>
        <div className="w-16 h-[2px] bg-gold mx-auto mt-4" />
      </div>

      {/* Horizontal Scroll Strip */}
      <div className="relative">
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 px-4 sm:px-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {showcaseMedia.map((item, i) => (
            <div
              key={item.id}
              className={`flex-shrink-0 snap-center relative overflow-hidden rounded-xl group cursor-pointer ${
                i % 3 === 0 ? 'w-[320px] sm:w-[400px] h-[400px] sm:h-[500px]' :
                i % 3 === 1 ? 'w-[260px] sm:w-[320px] h-[400px] sm:h-[500px]' :
                'w-[300px] sm:w-[360px] h-[400px] sm:h-[500px]'
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-gold text-xs uppercase tracking-[0.2em] font-medium mb-1">✦ {item.caption}</p>
                <div className="w-8 h-[1px] bg-gold/50 group-hover:w-16 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-bg to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-bg to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
