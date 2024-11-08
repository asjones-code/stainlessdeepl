// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import { type Response } from '../_shims/index';

export class Documents extends APIResource {
  /**
   * This call uploads a document and queues it for translation. The call returns
   * once the upload is complete, returning a document ID and key which can be used
   * to
   * [query the translation status](https://www.deepl.com/docs-api/documents/get-document-status)
   * and to
   * [download the translated document](https://www.deepl.com/docs-api/documents/download-document)
   * once translation is complete.
   *
   * Because the request includes a file upload, it must be an HTTP POST request with
   * content type `multipart/form-data`.
   *
   * Please be aware that the uploaded document is automatically removed from the
   * server once the translated document has been downloaded. You have to upload the
   * document again in order to restart the translation.
   *
   * The maximum upload limit for documents is
   * [available here](https://support.deepl.com/hc/articles/360020582359-Document-formats)
   * and may vary based on API plan and document type.
   *
   * You may specify the glossary to use for the document translation using the
   * `glossary_id` parameter. **Important:** This requires the `source_lang`
   * parameter to be set and the language pair of the glossary has to match the
   * language pair of the request.
   */
  create(body: DocumentCreateParams, options?: Core.RequestOptions): Core.APIPromise<DocumentCreateResponse> {
    return this._client.post('/document', Core.multipartFormRequestOptions({ body, ...options }));
  }

  /**
   * Retrieve the current status of a document translation process. If the
   * translation is still in progress, the estimated time remaining is also included
   * in the response.
   */
  retrieve(
    documentId: string,
    body: DocumentRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocumentRetrieveResponse> {
    return this._client.post(`/document/${documentId}`, {
      body,
      ...options,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...options?.headers },
    });
  }

  /**
   * Once the status of the document translation process is `done`, the result can be
   * downloaded.
   *
   * For privacy reasons the translated document is automatically removed from the
   * server once it was downloaded and cannot be downloaded again.
   */
  result(
    documentId: string,
    body: DocumentResultParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    return this._client.post(`/document/${documentId}/result`, {
      body,
      ...options,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...options?.headers },
      __binaryResponse: true,
    });
  }
}

export interface DocumentCreateResponse {
  /**
   * A unique ID assigned to the uploaded document and the translation process. Must
   * be used when referring to this particular document in subsequent API requests.
   */
  document_id?: string;

  /**
   * A unique key that is used to encrypt the uploaded document as well as the
   * resulting translation on the server side. Must be provided with every subsequent
   * API request regarding this particular document.
   */
  document_key?: string;
}

export interface DocumentRetrieveResponse {
  /**
   * A unique ID assigned to the uploaded document and the requested translation
   * process. The same ID that was used when requesting the translation status.
   */
  document_id: string;

  /**
   * A short description of the state the document translation process is currently
   * in. Possible values are:
   *
   * - `queued` - the translation job is waiting in line to be processed
   * - `translating` - the translation is currently ongoing
   * - `done` - the translation is done and the translated document is ready for
   *   download
   * - `error` - an irrecoverable error occurred while translating the document
   */
  status: 'queued' | 'translating' | 'done' | 'error';

  /**
   * The number of characters billed to your account. The characters will only be
   * billed after a successful download request.
   */
  billed_characters?: number;

  /**
   * A short description of the error, if available. Note that the content is subject
   * to change. This parameter may be included if an error occurred during
   * translation.
   */
  error_message?: string;

  /**
   * Estimated number of seconds until the translation is done. This parameter is
   * only included while `status` is `"translating"`.
   */
  seconds_remaining?: number;
}

export interface DocumentCreateParams {
  /**
   * The document file to be translated. The file name should be included in this
   * part's content disposition. As an alternative, the filename parameter can be
   * used. The following file types and extensions are supported:
   *
   * - `docx` - Microsoft Word Document
   * - `pptx` - Microsoft PowerPoint Document
   * - `xlsx` - Microsoft Excel Document
   * - `pdf` - Portable Document Format
   * - `htm / html` - HTML Document
   * - `txt` - Plain Text Document
   * - `xlf / xliff` - XLIFF Document, version 2.1
   * - `srt` - SRT Document
   */
  file: Core.Uploadable;

