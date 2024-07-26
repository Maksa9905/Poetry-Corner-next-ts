# "Poetry Corner" API Documetation

## Posts - `/api/posts`

### <span style="background-color: green; padding: 5; margin-right: 10">GET</span> `/api/posts` - получение всех стихов

#### Формат ответа `IPostsResponse`:

```ts
interface IPostsResponse {
  length: number;
  posts: IPostResponse[];
}

interface IPostResponse extends IPost {
  _id: string;
}

interface IPost {
  title: string;
  description: string;
  text: string;
  rating: number;
  views: number;
}
```

### <span style="background-color: green; padding: 5; margin-right: 10">GET</span> `/api/posts?_id={_id}` - получение стихов автора с `_id`

#### Формат ответа `IPostsResponse`:

```ts
interface IPostsResponse {
  length: number;
  posts: IPostResponse[];
}

interface IPostResponse extends IPost {
  _id: string;
}

interface IPost {
  title: string;
  description: string;
  text: string;
  rating: number;
  views: number;
}
```

#### Возможные ошибки:

`"Author not found", {status: 404}` - автор с заданным `_id` не найден

### <span style="background-color: yellow; color: black; padding: 5; margin-right: 10">POST</span> `/api/posts?_id={_id}` - добавление стиха автора по `_id`

#### Формат запроса:

```ts
interface IPostRequest {
  title: string;
  // required: true,
  // unique: false,
  description: string;
  // required: false,
  // unique: false,
  text: string;
  // required: true,
  // unique: false,
  rating: number;
  // required: true,
  // unique: false,
  // default: 0,
  views: number;
  // required: true,
  // unique: false,
  // default: 0,
}
```

#### Формат ответа:

В ответ приходит пост, который только что был добавлен:

```ts
interface IPostResponse {
  _id: string;
  title: string;
  description: string;
  text: string;
  rating: number;
  views: number;
}
```

#### Возможные ошибки:

`'Author not found', { status: 404 }` - автор с `_id` не найден

## Authors - `/api/authors`

### <span style="background-color: green; padding: 5; margin-right: 10">GET</span> `/api/authors` - получение всех авторов

#### Формат ответа:

```ts

```