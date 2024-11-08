// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Usage extends APIResource {
  /**
   * Retrieve usage information within the current billing period together with the
   * corresponding account limits. Usage is returned for:
   *
   * - translated characters
   * - translated documents
   * - translated documents, team totals (for team accounts only)
   *
   * Character usage includes both text and document translations, and is measured by
   * the source text length in Unicode code points, so for example "A", "Δ", "あ",
   * and "深" are each counted as a single character.
   *
   * Document usage only includes document translations, and is measured in
   * individual documents.
   *
   * Depending on the user account type, some usage types will be omitted. Character
   * usage is only included for developer accounts. Document usage is only included
   * for non-developer accounts, and team-combined document usage is only included
   * for non-developer team accounts.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<UsageListResponse> {
    return this._client.get('/usage', options);
  }
}

export interface UsageListResponse {
  /**
   * Characters translated so far in the current billing period.
   */
  character_count?: number;

  /**
   * Current maximum number of characters that can be translated per billing period.
   * If cost control is set, the cost control limit will be returned in this field.
   */
  character_limit?: number;
}

export declare namespace Usage {
  export { type UsageListResponse as UsageListResponse };
}
