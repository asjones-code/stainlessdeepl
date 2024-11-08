// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stainlessdeepl from 'stainlessdeepl';
import { Response } from 'node-fetch';

const client = new Stainlessdeepl({
  authKey: 'My Auth Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource languages', () => {
  test('list', async () => {
    const responsePromise = client.metaInformations.languages.list();
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
      client.metaInformations.languages.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Stainlessdeepl.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.metaInformations.languages.list({ type: 'source' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Stainlessdeepl.NotFoundError);
  });
});
