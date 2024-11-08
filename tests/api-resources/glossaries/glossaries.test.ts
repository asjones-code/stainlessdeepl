// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stainlessdeepl from 'stainlessdeepl';
import { Response } from 'node-fetch';

const client = new Stainlessdeepl({
  authKey: 'DeepL-Auth-Key 4dbac1ee-605a-450e-93f6-be6c6c9d209a:fx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'https://api-free.deepl.com/v2/translate',
});

describe('resource glossaries', () => {
  test('create: only required params', async () => {
    const responsePromise = client.glossaries.create({
      entries: 'Hello\tGuten Tag',
      entries_format: 'tsv',
      name: 'My Glossary',
      source_lang: 'da',
      target_lang: 'da',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.glossaries.create({
      entries: 'Hello\tGuten Tag',
      entries_format: 'tsv',
      name: 'My Glossary',
      source_lang: 'da',
      target_lang: 'da',
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.glossaries.retrieve('glossary_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.glossaries.retrieve('glossary_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Stainlessdeepl.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.glossaries.list();
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
    await expect(client.glossaries.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Stainlessdeepl.NotFoundError,
    );
  });

  test('delete', async () => {
    const responsePromise = client.glossaries.delete('glossary_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.glossaries.delete('glossary_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Stainlessdeepl.NotFoundError);
  });
});
