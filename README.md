
# @gendev0/nestjs-entity-param

> Reusable NestJS decorator + pipe to validate and inject entities by param.

This package helps you fetch and inject an entity into your controller routes based on a URL parameter (`:id`, etc.). It ensures the entity exists by calling a generic `findById(id)` method on your service and throws a `NotFoundException` if not found.

---

## ✅ Features

- 🔁 Reusable for any entity (Post, User, Comment, etc.)
- 🧱 Works with any service implementing `findById(id: number)`
- 📦 Built-in `@EntityParam()` decorator
- 🧠 Automatically throws `NotFoundException` if entity is missing
- 💉 Uses proper NestJS dependency injection

---

## 📦 Installation

```bash
npm install @gendev0/nestjs-entity-param
````

---

## 🧩 Usage

### 1. Your service must implement `findById(id: number): Promise<Entity | null>`

```ts
@Injectable()
export class PostsService {
  async findById(id: number): Promise<Post | null> {
    return this.postsRepository.findOneBy({ id });
  }
}
```

---

### 2. Register a pipe provider in your module using the factory

```ts
import { createEntityExistsPipeProvider } from '@gendev0/nestjs-entity-param';

@Module({
  providers: [
    PostsService,
    createEntityExistsPipeProvider('PostExistsPipe', PostsService, 'Post'),
  ],
})
export class PostsModule {}
```

---

### 3. Use the `@EntityParam()` decorator in your controller

```ts
import { EntityParam } from '@gendev0/nestjs-entity-param';

@Controller('posts')
export class PostsController {
  @Get(':id')
  getPost(
    @EntityParam('id', 'PostExistsPipe') post: Post,
  ) {
    return post;
  }
}
```

---

## 📚 API

### `@EntityParam(param: string, pipeToken: string)`

* `param`: The name of the route parameter (e.g. `'id'`)
* `pipeToken`: The string token used in your module provider (e.g. `'PostExistsPipe'`)

### `createEntityExistsPipeProvider(pipeToken, serviceClass, entityName)`

Creates a NestJS provider that returns a pipe that:

* Injects your service
* Calls `findById(id)`
* Throws `NotFoundException` if not found

---

## 💡 Example With Comments

```ts
@Module({
  providers: [
    CommentsService,
    createEntityExistsPipeProvider('CommentExistsPipe', CommentsService, 'Comment'),
  ],
})
export class CommentsModule {}
```

```ts
@Controller('comments')
export class CommentsController {
  @Get(':id')
  getComment(@EntityParam('id', 'CommentExistsPipe') comment: Comment) {
    return comment;
  }
}
```

---

## 🤝 Contributing

PRs and ideas welcome!

---

## 🪪 License

MIT © [Ahmed Chebbi](https://github.com/gendev0)

