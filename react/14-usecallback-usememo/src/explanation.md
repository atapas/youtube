# useCallback and useMemo

- Performance
- What are they and Syntaxes?
  - 2 hooks
  - Some functions
  - JavaScript Functions are first class 
  citizens
    ```js
    // It returns fn when [] changes
    useCallback(fn, []); 
    ```
    ```js
    // It executes fn() and returns the value whe n [] changes.
    useMemo(fn, []); 
    ```
    ```js
    useEffect(() => {

    }, [someFunc]);
- Usages
  - Referential Equality
    - ==
    - ===
    - Object.is()
  - Expensive Execution

- Examples
- When NOT to use