import { createClient } from 'newt-client-js'

export interface Article {
  _id: string
  title: string
  slug: string
  body: string
  meta: string
  coverImage : string
}

export type NewtColumnArticle = {
  _id: string;
  _sys: NewtSys;
  title: string;
  body: string;
  description: string;
  coverImage: NewtImage;
  meta: NewtMeta;
  category: NewtCategory[];
};

export const newtClient = createClient({
  spaceUid: import.meta.env.NEWT_SPACE_UID,
  token: import.meta.env.NEWT_CDN_API_TOKEN,
  apiType: 'cdn',
})