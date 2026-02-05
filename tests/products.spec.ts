import { test, expect } from '@playwright/test';

test.describe('Products API', () => {
  test('should return list of products', async ({ request }) => {
    const response = await request.get('https://fakestoreapi.com/products');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.length).toBeGreaterThan(0);
  });
});
