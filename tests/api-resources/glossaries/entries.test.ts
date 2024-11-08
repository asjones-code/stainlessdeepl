// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stainlessdeepl from 'stainlessdeepl';
import { Response } from 'node-fetch';

const client = new Stainlessdeepl({
  authKey: '4dbac1ee-605a-450e-93f6-be6c6c9d209a:fx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'https://api-free.deepl.com/v2/translate',
});

describe('resource entries', () => {
  test('list', async () => {
    const responsePromise = client.glossaries.entries.list('glossary_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.glossaries.entries.list('glossary_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Stainlessdeepl.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.glossaries.entries.list(
        'glossary_id',
        { Accept: 'text/tab-separated-values' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Stainlessdeepl.NotFoundError);
  });
});
