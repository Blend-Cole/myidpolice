import {defineConfig, CookieSessionStorage} from '@shopify/hydrogen/config';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'GB',
    defaultLanguageCode: 'EN',
    storeDomain: 'custom-checkouts.myshopify.com',
    storefrontToken: Oxygen?.env?.PUBLIC_STOREFRONT_API_TOKEN,
    storefrontApiVersion: '2022-07',
  },
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
