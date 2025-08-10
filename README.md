# zod-validation-library

Reusable, opinionated Zod schemas for common validation needs.

## Overview

This library provides a set of ready-to-use Zod validation schemas and helpers for common use cases like passwords, emails, usernames, and more. Designed to help teams standardize validation logic across frontend, backend, and mobile apps—especially those already using [Zod](https://github.com/colinhacks/zod).

## Why?

- **Consistency**: Avoid duplicating and re-inventing validation rules in each project.
- **Type Safety**: Full TypeScript support with Zod.
- **Composable**: Use these schemas as building blocks in your own Zod objects.
- **Parit(y) Across Stack**: Use the same validation logic on frontend, backend, and anywhere you use JavaScript/TypeScript.

## Features

- 🔒 Password validation (configurable strength)
- ✉️ Email validation (RFC-ish, with options)
- 🧑 Username validation (length, charset, etc.)
- 📱 Phone number, URL, and other common patterns (*coming soon*)
- 🧩 Easy to extend and compose

## Quick Start

```bash
npm install zod @kentriboe/zod-val
```

```typescript
import { emailSchema, passwordSchema, usernameSchema } from "@kentriboe/zod-val";

// Example usage:
emailSchema.parse("user@example.com");
passwordSchema.parse("StrongP4ssword!");
usernameSchema.parse("user_123");
```

## Examples

### Password

```typescript
import { passwordSchema } from "@kentriboe/zod-val";

passwordSchema.parse("Secret123!"); // ✅ Passes
passwordSchema.parse("123");        // ❌ Throws error
```

### Email

```typescript
import { emailSchema } from "@kentriboe/zod-val";

emailSchema.parse("test@example.com"); // ✅
emailSchema.parse("invalid-email");    // ❌
```

## Roadmap

- More schemas (URLs, phone numbers, etc.)
- Configurable options for stricter/looser rules
- Documentation and real-world usage examples

## Contributing

Contributions, suggestions, and issues are welcome! Please open an issue or a pull request.

---

MIT License | Inspired by the [Zod](https://github.com/colinhacks/zod) ecosystem.
