// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Entries extends APIResource {
  /**
   * List the entries of a single glossary in the format specified by the `Accept`
   * header.
   */
  list(glossaryId: string, params?: EntryListParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(glossaryId: string, options?: Core.RequestOptions): Core.APIPromise<void>;
  list(
    glossaryId: string,
    params: EntryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.list(glossaryId, {}, params);
    }
    const { Accept } = params;
    return this._client.get(`/glossaries/${glossaryId}/entries`, {
      ...options,
      headers: {
        ...(Accept?.toString() != null ? { Accept: Accept?.toString() } : undefined),
        ...options?.headers,
      },
    });
  }
}

export interface EntryListParams {
  /**
   * The requested format of the returned glossary entries. Currently, supports only
   * `text/tab-separated-values`.
   */
  Accept?: 'text/tab-separated-values';
}

export declare namespace Entries {
  export { type EntryListParams as EntryListParams };
}
