# TypeScript Pro tips/patterns
---
#### 1. Không sử dụng `public` trước `method`
`Không nên`
```typescript
    export class AppComponent implements OnInit {
        public ngOnInit (){}
    }
```
`Nên`:
```typescript
    export class AppComponent implements ngOnit {
        ngOnInit (){}
    }
```
#### 2. Nên dùng arrow function trong interface
`Không nên`:
```typescript
    export interface NumberPattern {
        function One(): string;
        function Two(): number;
        function Three(): boolean;
    }
```
`Nên`:
```typescript
    export interface NumberPattern {
        One: () => string;
        Two: () => number;
        Three: (n: number) => boolean;
    }
```
#### 3. Tái sử dụng kiểu dữ liệu
`được`
```typescript
    export interface TypePattren {
        function One(): string;
        function Two(): string;
        function Three(): string;
        function Four(): string;
    }
```
`Tốt`
```typescript
    export interface TypePattern <T> {
        function One(): T1;
        function Two(): T1;
        function Three(): T1;
        function Four(): T1;
    }
```
#### 4. Nên có một file ``index.ts`` để export tất cả các file còn lại
```typescript
    'number1.ts'
    export interface Number1 {
       One: () => string;
    }
    'number2.ts'
    export interface Number2 {
       Two: () => string;
    }
    'index.ts'
    import { Number1 } from './number1';
    import { Number2 } from './number2';
    export { Number1, Number2 }
```