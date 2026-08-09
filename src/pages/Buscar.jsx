import React, { useState } from 'react';

const CATEGORIES = [
  { id: 'plomeria', label: 'Plomería', icon: 'water_drop' },
  { id: 'electricidad', label: 'Electricidad', icon: 'bolt' },
  { id: 'pintura', label: 'Pintura', icon: 'format_paint' },
  { id: 'carpinteria', label: 'Carpintería', icon: 'carpenter' },
  { id: 'limpieza', label: 'Limpieza', icon: 'cleaning_services' },
  { id: 'jardineria', label: 'Jardinería', icon: 'landscape' },
];

const PORTFOLIO_ITEMS = [
  {
    id: 1,
    height: 'h-96',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeaZE_O4HPEYtBBlP4T_9t0Lmi32_QPCjZf7RnHrkoVdYJrdY1ZAi4TSCMVXYlazfZMOkgykyTDl7voXn1gjLKSs1lksKmHvYDqLH1eHKSv-hl2j12arXTP86JCX_HL02ktUXaOlPpCjzLua5Zgw1Y-lezEouw-02GJQWdBYmWZIByURJ89-GhQlL4myHRnK-9Cjz3DZmFXSnY0cNj2yVBZ48AKeU_m7oPbkx6HdJYbYEoV6IkZZSi',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp6sHDmwmnAeDNl0Zjnuf_IMQ5oQLtaAI_fMK3QhHQwHB5MmVmslRANJ4j70Dw_JZ0H-8zCyLTkGtUPGbqNui-c4pYzYBHEmJHnYGmu_PygimClOvHlzlFFDsszpIIEOJPFv8FMYCdylDEF9pWlV0g4LTdICmyNAPeCtA9Ns5ZzXGqNnu128XS8weDb8tjTEPOpcapNTaRztDnYuSpJXkUAYQNsE5Lo3ASPAVhNT7EGP_WL_GyC5GW',
    name: 'Sarah Jenkins',
    role: 'Plomera Maestra',
    rating: 4.9,
  },
  {
    id: 2,
    height: 'h-64',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALS7c7IBQ2sSnfze8i5y0un9i_rVWIpJLi-CL_KtNI2AFKZuOE3fGlWY-gmqpvXYi0yhe8HMiODu-eymWS3KK6it0UPWgHDjItjQ4vfFcMIeb4wwQwkexPQd9e5a9k9em_2WA0g5QpHh_SUG3m-2UngPnnZvncTvLS22ZikJ-WFvtm1YkMkA7ERgo_lhy010Pepgf8PoMd0VANMQL3p4_Cj5chSz5y5ddAMmrL2RZpd7YqJyqesfhF',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMfI2DMUy5nCU4YDPxl9MYm-6jeCZfvx5xa_c2BTi2OwxqgaNgi69mJEdl70uHEYrZbaLPWQBk3OF-8OaTV1i-ajLDi8gVtEl-W50smas2qAgbt-0SEtjFXexa9Xn_Eyq3BiSzPoKWh4iMpg7EcYwMyxSnqygEDJkhyRFnhe6VhdLZxRxQBDqZjI2jb5KNwkLSb3GYZeRpD5MjllY3eyxHYXbC-eTV8sm0ISlhB9ni6HI9bxn1rGzc',
    name: 'David Chen',
    role: 'Electricista',
    rating: 4.8,
  },
  {
    id: 3,
    height: 'h-[28rem]',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhFTj6-VSzlxzPduRcU3FnvES8Hl0XHvz9cXC1HT6U8V4NCrvJtYeXRxZFXvtLcfslKyrgJ5_agdktNJ5GpCzncGblG20XJ1p1mrKyADsP0vlLpqeHK03QvgMXACx3LuCHQuC4CVpIuJYPr4X-jfxt9-re2AgrYWhp7LTl4Fooa8OfUv03BCHbi1WtIRlI0Mzup0ncic1tkkLGPkKWGfGACxRGnc9-lcRT_EzLbQYihlbKDmbbwq4n',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6onZJfOBNFkrjQcSwg6KzVN3rW7DAJuxyknvOP-ZfeTb6Untx9bcbwfuzRX0UxrEtyc2AbrDGqH757UGOI2OIlaklFuQU1hEEPxYi-gBhyTRX3bxQyhHvEjIsT2pxZTSYVU3E9vbPmApFUz7adL_AwGhP3rW7g870gbzoz0tCMn8bPaIWW1nz6TgH_tvN7IdsU5Mw9tWjL7UssxCcfuZh9g00MoJqf8PtVlUXRipNnasOLAtTbhrN',
    name: 'Marcus Thorne',
    role: 'Carpintería a Medida',
    rating: 5.0,
  },
  {
    id: 4,
    height: 'h-48',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFdFv7ZOZ_ngGShnwLgzLd0x1H01-1kjCRMLK0RbcWIU_SfGQ4w8cIsUkaz0e-t1ZBlcCwOvT6KYcyLvH79KUkV1GLnUwtCHgw7YSVvwEDKCB2-_peFmmriGRIAj6R9fZZTVHi8Wa90kG8dpDrWz7e1Xy3Fcy4ZA7-czI5aUN3-C-S2ttTueMX9ZUar7VLP2RyaG3F16ytRuiobw4LWiHPUE0641x0WYSM6cHbhVDFqOZ10wIJGEaU',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF12443ZKnAE5rcrPJF4b96Gvip7y1YYTVQoJAmTVvG5dlKly8iAIPVXF8bfKutRckNBgLs_OgiCrJATC9bODHeZqBQh0ZvgJrrlpdpAZgrJg2N7jFF2Hgyd5GxiEfE0XVQPJ7RSM38RyBbzDXkN0PScIcPjcqKNthXIA6a0vV7QiOeVd1nPjr5V3xwcTe7NjLhSZ5kuIb6e9yW85iiNHz-trzyG_29lVkTOf8LDU_FKkVnz3hLnLu',
    name: 'Elena Rodriguez',
    role: 'Limpieza Profunda',
    rating: 4.7,
  },
  {
    id: 5,
    height: 'h-72',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdhAew0taloXoLpEQmIdaj1SArDlxGV9qaakGNIlaK2vKr4z8D55we1PKyO9BIzxrR6z_Aw615xYN3I2goXTS8n7otWMGOzn2q5z3pHzsx2DRwyQ3cCHh1iHZlSLa_bICkPl6kl1z5qxWlR3H9-9jicMyI9DZ4zJYG26DnYac3OFMIH_WwzYENA3OZK88NKcBp9zl4lsLUuUdP2fDSWKwUTfi-8mscSVeMOglAlQ2qidrCDsq7pqGF',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArFN0ky3hRdo2-5B_1X7Vm39iwQKmB9xO_RScCjA5hcF_M7v8V-EmDyAC13p9GIMA6rYdxkwbuDBd0SUE832gmDvw9gJXQKKjZN-dXw2RMEAKDA-wx6rAfXTn7-ccMYQsLZRA2kIulCCippE5off7cHriaA9FqFc6h5irFH91suckbHnwkEjFKDdpEQUdaKMYVxSA0iq6LelDCBUgwOrojjpfGwQ1egCmgUhcxaiHx69AM3TWDaKmU',
    name: 'Tom Higgins',
    role: 'Pintura Exterior',
    rating: 4.9,
  },
  {
    id: 6,
    height: 'h-80',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASLYWL_PD7rIUryZbXPSxgP_h0-TGPAb_j4I1wEdKryEjvybUwjPuc99CUICaYXXGftfdAvXn6Pqoc_8lVOhhMycDtUQOOqMieob3-WZ-SKkMPQMo2caYcjYNj1agpRDAupJJV6XsDwouFR6Y38WAHUY8TtGn9VMttaqEuRJbYidF6tSwKSHl3-tXVxsOHAKV_18Kus3jwo3eFkOPxYwHUUA-cl9c22gr7C7_Rg1F_vEwUbEW3DHVd',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBFiRoBOUTzQl_pkZ-0FmcyciG4oUKHryNq5EibtaDx_9wwogHTqd5AwvHFAVWfiqvmrM6LOO8csOgPeMiJDCUsV7JmzMMkWzoD3oIq5kncwoPg4jGD7IC9n62AnRct8TBfOp1jGw4CaR0nmkMVpHbSLsbX62Ky4g-6K-HGb4jSCayPeJkM6LF6mogNapcbVmYVKreACZNkHT4ZvVAivK85mekWtvmDGwjgGtNciyJAUYlfvOERb2b2',
    name: 'Olivia Vance',
    role: 'Diseño de Jardines',
    rating: 5.0,
  },
];

