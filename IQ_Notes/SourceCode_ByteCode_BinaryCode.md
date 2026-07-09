# Source Code vs Byte Code vs Binary Code

## Example File: `01_HelloWorld.js`

```javascript
console.log("Hello, World!");
```

| Aspect | Source Code | Byte Code | Binary Code (Machine Code) |
|--------|-------------|-----------|----------------------------|
| **What is it?** | Human-readable instructions written in a programming language (JS, Python, Java, C++, etc.) | Intermediate representation between source code and machine code. Platform-independent. | Raw 0s and 1s that the CPU executes directly. Platform-specific (x86, ARM, etc.). |
| **Who reads it?** | Humans (developers) write and read it. | Virtual Machines (V8, JVM, CLR) interpret or JIT-compile it to binary. | The physical CPU executes it. |
| **Example (our Hello World)** | `console.log("Hello, World!");` | (V8 internal) Push string, call `console.log` opcode, return. Not directly visible to developers. | `10110000 00000001 10111000 ...` (actual CPU instructions — specific to your processor) |
| **Readability** | ✅ Human-readable | ❌ Not meant for humans | ❌ Not meant for humans |
| **Portability** | ✅ Cross-platform (write once, run anywhere with the right runtime) | ✅ Cross-platform (Java bytecode runs on any JVM; JS bytecode runs in any V8 engine) | ❌ Tied to a specific CPU architecture (x86 code won't run on ARM) |
| **How it's produced** | Written by a developer in a text editor. | Produced by a compiler or interpreter (e.g., V8 compiles JS to bytecode before execution). | Produced by a compiler or JIT (e.g., V8's TurboFan compiles hot bytecode to optimized machine code). |
| **File extension** | `.js`, `.py`, `.java`, `.cpp`, `.ts`, etc. | `.class` (Java), `.pyc` (Python), `.wasm` (WebAssembly) | `.exe`, `.dll`, `.bin`, `.o`, no extension on Linux/macOS executables |
| **Example languages/tools** | JavaScript, TypeScript, Python, Java, C++, C#, Go, Rust | Java (JVM bytecode), C# (CIL), Python (`.pyc`), JavaScript (V8 Ignition bytecode) | x86-64, ARM64, RISC-V instructions |

## How It Works for Our `01_HelloWorld.js`

1. **Source Code** → You write `console.log("Hello, World!");` in `01_HelloWorld.js`.
2. **Byte Code** → When Node.js runs the file, V8 (JavaScript engine) parses the source and compiles it into **Ignition bytecode** — an intermediate, platform-independent representation.
3. **Binary Code** → If a function is called frequently ("hot path"), V8's **TurboFan JIT compiler** converts the bytecode into native **machine code** (binary) that the CPU executes directly.

```mermaid
flowchart LR
    A["Source Code<br/><code>console.log('Hello, World!');</code>"] --> B["Parser (V8)"]
    B --> C["Byte Code<br/>(Ignition)"]
    C --> D["JIT Compiler<br/>(TurboFan)"]
    D --> E["Binary Code<br/>(x86 / ARM)"]
    E --> F["CPU Executes"]
```

## Key Takeaway

| Code Type | Purpose |
|-----------|---------|
| **Source Code** | Human intent — you write this. |
| **Byte Code** | Bridge — the runtime uses this as a compact, portable intermediate step. |
| **Binary Code** | Machine execution — the CPU runs this directly as electrical signals. |
