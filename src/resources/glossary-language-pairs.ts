// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class GlossaryLanguagePairs extends APIResource {
  /**
   * Retrieve the list of language pairs supported by the glossary feature.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<GlossaryLanguagePairListResponse> {
    return this._client.get('/glossary-language-pairs', options);
  }
}

export interface GlossaryLanguagePairListResponse {
  /**
   * The list of supported languages
   */
  supported_languages?: Array<GlossaryLanguagePairListResponse.SupportedLanguage>;
}

export namespace GlossaryLanguagePairListResponse {
  export interface SupportedLanguage {
    /**
     * The language in which the source texts in the glossary are specified.
     */
    source_lang: string;

    /**
     * The language in which the target texts in the glossary are specified.
     */
    target_lang: string;
  }
}

export declare namespace GlossaryLanguagePairs {
  export { type GlossaryLanguagePairListResponse as GlossaryLanguagePairListResponse };
}