export default function Buscar() {
  const [activeCategory, setActiveCategory] = useState('plomeria');
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="relative min-h-screen">
      {/* Fondo ambiental con blobs difuminados (igual que tu Landing) */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f9f9fe]">
        <div className="ambient-glow-orange top-[-100px] left-[-150px]"></div>
        <div className="ambient-glow-blue bottom-[-150px] right-[-100px]"></div>
      </div>

      <main className="md:ml-64 pt-10 md:pt-14 px-8 md:px-16 pb-24 max-w-[1600px] mx-auto">
        {/* Header + Search Bar */}
        <div className="mb-10">
          <h2 className="font-headline-xl text-headline-xl text-on-surface mb-3">Descubre Inspiración</h2>
          <p className="font-body-lg text-body-lg text-tertiary max-w-2xl mb-8">
            Explora los portafolios mejor calificados de profesionales verificados en tu zona.
          </p>

          <div className="relative max-w-2xl">
            <span className="material-symbols-outlined absolute left-5 top-1/2 -translate-y-1/2 text-tertiary">search</span>
            <input
              className="glass-panel w-full h-14 pl-14 pr-5 rounded-full font-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Busca expertos, servicios o estilos..."
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>

        {/* Categorías Visuales */}
        <div className="mb-14 overflow-x-auto hide-scrollbar pb-2">
          <div className="flex gap-6 min-w-max">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className="flex flex-col items-center gap-3 group"
                >
                  <div
                    className={`w-20 h-20 rounded-full glass-panel flex items-center justify-center transition-all duration-300 group-hover:scale-105 ${
                      isActive ? 'bg-primary/10 border-primary/30 shadow-lg' : 'hover:bg-white/80'
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-2xl ${isActive ? 'text-primary' : 'text-on-surface-variant'}`}
                      style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      {cat.icon}
                    </span>
                  </div>
                  <span className={`font-label-bold text-label-bold ${isActive ? 'text-primary' : 'text-on-surface-variant'}`}>
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {PORTFOLIO_ITEMS.map((item) => (
            <div key={item.id} className="masonry-item glass-card rounded-3xl overflow-hidden group cursor-pointer">
              <div className={`relative ${item.height} w-full overflow-hidden`}>
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={item.image}
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex items-center justify-between bg-white/40">
                <div className="flex items-center gap-3">
                  <img
                    className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
                    src={item.avatar}
                    alt={item.name}
                  />
                  <div>
                    <p className="font-label-bold text-label-bold text-on-surface">{item.name}</p>
                    <p className="text-sm text-tertiary">{item.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-white/80 px-2.5 py-1.5 rounded-lg shadow-sm">
                  <span className="material-symbols-outlined text-[#FFB693] text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="font-label-bold text-sm">{item.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}