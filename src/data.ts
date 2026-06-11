import { Product, Testimonial } from './types';

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Marcus Reed',
    role: 'Pro Athlete',
    quote: '"The compression technology in the Apex series is genuinely next-level. I\'ve cut 30 seconds off my 5k time in just three weeks."',
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ7Je_wWTZlh8nZaKYBEXxonda-eqM1zAxDzCRH2wKgQxL0dwFhiO4cS986fmvdT9jqVEBVsJ0-VMve9INM-P0IRD6_k56PGNvnTk_vofJgxtiH1nSHEJxdJof9PdMOBMM2NY_N_ZkimF-b_9iG-5zrnjTXDN8GI-sDpvoIkWmQdvIhaGVuWZYyi63s6d6HFJ1H0K8RSlPrkMD7iUPUDDjV31hzzig229f2k7kjAyMD2Qe1C3rNS5sGZ1d7sNjuRWnNCd6c_XKlxbn'
  },
  {
    id: 't2',
    name: 'Sarah Chen',
    role: 'Creative Director',
    quote: '"Finally, a brand that understands that style doesn\'t have to sacrifice comfort. StrideX is my go-to for both the gym and the office."',
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjgbV94jPWvEjHF4h02ahkRgYJ59hxw5MBL8jBgTGkQo7UyCcvAozNU_igE9vs2SSXeIYw2FRGqoRtXV9m4kdUJ3XZZoYwq78y6k1OgQSfZ78HWVWKeMvrYL5xvXVfyWLtu3PAxn035yjjm5c0_ayAZe2rzA_fpGwAKOC_aRfL99jrLYIdmcUTUvZRYTaVTI-s2m2ZDkjUlsCLNdii9v7KFroscytq01H51WDHagSP095MwDT6skROt48wALGMePhHqvTgUra3UdlR'
  },
  {
    id: 't3',
    name: 'David Miller',
    role: 'Marathon Runner',
    quote: '"The build quality is exceptional. I\'ve put over 500 miles on my Stealth Runners and they still feel as responsive as day one."',
    stars: 5,
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNKI1RIL_3D-N734XVk45qm_3lSIYUXr9g_p8NlxxU0LhNkbvZa5-Wqk7ZDEa9h96aleTp82S5jULtMWjSU7g92Hmt8u-L-WCdgDP997V35CxjVoHblWNdpfn4erWvkp7wNV9f-VFSlxSOCT4T1YjkSJXornJCs-pS0Flh5T5Sx5HWM9VjEiJt4oN3AO7nK9cfqZHCC4WMgVLF6nLlwf9fUIOVjhImyyZN2HLoXI04jG_nCRVHybFNjKhCzXGkVIldVgROT3NoAJ6o'
  }
];

