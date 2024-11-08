// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Stainlessdeepl, { toFile } from 'stainlessdeepl';
import { Response } from 'node-fetch';

const client = new Stainlessdeepl({
  authKey: '4dbac1ee-605a-450e-93f6-be6c6c9d209a:fx',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'https://api-free.deepl.com/v2/translate',
});

describe('resource documents', () => {
  test('create: only required params', async () => {
    const responsePromise = client.documents.create({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      target_lang: 'BG',
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
    const response = await client.documents.create({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      target_lang: 'BG',
      filename: 'filename',
      formality: 'default',
      glossary_id: 'def3a26b-3e84-45b3-84ae-0c0aaf3525f7',
      output_format: 'output_format',
      source_lang: 'BG',
    });
  });

  test('retrieve: only required params', async () => {
    const responsePromise = client.documents.retrieve('04DE5AD98A02647D83285A36021911C6', {
      document_key: '0CB0054F1C132C1625B392EADDA41CB754A742822F6877173029A6C487E7F60A',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.documents.retrieve('04DE5AD98A02647D83285A36021911C6', {
      document_key: '0CB0054F1C132C1625B392EADDA41CB754A742822F6877173029A6C487E7F60A',
    });
  });

  test('result: required and optional params', async () => {
    const response = await client.documents.result('04DE5AD98A02647D83285A36021911C6', {
      document_key: '0CB0054F1C132C1625B392EADDA41CB754A742822F6877173029A6C487E7F60A',
    });
  });
});
