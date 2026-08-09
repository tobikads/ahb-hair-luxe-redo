/**
 * CLIENT REVIEWS — AHB Hair Extensions
 *
 * Only add reviews here that a real client actually left.
 * Nothing in this file is invented; while the array is empty the site shows an
 * honest editorial "Client Diary" placeholder instead of fake social proof.
 *
 * To publish a review, add an entry below. Mark ONE entry `featured: true`
 * to give it the large opening quote treatment.
 */

export type ClientReview = {
  /** Client name or initials, exactly as they gave it. */
  name: string;
  /** Optional city / state. */
  location?: string;
  /** Optional product they purchased. */
  product?: string;
  /** The review, in the client's own words. */
  body: string;
  featured?: boolean;
};

export const clientReviews: ClientReview[] = [];

export const featuredReview: ClientReview | null =
  clientReviews.find((r) => r.featured) ?? clientReviews[0] ?? null;

export const supportingReviews: ClientReview[] = clientReviews.filter(
  (r) => r !== featuredReview,
);
