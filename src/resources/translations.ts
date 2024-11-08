// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Translations extends APIResource {
  /**
   * The translate function.
   *
   * The total request body size must not exceed 128 KiB (128 · 1024 bytes). Please
   * split up your text into multiple calls if it exceeds this limit.
   */
  translate(
    body: TranslationTranslateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TranslationTranslateResponse> {
    return this._client.post('/translate', { body, ...options });
  }
}

export interface TranslationTranslateResponse {
  translations?: Array<TranslationTranslateResponse.Translation>;
}

export namespace TranslationTranslateResponse {
  export interface Translation {
    /**
     * Number of characters counted by DeepL for billing purposes. Only present if the
     * show_billed_characters parameter is set to true.
     */
    billed_characters?: number;

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
    detected_source_language?:
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

    /**
     * The translated text.
     */
    text?: string;
  }
}

export interface TranslationTranslateParams {
  /**
   * The language into which the text should be translated. Options currently
   * available:
   *
   * - `AR` - Arabic [1]
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
   * - `PT-PT` - Portuguese (all Portuguese variants excluding Brazilian Portuguese)
   * - `RO` - Romanian
   * - `RU` - Russian
   * - `SK` - Slovak
   * - `SL` - Slovenian
   * - `SV` - Swedish
   * - `TR` - Turkish
   * - `UK` - Ukrainian
   * - `ZH` - Chinese (unspecified variant for backward compatibility; please select
   *   `ZH-HANS` or `ZH-HANT` instead)
   * - `ZH-HANS` - Chinese (simplified)
   * - `ZH-HANT` - Chinese (traditional)
   *
   * [1] Please note that Arabic and traditional Chinese have not yet been added to
   * the /languages endpoint because these languages do not yet support document
   * translation; only text translation is supported for Arabic and traditional
   * Chinese at this time. When document translation support is added for these
   * languages, we will a) remove this note and b) add the languages to the
   * /languages endpoint where appropriate.
   */
  target_lang:
    | 'AR'
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
    | 'ZH-HANS'
    | 'ZH-HANT';

  /**
   * Text to be translated. Only UTF-8-encoded plain text is supported. The parameter
   * may be specified multiple times and translations are returned in the same order
   * as they are requested. Each of the parameter values may contain multiple
   * sentences. Up to 50 texts can be sent for translation in one request.
   */
  text: Array<string>;

  /**
   * The `context` parameter makes it possible to include additional context that can
   * influence a translation but is not translated itself. This additional context
   * can potentially improve translation quality when translating short, low-context
   * source texts such as product names on an e-commerce website, article headlines
   * on a news website, or UI elements.
   *
   * For example...
   *
   * - When translating a product name, you might pass the product description as
   *   context.
   * - When translating a news article headline, you might pass the first few
   *   sentences or a summary of the article as context.
   *
   * For best results, we recommend sending a few complete sentences of context in
   * the same language as the source text. There is no size limit for the `context`
   * parameter itself, but the request body size limit of 128 KiB still applies to
   * all text translation requests.
   *
   * If you send a request with multiple `text` parameters, the `context` parameter
   * will be applied to each one.
   *
   * Characters included in the `context` parameter will not be counted toward
   * billing (i.e. there is no additional cost for using the `context` parameter, and
   * only characters sent in the text parameter(s) will be counted toward billing for
   * text translation even when the `context` parameter is included in a request).
   */
  context?: string;

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
  glossary_id?: TranslationTranslateParams.GlossaryID;

  /**
   * List of XML tags.
   */
  ignore_tags?: Array<string>;

  /**
   * List of XML tags.
   */
  non_splitting_tags?: Array<string>;