export const products: Product[] = [
  // DETAIL PRODUCT (Velocity Elite)
  {
    id: 'aero-core-velocity-elite',
    name: 'Aero-Core Velocity Elite',
    price: 224.99,
    brand: 'StrideX Elite',
    category: 'Sneakers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg0Je9FRrYUxtQUpMMzUeNEE9EmEAzvYn9rh8coJPD3BrldDrXlrgx9aHtnNsvP-MXZCobquB273keA3KRsI5L8a-Q89bc2hQMlHFDCs65bcPBvaUPEyKLtGXq8xrGgxCRnzLrXNdwnzdrlSfWNHm2oV4OlbhdyGNrtzeh2cCrkBRLQQegK-zC82ezMLfRsTLFOhwNsT_ZX5eNMAtPRDxwkpBQCMgptXsjnIhKbsi7xjP7wy0GqggU3y_Mbw5XYrVQour8NHN5Wa4h',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDg0Je9FRrYUxtQUpMMzUeNEE9EmEAzvYn9rh8coJPD3BrldDrXlrgx9aHtnNsvP-MXZCobquB273keA3KRsI5L8a-Q89bc2hQMlHFDCs65bcPBvaUPEyKLtGXq8xrGgxCRnzLrXNdwnzdrlSfWNHm2oV4OlbhdyGNrtzeh2cCrkBRLQQegK-zC82ezMLfRsTLFOhwNsT_ZX5eNMAtPRDxwkpBQCMgptXsjnIhKbsi7xjP7wy0GqggU3y_Mbw5XYrVQour8NHN5Wa4h', // Orange
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBYbUAEB4sEVGsQBz-20XM7U2eCWa7QodG2J7l4-ty9AIf5n4rKFNcQ9jz_sHVBz9yPr9CUtuhVOuXhSDezskQ0CRTeGJyjKoCmVNnpGcJvLNd3FpcpXbrPmuUNVCHRjGf__W3SyQgc_sjstyPEtiXEcVkEX95Vg5CN-OFt8JEaFqoL_aotbOvQ2fAduqoIc1aYchz61qhnQoXVMfvdexmyy4kdDPb5drUzEYu6rCMa2Wux3reIw2J1xJ3Tj5pG9PWRQuBMrkS83H6S', // Red
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAwmQ4R_4SFA3fUfsjlnBz58OIkdGkl-rYa7wcoBLP1OIDnN27eqkH6FRAZ4ZJsg_YQ9hlsUreC4iP697c1zjzN3iUxCNQNcIgHaNQrHeRo3ZVgXx0EYY3aQXELSH1Kg2G8ZcRDYwn77HwhgqrGB0ejkzkCJwwmtTvMhYAKuUJSWZYNe6Lcq1q19X3paZViFkbVdsqKKPXdLx2_d0ARN9u8tudnwOvjUXu6Pg5ORHE-eaiK8tUQl34wuI73VTHA25lBY2bJEupMGY56', // Neon Green/Black
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA0yxSjRMw_2RICPToHbrvJuRKHxJC35hIXWuoZhh5eqrhDd_zZ-Z1eeDhr3yZKIfeIax1BsP8Lx5qD0l1ySM1s8JDg4Emd3xCNDO3YgPbEGkM5FT1fxjclN_CMx0kWAM5k_qNxqSB0oJcFSF3LfgZNXujgEX7s_A_KJNkmOjr7BbeMCkvU2pzRsMdsSbj8O40jbEV8iKV-rMSg5-YAhNwpYoOvQUoRTf8-hH_6Luqq3Ro3OzK8LuKUMjXll00O38rOxQg2SROv8UZ9', // Sole
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCY8oHKQQko-ytlc8tkRvLTdhaTBLKCKshdqeMKwYArXfz0S7-IeahyF_Z5VIq109B9ttJve_Nj0dPp6snBh47ydjrWRjjOpd0j3-jkGtsMSHmOnDQAy5zqeLvY3KUh0_yxT8-3h5bRTx_OZsvXrv0sJ3aTV6mJklPDlds-cPzjzWAP8skj8wKWlwCwqfci8FSMfZGYQOz5rMVqAUkMSTXO36VbHgaSuMrDPECIyg94nBS23XcqXubv7fX8nDq6XtTgx2CmksBlnAec' // Top Down
    ],
    tags: ['New Arrival'],
    colors: ['#ff5722', '#1a1c1c', '#5f5e5e'],
    colorNames: ['Velocity Orange', 'Charcoal Black', 'Dark Grey'],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    description: 'Engineered for record-breaking speed. The Aero-Core Velocity Elite features our proprietary kinetic carbon plate and ultra-responsive nitrogen-infused foam, delivering maximum energy return with every stride.',
    rating: 4.5,
    reviewsCount: 1248,
    specs: {
      weight: '198g (Size 9)',
      offset: '8mm',
      midsole: 'Nitro-Core V2',
      plate: '3K Carbon Weave'
    }
  },

  // BAG PRODUCTS (pre-populated)
  {
    id: 'velocity-runner-elite',
    name: 'Velocity Runner Elite',
    price: 189.00,
    brand: 'StrideX Elite',
    category: 'Running',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOFlhNY5YbhPpdevlIWrVDXaFmUpQueqjL5mHXSi5tSlnX9RtkuBQQ82KV0NpViVmW_eqHjNndxwjDs0OffTJBhcJkrb2Fb6jvV2o7GqeJgNd5kMnwqZwkY1Wv4gscpLojodxZfeLHdg_jBv2IpLsdOylsmi_szAYQhQdIgAQWBo36jl9mOSHXt7OpCZIPqMPrucMaqoauRwsFC51kMwbruX96uuf26n9iLuZj9gqQBIWGiQPME7QRJ9ZYbBcbIU2aWpJXB47WiRHb',
    tags: ['Best Seller'],
    colors: ['#ff5722', '#1a1c1c'],
    colorNames: ['Blaze Orange', 'Midnight Black'],
    sizes: [8, 9, 10, 10.5, 11, 12],
    description: 'Ultra-cushioned high-performance road running shoe for long-distance durability and speed pacing.'
  },
  {
    id: 'gravity-pro-high',
    name: 'Gravity Pro High',
    price: 210.00,
    brand: 'Apex Motion',
    category: 'Casual',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDFXSokP9nels8S1rSXegJyTVngYX2Aj1o5A_y-h3BDq2Uvv4jBGBi_1gWGoSxBANELeLjZT8vWhRo8OWOYNkrQeWCn5XQwVa4YcH5ILjYYwnOmQn10VvCg0qSCsfpB7DFqAKDjJ71fCzNEUbztF3v38DaY73G4GmY85zCAXb2hHUruw20-DUhWO7dapyDdEPxkzeL5rt3Ty1NJMNIQYi2v-01FevMu5KJRFCmIAPgK576QEHZbiNEnqdEKf6ubJW9heu1mydCKCGDc',
    tags: ['Court Performance'],
    colors: ['#5f5e5e', '#ffffff'],
    colorNames: ['Phantom Grey', 'Cloud White'],
    sizes: [9, 10, 11, 12],
    description: 'Modern high-top basketball sneaker engineered with dynamic bounce-back responsiveness and heavy ankle support.'
  },
  {
    id: 'apex-trail-30',
    name: 'Apex Trail 3.0',
    price: 155.00,
    brand: 'Apex Motion',
    category: 'Training',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCV_F_EvRCpjSKgz19BnqGIQq2jbHpy95T8urRd9Jbk6Y92hi8A6aykEnr944xfpRnljB_eqfXSZOdpSi2hwHYq0QXckzkLjHOaqgqacqEwIwwrBDYs7A2gcnDD_JLf9Z6HVqGxbCz2qm9iw_bjmsu3OCXOrlYschMFhDEmv4GPCKjvXOrheSMnuzOcLyZdTmaHpQ_F0lyHmAXM3JphHKRt7kzIJrwZlpJ22MZCX_hXPer_XhinJefy6ctw1_tQhEHAGVVB6hGOEXAC',
    tags: ['Rugged'],
    colors: ['#1a1c1c', '#5f5e5e'],
    colorNames: ['Jet Black', 'Slate Grey'],
    sizes: [7, 8, 9, 10, 10.5, 11],
    description: 'Sleek all-terrain trail runner built with deeply lugged outsoles and synthetic water-repelling mesh.'
  },

  // SNEAKERS CATALOG ITEMS FROM LISTING PAGE
  {
    id: 'vortex-racer-g1',
    name: 'Vortex Racer G1',
    price: 189.00,
    brand: 'Veloce Pro',
    category: 'Sneakers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHlsZtNF8qmbnSvZ2Xb6ZLMjfQ4abo7KSe6calwxZTa7CAg7srJlDzH6Asx4O2GIH-Q9MnMvKTOhjtW52gMF1m1RwDdhw8s0fgupq1aCXj5r7PShmMjYy6kuPnMZUQ2LC-46xpbThWNjO7b969icYQe8eDkh0QcGPvfuyrOQ1KAB9fhG8vcV22GRgX6l_ppBSsBc1DdD060g3XIJk5Ru51bUK8VnYAziq2EdgbJsvAqdzA2yiOWMaChV7j6pxhWkl5xXS31HgftDbh',
    tags: ['New Arrival'],
    colors: ['#1a1c1c', '#ff5722'],
    colorNames: ['Triple Black', 'Neon Orange'],
    sizes: [7, 8, 9, 10, 11, 12],
    description: 'Vibrant red high-performance running sneaker with sharp structural overlay panels.'
  },
  {
    id: 'pure-motion-x',
    name: 'Pure Motion X',
    price: 245.00,
    brand: 'StrideX Elite',
    category: 'Sneakers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfALmbWmNrfNDUBoKDkr8k9MKuOfB0XDGfFFycU_mAx5xTJ4XoFcmvE-61u2jVcTJK4gAsqpN9LERlfh8ycZ_TsrRhgfD56eGWJ8bSr9tiWTkwQWt41l8ZsVbFEXJfsAUT9qLL3YBwzKuhYLgeztirpnWPywgHwb9qAIF82Fz6lE6xvu6GnVy9txZ91HUw93Qp0SD7o6Ye3Wax_qP4qdPIj9zJxRo_qOCm3k_25cba09JSdDRoKOwF_y2hMICpJRdgAMyITrH4-dYN',
    tags: ['Limited'],
    colors: ['#e2e2e2', '#ffffff'],
    colorNames: ['Pristine White', 'Lavender Frost'],
    sizes: [7, 8, 9, 10, 11],
    description: 'A sophisticated minimalist athletic sneaker with soft layout paneling and premium build.'
  },
  {
    id: 'carbon-shift-v2',
    name: 'Carbon Shift V2',
    price: 210.00,
    brand: 'Apex Motion',
    category: 'Sneakers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtdbV6c6H8Hll16tdjABQwDdrqstOKs_mTb3Nn-DfqYxk1ddVEJxaFjRWukEw-jrU36D5avIQXmTQMYs0yfSF6SfIOpZ5p2TN4WtBl7OWhEWm0XQ02sy0gBl924GZRSlISkIEAvUZKFxClMKBexaG-GKk_nzb2jUDbQsycWWIV8Nbbgp4javuuFgN8vqkEYh8H_JSUkmKHRYQplHAVINkKryvGQQGZfU5xBXWvtRh9O3y4TkVmTcHjjpFIaGdb1iEopkaOI2DfNuMo',
    tags: ['Popular'],
    colors: ['#1a1c1c', '#CCFF00'],
    colorNames: ['Obsidian Black', 'Neon Acid Green'],
    sizes: [8, 9, 10, 11, 12],
    description: 'High-contrast aggressive trainer detailing an integrated carbon composite plate.'
  },
  {
    id: 'nomad-low-profile',
    name: 'Nomad Low Profile',
    price: 145.00,
    brand: 'Casual Collective',
    category: 'Sneakers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8plUwFszysbd_f1xKH88acl5cXnlWxOf7Z8iXbSvKPFqGI8S0POH-YaIi2SnBOvpz_1asgeEvAkElkx2VghabjTwcbLrd9KsxVEoTlvDtnhN480tYFr19VEX4672bExN4Nf8LKAQXm88MLp-ZdY4y9qJHUyo1BZ4cAfWZnkJw2_U6mEj67uAphyJDRoYSST4oG0B9KFFfIxAsGuTa4ic6LTsHSB-4ZZl2HEkVmCKSCfHdPBNa96jq9IStz-CJgmDhijV8G9QYiTRj',
    tags: [],
    colors: ['#e4e2e2', '#ffffff'],
    colorNames: ['Minimalist Grey', 'Sand White'],
    sizes: [7, 8, 9, 10, 11, 12],
    description: 'Minimalist casual trainer with subtle color-block linings and lightweight construction.'
  },
  {
    id: 'core-trainer-z',
    name: 'Core Trainer Z',
    price: 160.00,
    brand: 'Training Pro',
    category: 'Sneakers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRYnKQ7i0CCZHNlsNS0mqkyRBxxDKLKFweL8L2fg-naTHzrKD6__4TbHkqW-nT1qGwaLzO9s14u6t2SoV4ecoVbXg0ZP0s4u0NSdg2BJnwrdjiwSk5MUs2I-Kg_TV8MNsFdZjIbZc2zd5wgPVm1S1A7DV-XnOw3X6_rjA9np1nYmKEoRKQCs_1yjDUr8Mt3N9NE3ijTFe_BZ124FChpiY4mhuvrVc0CWEDWHl3fsgmnHn_Q7s4PFfd9zDtkrrDqckfRnnF31XLBffz',
    tags: [],
    colors: ['#1a1c1c', '#111144'],
    colorNames: ['Midnight Carbon', 'Deep Oceanic Blue'],
    sizes: [7, 8, 9, 10, 11],
    description: 'Technical multi-sport athletic sneaker built for high impact stability and lateral strength.'
  },
  {
    id: 'origin-classic-s',
    name: 'Origin Classic S',
    price: 175.00,
    brand: 'Heritage Series',
    category: 'Sneakers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDb1wyCaoWy2DDKwelxFezRnRUxDR3R0BWkekUEfJErum_haNdVuCzhd3LOejuLDZQq1F4ze6UYxK-lCNRb0EduAX8ZJwDxyzZET8tUPuqCHNF3npDKmsg-qMDKyfJr5nriGRx2MVaDALrxIwoeAIYptVOSe1PmwHEzSNOfC7IsXAk27etK-uSU958PN1bki684FoAHujZ7ZRCkg9NT-QENATc6XZrevAflBLRTP7Zq4MOIgNHxrXFZw7bKI6YCvA_rM_K9yx32TGxz',
    tags: ['Trending'],
    colors: ['#E5D3B3', '#ffffff'],
    colorNames: ['Heritage Cream-Tan', 'Classic White'],
    sizes: [7, 8, 9, 10, 11, 12],
    description: 'Classic-inspired retro modern trainer dressed in butter-soft premium cream and tan leather.'
  },

  // TRENDING PRODUCTS (Home Page grid) - Reuses or defines some additional
  {
    id: 'apex-velocity-x',
    name: 'Apex Velocity X',
    price: 189.00,
    brand: 'Apex Motion',
    category: 'Sneakers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLgegxK5RmXvXd9yBJvEEbtjF5b0_BjkIjh1v1VGNxSiLUKOTgpvpsbiN1rH3uPsfeDtvIyVqcOmZUpnizze3z_sGQpNHYa00k2Y6BKg8yf3dVjxbfHWCmWdiFQaLq5bBAbccY1NZlbRD23RSLWYf5ffjh6-fY9f4ciCoHYJB-MXbd069p7136hljpEqCJpVFCq7krbsNbrYMl-ERtpzqJRtBiBR1fJcj71ewxH86wqcEOcGzVVOFPRSciVjxlvKyGgva7X0twPOGT',
    tags: ['NEW'],
    colors: ['#ffffff', '#ff5722'],
    colorNames: ['Ice White', 'Infused Coral'],
    sizes: [7, 8, 9, 10, 11, 12],
    description: 'High-top basketball sneaker in a pristine ice-white silhouette centered around premium details.'
  },
  {
    id: 'stealth-runner-v2',
    name: 'Stealth Runner V2',
    price: 145.00,
    brand: 'Veloce Pro',
    category: 'Running',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk-y5_Ic6RVrygYBSb2JaE0tEqEsOvPF0quL8VD51VUe9KIua0MkFWW09fazRd9e1ezKCPqB0RwdM2PDJPIYgJ8GOnDHLhASorNInXhTHz1HNkzT2evjFedvzk2mnJv3nam5V17Hb1F9vXrW_b8pNWjyc09CkuKqp1PU-gGiPoOVGJB2vRpSt00hXRMlIfbogyBOeidOma7nkVVeciKzgH8M0no6EUNN4Y4es4iaVgDt3h60OTlI4r-v3nbrNUksR82thXKv95D0Bv',
    tags: ['Hot'],
    colors: ['#1a1c1c'],
    colorNames: ['Shadow Charcoal'],
    sizes: [8, 9, 10, 11, 12],
    description: 'Sleek dark running shoe outfitted with high-strength structural threads.'
  },
  {
    id: 'ignite-series-pro',
    name: 'Ignite Series Pro',
    price: 210.00,
    brand: 'StrideX Elite',
    category: 'Sneakers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBK7ybAcCHgEyTF0RIsRYQDVtm5JWXxZW5bRxVnjUsByu4bGnhonD_HAcu7qE1H4DPinhbiNlQcewmV6wUi42Ho09Hsn2_sMdjPqqSUqnyoskrqnisNSvp06uQ3cicfap5zWYijbxd4bxkDjGhr06ZhM_ie_bFl5wIQTD-4euhZAjuDE0fCPloIBocPkdSewruE8EcVdYxy9mtSE-PPm0oCvWjBPL60sIca3QjakTUBeHI0C3y100DYEzO4fFoJ9QtYeS8ssnbRH1Qw',
    tags: ['LIMITED'],
    colors: ['#ba1a1a', '#1a1c1c'],
    colorNames: ['Inferno Red', 'Pitch Black'],
    sizes: [8, 9, 10, 10.5, 11],
    description: 'Limited edition luxury performance footwear accented with deep leather materials.'
  },
  {
    id: 'cloudwalk-360',
    name: 'CloudWalk 360',
    price: 120.00,
    brand: 'Casual Collective',
    category: 'Casual',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGRjY6sExu8nvJaltyGyhUtvd95NIqnlnusKUOW7_4neHlyJ0VtmVd4YfKoYy73XpHrJCHTPn5rmEvs5NxQ-WID13h238bzNwePMAaQ-e3z7sgC73D9XcNOC_7D1Z9XYatU3V6vVDZt8-QyAt_JgxB2RDbjtf73w4Fdt5NsWzLHKhPjD3udMFF33lz4REqZ1F1ASV1iK52IKi-0fDp6TY-64N3A7sSa4AsF6xrBG0rvlrNo3uOztkYvXikW2e0GjhXU27V9lcNQzWk',
    tags: [],
    colors: ['#ff5722', '#e2e2e2'],
    colorNames: ['Sunset Orange', 'Aerosol Grey'],
    sizes: [7, 8, 9, 10, 11, 12],
    description: 'Extremely flexible foam-cushioned lifestyle shoe offering maximum everyday cushioning.'
  },

  // COMPLETING THE KIT RELATED PRODUCTS
  {
    id: 'aero-core-training-crew',
    name: 'Aero-Core Training Crew',
    price: 18.00,
    brand: 'StrideX Accessories',
    category: 'Training',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuAqUr7_imDKvhg-6jvdOFzSr63d7aFpvwsaywc08zBVwkym_aN2bomlv-fEo6Zw7isggDEjnUqW2VbJpxqWTjGdOgl5L1LCXgJWwEJDsFPH-AutNcAxw-GlHdoVpaLJiTxja8JnNAl3ue7usxuVz24eJ4kjiFXT-sxnXHvWZQ1R3l32D27OxfdUqUjoSapK2dTbzJ7YGOoRDBtb_cRvS5r2gie6OvLQzbW_-t_Q79M0vJ_UwjxPfOxd12p2N7MHuC6qIwsQnzh9Hm',
    colors: ['#ffffff'],
    sizes: []
  },
  {
    id: 'velocity-performance-short',
    name: 'Velocity Performance Short',
    price: 55.00,
    brand: 'StrideX Apparel',
    category: 'Running',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAUlpxoLXNk5HLNOx2n0OcdY2TbgN5IJ0Dc-eAjh6IbEtZPpJLLyuDQ11rumZNQ6cxDFkndKV__dTiAxapk2lK3JqmTr99qBcbg1bh_MfJl4Unz7pJwFuNCky7rOJ9YwXPGmhwNkjg20QKM1lH4OQWjJI_Lr0qR1SAtiDSrMOxaUFzosrC3JXDu7eZuvVQFQ8kwgSTey6p9TyBClvw6Qm8_PI4BmCLTOqlDJoVXptZMxYk3QQ9TAj9ZL8xgKE1UpjflUOgh3wOKgrBl',
    colors: ['#ffffff'],
    sizes: []
  },
  {
    id: 'wind-shield-pro-jacket',
    name: 'Wind-Shield Pro Jacket',
    price: 145.00,
    brand: 'StrideX Apparel',
    category: 'Training',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJvI5ZA7M3KmFeoAwc5BBhpq-PkoJzWZCvK6Kvva0T5UPJMSWIEDg2AmC9kYXGyT8qGsIQRIvAXhO5xzWxKBtiImvYoEtRoVafGnt-coLxqVII9eiqPNKwDmPL0ktnY2Cat8NGVMqIS2glFSNiRLJUS8EvThBGCyUgU-xqsgTFI8v6klj1eLTnJfo0K1cfivFjAnopv2H96bTqhB70QVJLcyLWMOq4UL5ftQIyxsVNtFCzSW_IVvrvPWTU9mIhMyxph7Feek4Lc--T',
    colors: ['#1a1c1c', '#CCFF00'],
    sizes: []
  },
  {
    id: 'terra-grip-trail-runner',
    name: 'Terra-Grip Trail Runner',
    price: 160.00,
    brand: 'Apex Motion',
    category: 'Running',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrf8-QQIcLzuJUGucO0YRIquujhwYT-6SW_luSF88S9suZfv-YmCrh0CNZtqTaKx94Klze3rHNqGb-wmxRLeyp6owcvlFIKqYd_kn9rXEHnniVgQSCM_bg8E76wl25w0Z7z9xgXkR3HssZARyx_9_WFx_mmIcx81SXnmPh74_P1LOVEK_vgpj7Mt3_Iq45EuBJ37mpYHwr0hjWOPDz7a-Z4Ytj9oDuozD2nvNIaMLHEjf_nHPZdE-B7N_QQ6UMJF9DR-siLOBL4o_f',
    colors: ['#114433', '#E5D3B3'],
    sizes: [8, 9, 10, 11]
  },

  // RECOMMENDED BAG ITEMS
  {
    id: 'urban-float-2',
    name: 'Urban Float 2',
    price: 135.00,
    brand: 'Casual Collective',
    category: 'Casual',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbMRl-Cdc1klQCOMcy9E7E8FeRvvgjpxzGWjx19j9S4OVbp1Bj8ymITIcPzCN8Lo1IxPvMarzbDVtEsV8wqlMqeVu28Ki4J69ekEqvMILL0lHTwK7yVPOdWXGu59cbBSE1BPim0saBLmmlxTvZMUXv-1Vug2bipLWydleRHxadjeJ2kBpU8zJHF9zwEwnZpiqpcSXCRbX5_YHAem6Mzjdkyz_RSGxaM2y27PUeJss74fWtlGdH3_GACjy3wIlGQqUWd5ZBarMdHrua',
    tags: ['New Arrival'],
    colors: ['#ffffff', '#e2e2e2'],
    sizes: [7, 8, 9, 10, 11]
  },
  {
    id: 'ignite-pro-x',
    name: 'Ignite Pro X',
    price: 165.00,
    brand: 'StrideX Elite',
    category: 'Sneakers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAf0EtPz8FbMaXWWLPX3SFmlQ6APXWJjdxO4jq_Cpe2r4UOgFJzLhuZ13vVIgg-ezB8mPvdPjAy1UWEG7gTnUid80LzB1S2Kq2xnFV4FyMueqDrv29Bj8zCl867eYaRZurljgXUXf5FIJiCojq8gDqz2f2Ku0zEnX0z6d9pWiXEw8tRll0_60YQpSX-N8WOYp546SuM-L3VEz_kETREZxjuZV8chbosROMoENglr_-GBdUZ7hIQRnSFOJLJ09-HD3YrC-zxIFu2Kl4t',
    tags: [],
    colors: ['#112244', '#ff5722'],
    sizes: [8, 9, 10, 11, 12]
  },
  {
    id: 'vanguard-alpha',
    name: 'Vanguard Alpha',
    price: 240.00,
    brand: 'StrideX Elite',
    category: 'Sneakers',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClCqeGXjo33wra1AJ0q32BpRvYaHNsO-HfLctZDgnSv0Zpn_2DEuV87z5lpkyuI3v9PbgGTbK0MnTnnI56gfSxwGUzbnAEO6sYEWDg3xhpfx-tQQUjj7R0c3MqUJGJQoKtnEvbkNC46ofxey-196miU2RJZyKx-MRrzGmltVY10uAbiiQPTIy6KdDvWB5PtygIt4bBuBn5enJYz-jKqkI9hdU18PNFeal8h6oAjtDe267I7M9Hro_DP-I2D2H2sV_kIkoxmhI26T77',
    tags: ['Limited Edition'],
    colors: ['#ba1a1a', '#CCFF00'],
    sizes: [8, 9, 10, 11]
  },
  {
    id: 'drift-lite-4',
    name: 'Drift Lite 4',
    price: 110.00,
    brand: 'Casual Collective',
    category: 'Casual',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBS_BcrIerbo--CDJNgJcL8cxbT8vTowrXB4JL_6aD0c4qeiV2SiE-0YqzwXEBksevXRHOr_E2-TToPdz1avPA8M4NzI6gtSUWsokSEBFgjk2UVU9KMQFPr7sRNpyUGcLahWkiqdtmssVR2E0F7Y-r-IUYzuctHZqWY3BDnEexmkZ0iC5LKV48b0BbNRJkk80IY95SS7Wjoi0vLMYhYWI0qztln6XRrDqDppyML9D-HG35H1cFhq27F-UyW_pl-S5Ykv3LlG_564De',
    tags: [],
    colors: ['#2288aa', '#5f5e5e'],
    sizes: [7, 8, 9, 10, 11, 12]
  }
];
