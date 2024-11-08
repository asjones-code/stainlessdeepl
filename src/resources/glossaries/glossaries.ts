// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EntriesAPI from './entries';
import { Entries, EntryListParams } from './entries';

export class Glossaries extends APIResource {
  entries: EntriesAPI.Entries = new EntriesAPI.Entries(this._client);

  /**
   * Create a Glossary
   */
  create(body: GlossaryCreateParams, options?: Core.RequestOptions): Core.APIPromise<Glossary> {
    return this._client.post('/glossaries', { body, ...options });
  }

  /**
   * Retrieve meta information for a single glossary, omitting the glossary entries.
   */
  retrieve(glossaryId: string, options?: Core.RequestOptions): Core.APIPromise<Glossary> {
    return this._client.get(`/glossaries/${glossaryId}`, options);
  }

  /**
   * List all glossaries and their meta-information, but not the glossary entries.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<GlossaryListResponse> {
    return this._client.get('/glossaries', options);
  }

  /**
   * Deletes the specified glossary.
   */
  delete(glossaryId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/glossaries/${glossaryId}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface Glossary {
  /**
   * The creation time of the glossary in the ISO 8601-1:2019 format (e.g.:
   * `2021-08-03T14:16:18.329Z`).
   */
  creation_time?: string;

  /**
   * The number of entries in the glossary.
   */
  entry_count?: number;

  /**
   * A unique ID assigned to a glossary.
   */
  glossary_id?: string;

  /**
   * Name associated with the glossary.
   */
  name?: string;

  /**
   * Indicates if the newly created glossary can already be used in `translate`
   * requests. If the created glossary is not yet ready, you have to wait and check
   * the `ready` status of the glossary before using it in a `translate` request.
   */
  ready?: boolean;

  /**
   * The language in which the source texts in the glossary are specified.
   */
  source_lang?:
    | 'da'
    | 'de'
    | 'en'
    | 'es'
    | 'fr'
    | 'it'
    | 'ja'
    | 'ko'
    | 'nb'
    | 'nl'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sv'
    | 'zh';

  /**
   * The language in which the target texts in the glossary are specified.
   */
  target_lang?:
    | 'da'
    | 'de'
    | 'en'
    | 'es'
    | 'fr'
    | 'it'
    | 'ja'
    | 'ko'
    | 'nb'
    | 'nl'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sv'
    | 'zh';
}

export interface GlossaryListResponse {
  glossaries?: Array<Glossary>;
}

export interface GlossaryCreateParams {
  /**
   * The entries of the glossary. The entries have to be specified in the format
   * provided by the `entries_format` parameter.
   */
  entries: string;

  /**
   * The format in which the glossary entries are provided. Formats currently
   * available:
   *
   * - `tsv` (default) - tab-separated values
   * - `csv` - comma-separated values
   *
   * See
   * [Supported Glossary Formats](https://www.deepl.com/docs-api/glossaries/formats)
   * for details about each format.
   */
  entries_format: 'tsv' | 'csv';

  /**
   * Name to be associated with the glossary.
   */
  name: string;

  /**
   * The language in which the source texts in the glossary are specified.
   */
  source_lang:
    | 'da'
    | 'de'
    | 'en'
    | 'es'
    | 'fr'
    | 'it'
    | 'ja'
    | 'ko'
    | 'nb'
    | 'nl'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sv'
    | 'zh';

  /**
   * The language in which the target texts in the glossary are specified.
   */
  target_lang:
    | 'da'
    | 'de'
    | 'en'
    | 'es'
    | 'fr'
    | 'it'
    | 'ja'
    | 'ko'
    | 'nb'
    | 'nl'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sv'
    | 'zh';
}

Glossaries.Entries = Entries;

export declare namespace Glossaries {
  export {
    type Glossary as Glossary,
    type GlossaryListResponse as GlossaryListResponse,
    type GlossaryCreateParams as GlossaryCreateParams,
  };

  export { Entries as Entries, type EntryListParams as EntryListParams };
}