  /**
   * The automatic detection of the XML structure won't yield best results in all XML
   * files. You can disable this automatic mechanism altogether by setting the
   * `outline_detection` parameter to `false` and selecting the tags that should be
   * considered structure tags. This will split sentences using the `splitting_tags`
   * parameter.
   *
   * In the example below, we achieve the same results as the automatic engine by
   * disabling automatic detection with `outline_detection=0` and setting the
   * parameters manually to `tag_handling=xml`, `split_sentences=nonewlines`, and
   * `splitting_tags=par,title`.
   *
   * - Example request:
   *   ```
   *   <document>
   *     <meta>
   *       <title>A document's title</title>
   *     </meta>
   *     <content>
   *       <par>This is the first sentence. Followed by a second one.</par>
   *       <par>This is the third sentence.</par>
   *     </content>
   *   </document>
   *   ```
   * - Example response:
   *   ```
   *   <document>
   *     <meta>
   *       <title>Der Titel eines Dokuments</title>
   *     </meta>
   *     <content>
   *       <par>Das ist der erste Satz. Gefolgt von einem zweiten.</par>
   *       <par>Dies ist der dritte Satz.</par>
   *     </content>
   *   </document>
   *   ```
   *   While this approach is slightly more complicated, it allows for greater
   *   control over the structure of the translation output.
   */
  outline_detection?: boolean;

  /**
   * Sets whether the translation engine should respect the original formatting, even
   * if it would usually correct some aspects.
   *
   * The formatting aspects affected by this setting include:
   *
   * - Punctuation at the beginning and end of the sentence
   * - Upper/lower case at the beginning of the sentence
   */
  preserve_formatting?: boolean;

  /**
   * When true, the response will include the billed_characters parameter, giving the
   * number of characters from the request that will be counted by DeepL for billing
   * purposes.
   */
  show_billed_characters?: boolean;

  /**
   * Language of the text to be translated. Options currently available:
   *
   * - `AR` - Arabic [1]
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
   *
   * [1] Please note that Arabic has not yet been added to the `/languages` endpoint
   * because it does not yet support document translation; only text translation is
   * supported for Arabic at this time. When document translation support is added
   * for Arabic, we will a) remove this note and b) add Arabic to the `/languages`
   * endpoint.
   */
  source_lang?:
    | 'AR'
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

  /**
   * Sets whether the translation engine should first split the input into sentences.
   * For text translations where `tag_handling` is not set to `html`, the default
   * value is `1`, meaning the engine splits on punctuation and on newlines.
   *
   * For text translations where `tag_handling=html`, the default value is
   * `nonewlines`, meaning the engine splits on punctuation only, ignoring newlines.
   *
   * The use of `nonewlines` as the default value for text translations where
   * `tag_handling=html` is new behavior that was implemented in November 2022, when
   * HTML handling was moved out of beta.
   *
   * Possible values are:
   *
   * - `0` - no splitting at all, whole input is treated as one sentence
   * - `1` (default when `tag_handling` is not set to `html`) - splits on punctuation
   *   and on newlines
   * - `nonewlines` (default when `tag_handling=html`) - splits on punctuation only,
   *   ignoring newlines
   *
   * For applications that send one sentence per text parameter, we recommend setting
   * `split_sentences` to `0`, in order to prevent the engine from splitting the
   * sentence unintentionally.
   *
   * Please note that newlines will split sentences when `split_sentences=1`. We
   * recommend cleaning files so they don't contain breaking sentences or setting the
   * parameter `split_sentences` to `nonewlines`.
   */
  split_sentences?: '0' | '1' | 'nonewlines';

  /**
   * List of XML tags.
   */
  splitting_tags?: Array<string>;

  /**
   * Sets which kind of tags should be handled. Options currently available:
   *
   * - `xml`: Enable XML tag handling; see
   *   [XML Handling](https://www.deepl.com/docs-api/xml).
   * - `html`: Enable HTML tag handling; see
   *   [HTML Handling](https://www.deepl.com/docs-api/html).
   */
  tag_handling?: 'xml' | 'html';
}

export namespace TranslationTranslateParams {
  /**
   * A unique ID assigned to a glossary.
   */
  export interface GlossaryID {}
}

export declare namespace Translations {
  export {
    type TranslationTranslateResponse as TranslationTranslateResponse,
    type TranslationTranslateParams as TranslationTranslateParams,
  };
}
