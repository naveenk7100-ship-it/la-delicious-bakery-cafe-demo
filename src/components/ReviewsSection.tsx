import React from 'react';
import { 
  Star, 
  CheckCircle2, 
  ExternalLink, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { REVIEWS, BUSINESS_INFO } from '../data/bakeryData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#FAF6F0] border-b border-[#EADCCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-[#92400E] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Real Local Stories</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241711] tracking-tight">
            Loved By Karimnagar Food Lovers
          </h2>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            From heartfelt birthday surprises to cozy weekend cafe dates, see what our valued patrons have to say on Google Maps & social media.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="mt-6 inline-flex items-center gap-4 bg-white px-5 py-3 rounded-2xl border border-[#E0CEBE] shadow-xs">
            <div className="flex items-center gap-1 text-amber-500 font-extrabold text-xl">
              <span>4.3</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-500" />
                ))}
              </div>
            </div>
            <div className="h-6 w-px bg-stone-200"></div>
            <div className="text-left text-xs text-stone-600">
              <span className="font-bold text-[#241711] block">500+ Verified Reviews</span>
              <span>Google Maps • Karimnagar</span>
            </div>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#92400E] hover:underline flex items-center gap-1 ml-2"
            >
              <span>View Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map(rev => (
            <div 
              key={rev.id}
              className="bg-white rounded-3xl p-6 border border-[#E8DCCF] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Source */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-stone-100 text-stone-600">
                    {rev.source}
                  </span>
                </div>

                {/* Highlight Tag */}
                <div className="text-xs font-bold text-[#92400E] mb-2">
                  "{rev.highlight}"
                </div>

                {/* Review Text */}
                <p className="text-xs text-stone-600 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#241711]">{rev.author}</h4>
                  <span className="text-[10px] text-stone-400">{rev.timeAgo}</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Call to action */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#241711] text-amber-200 hover:bg-[#3D281F] font-semibold text-xs transition-colors shadow-sm"
          >
            <MessageSquare className="w-4 h-4 text-amber-400" />
            <span>Read All Google Maps Customer Reviews & Post Yours</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
