# @gendev0/nestjs-entity-param

A lightweight NestJS utility to automatically inject and validate entities (like Posts, Users) from route params using a custom pipe and decorator.

## Features

- ✅ Custom `@EntityParam()` decorator
- ✅ Generic `EntityExistsPipe<T>`
- ✅ DRY and clean controller code
- ✅ Works with any service exposing `findById(id: number)`

## Install

```bash
npm install @gendev0/nestjs-entity-param

## Usage

```ts
import { EntityParam } from '@gendev0/nestjs-entity-param';

@Patch(':id')
async update(
  @EntityParam('id', postsService, 'Post') post: Post,
  @Body() dto: UpdatePostDto,
) {
  return this.postsService.update(post.id, dto, post);
}
```

Make sure your service implements:

```ts
findById(id: number): Promise<Post | null>;
```

```ts
import { EntityParam } from '@gendev0/nestjs-entity-param';

@Patch(':id')
async update(
  @EntityParam('id', postsService, 'Post') post: Post,
  @Body() dto: UpdatePostDto,
) {
  return this.postsService.update(post.id, dto, post);
}
```

Make sure your service implements:
```ts
findById(id: number): Promise<Post | null>;
```
## Controller 

import { EntityParam } from '@gendev0/nestjs-entity-param';

@Patch(':id')
async update(
  @EntityParam('id', postsService, 'Post') post: Post,
  @Body() dto: UpdatePostDto,
) {
  return this.postsService.update(post.id, dto, post);
}

Service Interface
Ensure your service implements:
findById(id: number): Promise<Post | null>;

## License
MIT


---

## ✅ How to Use in Your NestJS Monorepo

If you’re using something like [Nx](https://nx.dev/) or a monorepo:

- Put this in `libs/nestjs-entity-param`
- Add it to `tsconfig.base.json` paths:
  ```json
  {
    "@gendev/nestjs-entity-param": ["libs/nestjs-entity-param/src/index.ts"]
  }
- import { EntityParam } from '@gendev0/nestjs-entity-param';

