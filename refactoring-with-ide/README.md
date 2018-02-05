# Refactoring with IDE

- IntelliJ : Refactor > *
- Eclipse : Refactor > *
- Visual Studio : Edit > Refactor > *

## Usefull tools with shortcuts

| Shortcuts               | IntelliJ         | Eclipse       | Visual Studio |
| ----------------------- | ---------------- | ------------- | ------------- |
| Refactor                | Ctrl+Alt+Shift+T | Alt+Shift+R   |               |
| Rename                  | Shift+F6         | Alt+Shift+R   |               |
| Move                    | F6               | Alt+Shift+V   |               |
| Extract variable        | Ctrl+Alt+V       | Alt+Shift+L   |               |
| Extract parameter       | Ctrl+Alt+P       | Not available |               |
| Extract method          | Ctrl+Alt+M       | Alt+Shift+M   |               |
| Inline                  | Ctrl+Alt+N       | Alt+Shift+I   |               |
| Safe delete             | Alt+Enter        | Not Available |               |
| Delete                  | Alt+Delete       |               |               |
| Change method signature |                  | Alt+Shift+C   |               |

## What is possible

- Rename
- Extract
  - Variable
  - Parameter
  - Method
  - Delegate
- Inline
- Delete

## What you shoud not do

- Use your own hands
- Rename something used out of the build package

## Kata code

Legacy mini pricer

## Examples

- extract lots of if else if in strategy
- Change signature of class or method
- Invert boolean
- Extract method
- Extract interface
- Replace inheritance with delegation
  - Replace inheritance with delegation -> makes a inner class
  - inline method on all overrided methods -> makes the inner class empty
  - inline the class -> makes the inner disapear
  - on extended class, move initializer to constructor
  - Extract parameter





