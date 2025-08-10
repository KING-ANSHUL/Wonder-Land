export const TOPICS = ['Monuments', 'Flowers', 'Animals'] as const;
export type Topic = (typeof TOPICS)[number];

export const TOPIC_IMAGES: Record<Topic, string> = {
  Monuments: '/Monuments.png',
  Flowers: '/Flowers.png',
  Animals: '/Animals.png',
};
