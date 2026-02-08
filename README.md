## Uruchomienie Graftcode Gateway

./gg --projectKey project_key --modules HelloWorld/

## zainstaluj build

pip install build

## stwórz moduł w python

python -m build HelloWorld/
python -m build MeterMetric/

## w celu działania greet edytowałem dwa pliki

node_modules\@graft\pypi-hello-world\HelloWorld.js

```
/**
* @param {string} name
* @returns {Promise<string>}
*/
async greet(name){
  try {
  const result = await this.instance
  .invokeInstanceMethod("greet", name)
  .execute();
  return result.getValue();
  } catch (ex) {
  throw GraftUtils.ExceptionWrapper(ex);
  }
  }
```

node_modules\@graft\pypi-hello-world\index.d.ts

```
export * from './config';
export * from './utils';

export declare class HelloWorld {
  static get type(): any;
  get instance(): any;

  say_hello(): Promise<string>;
  greet(name: string): Promise<string>;
}


```