  /**
   * The language into which the text should be translated. Options currently
   * available:
   *
   * - `BG` - Bulgarian
   * - `CS` - Czech
   * - `DA` - Danish
   * - `DE` - German
   * - `EL` - Greek
   * - `EN` - English (unspecified variant for backward compatibility; please select
   *   `EN-GB` or `EN-US` instead)
   * - `EN-GB` - English (British)
   * - `EN-US` - English (American)
   * - `ES` - Spanish
   * - `ET` - Estonian
   * - `FI` - Finnish
   * - `FR` - French
   * - `HU` - Hungarian
   * - `ID` - Indonesian
   * - `IT` - Italian
   * - `JA` - Japanese
   * - `KO` - Korean
   * - `LT` - Lithuanian
   * - `LV` - Latvian
   * - `NB` - Norwegian (Bokmål)
   * - `NL` - Dutch
   * - `PL` - Polish
   * - `PT` - Portuguese (unspecified variant for backward compatibility; please
   *   select `PT-BR` or `PT-PT` instead)
   * - `PT-BR` - Portuguese (Brazilian)
   * - `PT-PT` - Portuguese (all Portuguese varieties excluding Brazilian Portuguese)
   * - `RO` - Romanian
   * - `RU` - Russian
   * - `SK` - Slovak
   * - `SL` - Slovenian
   * - `SV` - Swedish
   * - `TR` - Turkish
   * - `UK` - Ukrainian
   * - `ZH` - Chinese (unspecified variant for backward compatibility; please select
   *   `ZH-HANS` instead)
   * - `ZH-HANS` - Chinese (simplified)
   */
  target_lang:
    | 'BG'
    | 'CS'
    | 'DA'
    | 'DE'
    | 'EL'
    | 'EN-GB'
    | 'EN-US'
    | 'ES'
    | 'ET'
    | 'FI'
    | 'FR'
    | 'HU'
    | 'ID'
    | 'IT'
    | 'JA'
    | 'KO'
    | 'LT'
    | 'LV'
    | 'NB'
    | 'NL'
    | 'PL'
    | 'PT-BR'
    | 'PT-PT'
    | 'RO'
    | 'RU'
    | 'SK'
    | 'SL'
    | 'SV'
    | 'TR'
    | 'UK'
    | 'ZH'
    | 'ZH-HANS';

  /**
   * The name of the uploaded file. Can be used as an alternative to including the
   * file name in the file part's content disposition.
   */
  filename?: string;

  /**
   * Sets whether the translated text should lean towards formal or informal
   * language. This feature currently only works for target languages `DE` (German),
   * `FR` (French), `IT` (Italian), `ES` (Spanish), `NL` (Dutch), `PL` (Polish),
   * `PT-BR` and `PT-PT` (Portuguese), `JA` (Japanese), and `RU` (Russian). Learn
   * more about the plain/polite feature for Japanese
   * [here](https://support.deepl.com/hc/en-us/articles/6306700061852-About-the-plain-polite-feature-in-Japanese).
   * Setting this parameter with a target language that does not support formality
   * will fail, unless one of the `prefer_...` options are used. Possible options
   * are:
   *
   * - `default` (default)
   * - `more` - for a more formal language
   * - `less` - for a more informal language
   * - `prefer_more` - for a more formal language if available, otherwise fallback to
   *   default formality
   * - `prefer_less` - for a more informal language if available, otherwise fallback
   *   to default formality
   */
  formality?: 'default' | 'more' | 'less' | 'prefer_more' | 'prefer_less';

  /**
   * A unique ID assigned to a glossary.
   */
  glossary_id?: string;

  /**
   * File extension of desired format of translated file, for example: `docx`. If
   * unspecified, by default the translated file will be in the same format as the
   * input file.
   *
   * Note: Not all combinations of input file and translation file extensions are
   * permitted. See
   * [Document Format Conversions](https://www.deepl.com/docs-api/documents/format-conversions)
   * for the permitted combinations.
   */
  output_format?: string;

  /**
   * Language of the text to be translated. Options currently available:
   *
   * - `BG` - Bulgarian
   * - `CS` - Czech
   * - `DA` - Danish
   * - `DE` - German
   * - `EL` - Greek
   * - `EN` - English
   * - `ES` - Spanish
   * - `ET` - Estonian
   * - `FI` - Finnish
   * - `FR` - French
   * - `HU` - Hungarian
   * - `ID` - Indonesian
   * - `IT` - Italian
   * - `JA` - Japanese
   * - `KO` - Korean
   * - `LT` - Lithuanian
   * - `LV` - Latvian
   * - `NB` - Norwegian (Bokmål)
   * - `NL` - Dutch
   * - `PL` - Polish
   * - `PT` - Portuguese (all Portuguese varieties mixed)
   * - `RO` - Romanian
   * - `RU` - Russian
   * - `SK` - Slovak
   * - `SL` - Slovenian
   * - `SV` - Swedish
   * - `TR` - Turkish
   * - `UK` - Ukrainian
   * - `ZH` - Chinese
   *
   * If this parameter is omitted, the API will attempt to detect the language of the
   * text and translate it.
   */
  source_lang?:
    | 'BG'
    | 'CS'
    | 'DA'
    | 'DE'
    | 'EL'
    | 'EN'
    | 'ES'
    | 'ET'
    | 'FI'
    | 'FR'
    | 'HU'
    | 'ID'
    | 'IT'
    | 'JA'
    | 'KO'
    | 'LT'
    | 'LV'
    | 'NB'
    | 'NL'
    | 'PL'
    | 'PT'
    | 'RO'
    | 'RU'
    | 'SK'
    | 'SL'
    | 'SV'
    | 'TR'
    | 'UK'
    | 'ZH';
}

export interface DocumentRetrieveParams {
  /**
   * The document encryption key that was sent to the client when the document was
   * uploaded to the API.
   */
  document_key: string;
}

export interface DocumentResultParams {
  /**
   * The document encryption key that was sent to the client when the document was
   * uploaded to the API.
   */
  document_key: string;
}

export declare namespace Documents {
  export {
    type DocumentCreateResponse as DocumentCreateResponse,
    type DocumentRetrieveResponse as DocumentRetrieveResponse,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentRetrieveParams as DocumentRetrieveParams,
    type DocumentResultParams as DocumentResultParams,
  };
}
