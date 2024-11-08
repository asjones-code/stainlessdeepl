// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Languages extends APIResource {
  /**
   * Retrieve the list of languages that are currently supported for translation,
   * either as source or target language, respectively.
   *
   * As of January 2024, Arabic (AR) is supported as a source and target language for
   * text translation, but it is not yet supported for document translation.
   * Therefore, Arabic has not yet been added to the `/languages` endpoint. We will
   * add Arabic to the `/languages` endpoint after document translation support is
   * added.
   */
  list(query?: LanguageListParams, options?: Core.RequestOptions): Core.APIPromise<LanguageListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<LanguageListResponse>;
  list(
    query: LanguageListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LanguageListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/languages', { query, ...options });
  }
}

export type LanguageListResponse = Array<LanguageListResponse.LanguageListResponseItem>;

export namespace LanguageListResponse {
  export interface LanguageListResponseItem {
    /**
     * The language code of the given language.
     */
    language: string;

    /**
     * Name of the language in English.
     */
    name: string;

    /**
     * Denotes formality support in case of a target language listing.
     */
    supports_formality?: boolean;
  }
}

export interface LanguageListParams {
  /**
   * Sets whether source or target languages should be listed. Possible options are:
   *
   * - `source` (default): For languages that can be used in the `source_lang`
   *   parameter of
   *   [translate](https://www.deepl.com/docs-api/translate-text/translate-text)
   *   requests.
   * - `target`: For languages that can be used in the `target_lang` parameter of
   *   [translate](https://www.deepl.com/docs-api/translate-text/translate-text)
   *   requests.
   */
  type?: 'source' | 'target';
}

export declare namespace Languages {
  export { type LanguageListResponse as LanguageListResponse, type LanguageListParams as LanguageListParams };
}
