import { useEffect, useState } from 'react';

export type GoogleReviewItem = {
  name: string;
  date: string;
  rating: number;
  text: string;
};

type GooglePlacesReview = {
  rating?: number;
  relativePublishTimeDescription?: string;
  text?: {
    text?: string;
  };
  authorAttribution?: {
    displayName?: string;
  };
};

type GooglePlacesResponse = {
  reviews?: GooglePlacesReview[];
};

export function useGoogleReviews() {
  const [reviews, setReviews] = useState<GoogleReviewItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
    const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      return;
    }

    const controller = new AbortController();

    const fetchReviews = async () => {
      try {
        setIsLoading(true);

        const fields = encodeURIComponent('reviews');
        const response = await fetch(`https://places.googleapis.com/v1/places/${placeId}?fields=${fields}`, {
          method: 'GET',
          headers: {
            'X-Goog-Api-Key': apiKey,
          },
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error('Failed to fetch Google reviews.');
        }

        const data = (await response.json()) as GooglePlacesResponse;
        const mappedReviews: GoogleReviewItem[] = (data.reviews ?? [])
          .filter((item) => (item.text?.text ?? '').trim().length > 0)
          .slice(0, 6)
          .map((item) => ({
            name: item.authorAttribution?.displayName ?? 'Google User',
            date: item.relativePublishTimeDescription ?? 'Recently',
            rating: Math.max(1, Math.min(5, Math.round(item.rating ?? 5))),
            text: item.text?.text ?? '',
          }));

        setReviews(mappedReviews);
      } catch {
        setReviews([]);
      } finally {
        setIsLoading(false);
      }
    };

    void fetchReviews();

    return () => controller.abort();
  }, []);

  return { reviews, isLoading };
}
