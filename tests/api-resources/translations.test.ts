// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stainlessdeepl from 'stainlessdeepl';
import { Response } from 'node-fetch';

const client = new Stainlessdeepl({
  authKey: 'DeepL-Auth-Key 4dbac1ee-605a-450e-93f6-be6c6c9d209a:fx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'https://api-free.deepl.com/v2/translate',
});

describe('resource translations', () => {
  test('translate: only required params', async () => {
    const responsePromise = client.translations.translate({
      target_lang: 'AR',
      text: ['Hello, World!', 'Hello, World!', 'Hello, World!'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('translate: required and optional params', async () => {
    const response = await client.translations.translate({
      target_lang: 'AR',
      text: ['Hello, World!', 'Hello, World!', 'Hello, World!'],
      context: 'context',
      formality: 'default',
      glossary_id: {},
      ignore_tags: ['a', 'p', 'span'],
      non_splitting_tags: ['a', 'p', 'span'],
      outline_detection: true,
      preserve_formatting: true,
      show_billed_characters: true,
      source_lang: 'AR',
      split_sentences: '0',
      splitting_tags: ['a', 'p', 'span'],
      tag_handling: 'xml',
    });
  });
});
