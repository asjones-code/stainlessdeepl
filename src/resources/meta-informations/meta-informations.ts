// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as LanguagesAPI from './languages';
import { LanguageListParams, LanguageListResponse, Languages } from './languages';
import * as UsageAPI from './usage';
import { Usage, UsageListResponse } from './usage';

export class MetaInformations extends APIResource {
  usage: UsageAPI.Usage = new UsageAPI.Usage(this._client);
  languages: LanguagesAPI.Languages = new LanguagesAPI.Languages(this._client);
}

MetaInformations.Usage = Usage;
MetaInformations.Languages = Languages;

export declare namespace MetaInformations {
  export { Usage as Usage, type UsageListResponse as UsageListResponse };

  export {
    Languages as Languages,
    type LanguageListResponse as LanguageListResponse,
    type LanguageListParams as LanguageListParams,
  };
}
