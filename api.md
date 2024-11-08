# Translations

Types:

- <code><a href="./src/resources/translations.ts">TranslationTranslateResponse</a></code>

Methods:

- <code title="post /translate">client.translations.<a href="./src/resources/translations.ts">translate</a>({ ...params }) -> TranslationTranslateResponse</code>

# Documents

Types:

- <code><a href="./src/resources/documents.ts">DocumentCreateResponse</a></code>
- <code><a href="./src/resources/documents.ts">DocumentRetrieveResponse</a></code>

Methods:

- <code title="post /document">client.documents.<a href="./src/resources/documents.ts">create</a>({ ...params }) -> DocumentCreateResponse</code>
- <code title="post /document/{document_id}">client.documents.<a href="./src/resources/documents.ts">retrieve</a>(documentId, { ...params }) -> DocumentRetrieveResponse</code>
- <code title="post /document/{document_id}/result">client.documents.<a href="./src/resources/documents.ts">result</a>(documentId, { ...params }) -> Response</code>

# GlossaryLanguagePairs

Types:

- <code><a href="./src/resources/glossary-language-pairs.ts">GlossaryLanguagePairListResponse</a></code>

Methods:

- <code title="get /glossary-language-pairs">client.glossaryLanguagePairs.<a href="./src/resources/glossary-language-pairs.ts">list</a>() -> GlossaryLanguagePairListResponse</code>

# Glossaries

Types:

- <code><a href="./src/resources/glossaries/glossaries.ts">Glossary</a></code>
- <code><a href="./src/resources/glossaries/glossaries.ts">GlossaryListResponse</a></code>

Methods:

- <code title="post /glossaries">client.glossaries.<a href="./src/resources/glossaries/glossaries.ts">create</a>({ ...params }) -> Glossary</code>
- <code title="get /glossaries/{glossary_id}">client.glossaries.<a href="./src/resources/glossaries/glossaries.ts">retrieve</a>(glossaryId) -> Glossary</code>
- <code title="get /glossaries">client.glossaries.<a href="./src/resources/glossaries/glossaries.ts">list</a>() -> GlossaryListResponse</code>
- <code title="delete /glossaries/{glossary_id}">client.glossaries.<a href="./src/resources/glossaries/glossaries.ts">delete</a>(glossaryId) -> void</code>

## Entries

Methods:

- <code title="get /glossaries/{glossary_id}/entries">client.glossaries.entries.<a href="./src/resources/glossaries/entries.ts">list</a>(glossaryId, { ...params }) -> void</code>

# MetaInformations

## Usage

Types:

- <code><a href="./src/resources/meta-informations/usage.ts">UsageListResponse</a></code>

Methods:

- <code title="get /usage">client.metaInformations.usage.<a href="./src/resources/meta-informations/usage.ts">list</a>() -> UsageListResponse</code>

## Languages

Types:

- <code><a href="./src/resources/meta-informations/languages.ts">LanguageListResponse</a></code>

Methods:

- <code title="get /languages">client.metaInformations.languages.<a href="./src/resources/meta-informations/languages.ts">list</a>({ ...params }) -> LanguageListResponse</code>
