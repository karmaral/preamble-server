import { createApi } from 'unsplash-js';
import type { Random } from 'unsplash-js/dist/methods/photos/types';

const collections = [
  '2156994', /* Nature Backgrounds (Momentum) - Nicholas Prozorovsky */
  '327760', /* Nature - Alex Chaves */
];

const accessKey = process.env.UNSPLASH_ACCESS_KEY || '';

const unsplash = createApi({ accessKey });

export async function fetchRandomImage(): Promise<Random> {
  const fetch = await unsplash.photos.getRandom({
    collectionIds: collections,
  });
  const result = fetch.response as Random;

  return result;
}
