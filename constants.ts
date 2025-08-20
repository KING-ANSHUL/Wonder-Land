export const TOPICS_DATA = {
  'Nature & Living Things': {
    image: '/Nature.png',
    subTopics: [
      'Animal groups & adaptations',
      'Life cycles & food chains',
      'Plant types, parts & needs',
      'Habitats/biomes & ecosystems',
    ],
  },
  'Science & Tech': {
    image: '/Science.png',
    subTopics: [
      'Solar System & night sky',
      'Earth systems (land, water, air, life)',
      'Landforms & basic geology',
      'Weather & seasons',
      'Space exploration basics',
      'Forces, motion & energy',
      'Simple machines',
      'Light, sound & heat',
      'Electricity & magnetism',
      'Materials & changes',
      'Design thinking & making',
    ],
  },
  'Health & Human Body': {
    image: '/Health.png',
    subTopics: [
      'Body systems & senses',
      'Growth & development',
      'Healthy habits (nutrition, hygiene, sleep, exercise)',
      'Safety & first aid',
      'Emotions & well-being',
    ],
  },
  'India: Places & Monuments': {
    image: '/Monuments.png',
    subTopics: [
      'National monuments & heritage',
      'Regions & states (culture, languages, food)',
      'Natural landscapes (mountains, coasts, forests, deserts)',
      'Cities & transport networks',
      'Local history & legends',
    ],
  },
  'Arts & Crafts': {
    image: '/Arts.png',
    subTopics: [
      'Visual arts (folk & contemporary)',
      'Performing arts (dance, music, theatre)',
      'Craft traditions (weaving, pottery, puppetry, toys)',
      'Making processes, tools & safety',
    ],
  },
  'Community & Civics': {
    image: '/Community.png',
    subTopics: [
      'Community helpers & public services',
      'Rules, rights & responsibilities',
      'Government basics & voting',
      'Citizenship & environmental actions',
    ],
  },
  'Sports & Games': {
    image: '/Sports.png',
    subTopics: [
      'Sport types (team/individual; indoor/outdoor)',
      'Skills, strategy & fair play',
      'Equipment, fitness & safety',
      'Sports in India & global events',
    ],
  },
  'Food & Agriculture': {
    image: '/Food.png',
    subTopics: [
      'Crops & farming basics',
      'Farm-to-table (processing, transport)',
      'Food groups & nutrition',
      'Spices & regional cuisines',
      'Pollination & simple kitchen science',
    ],
  },
  'Environment & Wildlife': {
    image: '/Wildlife.png',
    subTopics: [
      'Biodiversity & ecosystems',
      'Threats & endangered species',
      'Protected areas & conservation laws',
      'Weather basics (temperature, wind, rain)',
      'Monsoon & extreme events (safety)',
      'Clouds & water cycle',
    ],
  },
  'Behind the Badge': {
    image: '/Careers.png',
    subTopics: [
      'Day-in-the-life narratives (e.g., astronaut, doctor, etc.)',
    ],
  },
} as const;

export type Topic = keyof typeof TOPICS_DATA;
export const TOPICS = Object.keys(TOPICS_DATA) as Topic[];
export const TOPIC_IMAGES: Record<Topic, string> =
  (Object.keys(TOPICS_DATA) as Topic[]).reduce((acc, t) => {
    acc[t] = TOPICS_DATA[t].image;
    return acc;
  }, {} as Record<Topic, string>);

