import React, { useState, useEffect } from 'react';

const IMAGES = [
  "/images/a_1970s_erotica_poster_featuring_a_black__soul_power_woman_with_a_curvaceous__voluptuous_figure__she_has_a_striking_afro__wearing_a_tight__leather_outfit_that_accentuates_her_sensual_cu_2010643110.png",
  "/images/a_1970s_erotica_poster_featuring_a_black__soul_power_woman_with_a_curvaceous__voluptuous_figure__she_has_a_striking_afro__wearing_a_tight__leather_outfit_that_accentuates_her_sensual_cu_2305937145.png",
  "/images/a_black_woman_with_a_curvy_figure_is_wearing_a_pink_and_yellow_micro_thong__bent_over_on_a_bed__being_fucked_from_behind_by_her_boyfriend__chicago__2026___1299077972.png",
  "/images/a_black_woman_with_a_curvy_figure_is_wearing_a_pink_and_yellow_micro_thong__bent_over_on_a_bed__being_fucked_from_behind_by_her_boyfriend__chicago__2026___2493034361.png",
  "/images/a_black_woman_with_a_curvy_figure_is_wearing_a_pink_and_yellow_micro_thong__bent_over_on_a_bed__being_fucked_from_behind_by_her_boyfriend__chicago__2026___733103025.png",
  "/images/a_breathtaking_latina_beauty_with_golden_brown_skin_lying_sensually_on_silk_sheets_in_a_luxurious_dark_penthouse_bedroom__lit_only_by_neon_city_lights_through_rain_streaked_window_1326879993.png",
  "/images/a_gorgeous_black_girl__with_a_plump__firm_ass__is_wearing_a_micro_thong__being_fucked_doggy_style__in_a_foggy_bedroom__chicago__2026____2296621256.png",
  "/images/a_gorgeous_black_girl__with_a_plump__firm_ass__is_wearing_a_micro_thong__being_fucked_doggy_style__in_a_foggy_bedroom__chicago__2026____a_sexy_black_woman__with_a_thick__curvy_body__is__1529886758.png",
  "/images/_a_stunning_black_woman__with_a_round__juicy_ass__is_wearing_a_colorful_thong__riding_her_boyfriend_s_cock__in_a_luxurious_bedroom___763344320.png",
  "/images/beautiful_fit_but_not_muscular_ethnic_looking_older_woman_45__years_old___tanned_skin_and_very_hairy_pussy__with_a_purple_see_through_bra_spread_and_touching_clitoris_with_one_hand__cum_1311179456.png",
  "/images/beautiful_fit_but_not_muscular_ethnic_looking_skman__tall___tanned_skin_and_very_hairy_pussy__with_a_purple_see_through_bra_bent_over_with_large_plump_ass_and_purple_high_heels__staring_2091739766.png",
  "/images/beautiful_fit_but_not_muscular_ethnic_looking_skman__tall___tanned_skin_and_very_hairy_pussy__with_a_purple_see_through_bra_spread_and_touching_clitoris_with_one_hand__cum_dripping_from_2091739766.png",
  "/images/blondegirl.png",
  "/images/elegant_rear_view_full_body_portrait_of_a_fit_athletic_woman_with_toned_curvaceous_figure__seen_from_behind_standing_naturally__wearing_a_modest_white_one_piece_bathing_suit_that_accent_2593774590.png",
  "/images/girlbentinpurple.png",
  "/images/girlinpurple.png",
  "/images/girl_on_kitchen_counter_spread_pussy_showing_with_black_underwear_pulled_to_side_showing_cum_oozing_out___2107021525.png",
  "/images/girl_sith_lors_of_cum_on_her_fsce__3270086444.png",
  "/images/girl_with_cum_on_face__large_black_cock_next_to_her_dripping_with_cum_3416693755.png",
  "/images/girl_with_cum_on_face__ugly_old_gross_men_surrounding_her__25993613.png",
  "/images/gothgirl.png",
  "/images/mexican_girl_in_hotel_bathroom_bent_over_showing_green_thong_and_pussy_covered_in_cum_full_profile__hairy_pussy__panties_pulled_down_to_mid_thigh__pussy_oozing_with_cum_1729624413.png",
  "/images/mexicangirl.png",
  "/images/pretty_girl_bent_over_with_cock_in_her_mouth__pussy__and_ass_getting_gangbanged_by_large_muscular_black_men_in_a_dirty_hotel_room__3174143742.png",
  "/images/pretty_girl_bent_over_with_cock_in_her_mouth__pussy__and_ass_getting_gangbanged_by_large_muscular_black_men_in_a_dirty_hotel_room__795746522.png",
  "/images/pretty_girl_getting_gangbanged_by_large_muscular_black_men_in_a_dirty_hotel_room__205163375.png",
  "/images/pretty_girl_getting_gangbanged_by_large_muscular_black_men_in_a_dirty_hotel_room_she_looks_sad___3991444988.png",
  "/images/sexy_busty_goth_girl_at_the_pool_with_no_top_tits_showing_bent_over_pussy_visible__spread__23_years_old__c_cup__big_ass__beautiful__night_time_shot__halloween_pumpkin_style_christmas_3550346052(2).png",
];

export default function ModelShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const previousIndex = (activeIndex - 1 + IMAGES.length) % IMAGES.length;
  const nextIndex = (activeIndex + 1) % IMAGES.length;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((i) => (i + 1) % IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prev = () => setActiveIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setActiveIndex((i) => (i + 1) % IMAGES.length);

  return (
    <div
      className="w-full relative overflow-hidden border border-[#333] bg-[#000] rounded-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative w-full h-[480px] md:h-[580px]">
        {IMAGES.map((src, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${idx === activeIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            {(idx === activeIndex || idx === previousIndex || idx === nextIndex) && (
              <img
                src={src}
                alt={`Sample output ${idx + 1}`}
                className="w-full h-full object-cover"
                loading={idx === activeIndex ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={idx === activeIndex ? 'high' : 'low'}
                sizes="(max-width: 768px) 100vw, 896px"
                width={896}
                height={580}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          </div>
        ))}

        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex items-end justify-between">
          <div>
            <div className="font-mono text-[10px] text-[#ff6b35] uppercase tracking-widest mb-1">
              SAMPLE OUTPUT
            </div>
            <div className="font-mono text-xs text-white/40 uppercase tracking-widest">
              THIS IS WHAT YOU CAN GENERATE // 100% LOCAL // NO SUBSCRIPTIONS
            </div>
          </div>

          {/* Counter + arrows */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-white/30">
              {String(activeIndex + 1).padStart(2, '0')} / {String(IMAGES.length).padStart(2, '0')}
            </span>
            <button onClick={prev} className="border border-[#444] hover:border-[#ff6b35] text-[#666] hover:text-[#ff6b35] w-9 h-9 flex items-center justify-center font-mono transition-none text-lg">
              ‹
            </button>
            <button onClick={next} className="border border-[#444] hover:border-[#ff6b35] text-[#666] hover:text-[#ff6b35] w-9 h-9 flex items-center justify-center font-mono transition-none text-lg">
              ›
            </button>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="h-[2px] bg-[#222]">
        <div
          className="h-full bg-[#ff6b35] transition-none"
          style={{ width: `${((activeIndex + 1) / IMAGES.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
