// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  DocumentCreateParams,
  DocumentCreateResponse,
  DocumentResultParams,
  DocumentRetrieveParams,
  DocumentRetrieveResponse,
  Documents,
} from './resources/documents';
import { GlossaryLanguagePairListResponse, GlossaryLanguagePairs } from './resources/glossary-language-pairs';
import {
  TranslationTranslateParams,
  TranslationTranslateResponse,
  Translations,
} from './resources/translations';
import {
  Glossaries,
  Glossary,
  GlossaryCreateParams,
  GlossaryListResponse,
} from './resources/glossaries/glossaries';
import { MetaInformations } from './resources/meta-informations/meta-informations';

const environments = {
  production: 'https://api.deepl.com/v2',
  environment_1: 'https://api-free.deepl.com/v2',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Authentication key for accessing DeepL API services
   */
  authKey?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.deepl.com/v2`
   * - `environment_1` corresponds to `https://api-free.deepl.com/v2`
   */
  environment?: Environment;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['STAINLESSDEEPL_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Stainlessdeepl API.
 */
export class Stainlessdeepl extends Core.APIClient {
  authKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Stainlessdeepl API.
   *
   * @param {string | undefined} [opts.authKey=process.env['DEEPL_AUTH_KEY'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['STAINLESSDEEPL_BASE_URL'] ?? https://api.deepl.com/v2] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('STAINLESSDEEPL_BASE_URL'),
    authKey = Core.readEnv('DEEPL_AUTH_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (authKey === undefined) {
      throw new Errors.StainlessdeeplError(
        "The DEEPL_AUTH_KEY environment variable is missing or empty; either provide it, or instantiate the Stainlessdeepl client with an authKey option, like new Stainlessdeepl({ authKey: 'My Auth Key' }).",
      );
    }

    const options: ClientOptions = {
      authKey,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.StainlessdeeplError(
        'Ambiguous URL; The `baseURL` option (or STAINLESSDEEPL_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.authKey = authKey;
  }

  translations: API.Translations = new API.Translations(this);
  documents: API.Documents = new API.Documents(this);
  glossaryLanguagePairs: API.GlossaryLanguagePairs = new API.GlossaryLanguagePairs(this);
  glossaries: API.Glossaries = new API.Glossaries(this);
  metaInformations: API.MetaInformations = new API.MetaInformations(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: this.authKey };
  }

  static Stainlessdeepl = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static StainlessdeeplError = Errors.StainlessdeeplError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export {
  StainlessdeeplError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

Stainlessdeepl.Translations = Translations;
Stainlessdeepl.Documents = Documents;
Stainlessdeepl.GlossaryLanguagePairs = GlossaryLanguagePairs;
Stainlessdeepl.Glossaries = Glossaries;
Stainlessdeepl.MetaInformations = MetaInformations;

export declare namespace Stainlessdeepl {
  export type RequestOptions = Core.RequestOptions;

  export {
    Translations as Translations,
    type TranslationTranslateResponse as TranslationTranslateResponse,
    type TranslationTranslateParams as TranslationTranslateParams,
  };

  export {
    Documents as Documents,
    type DocumentCreateResponse as DocumentCreateResponse,
    type DocumentRetrieveResponse as DocumentRetrieveResponse,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentRetrieveParams as DocumentRetrieveParams,
    type DocumentResultParams as DocumentResultParams,
  };

  export {
    GlossaryLanguagePairs as GlossaryLanguagePairs,
    type GlossaryLanguagePairListResponse as GlossaryLanguagePairListResponse,
  };

  export {
    Glossaries as Glossaries,
    type Glossary as Glossary,
    type GlossaryListResponse as GlossaryListResponse,
    type GlossaryCreateParams as GlossaryCreateParams,
  };

  export { MetaInformations as MetaInformations };
}

export default Stainlessdeepl;
