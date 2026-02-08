"use client";
import { useState, useEffect, useRef } from "react";
// import { GraftConfig } from "@graft/pypi-hello-world";
// GraftConfig.host = `ws://localhost/ws`;

// const helloInstance = new HelloWorld();
const initName = "John";

export default function Home() {
  const [greet, setGreet] = useState(`Hello ${initName}!`);
  const [name, setName] = useState(initName);
  const [data, setData] = useState("Hello World!");

  const helloInstanceRef = useRef<{
    say_hello: () => Promise<string>;
    greet: (name: string) => Promise<string>;
  }>(null);

  useEffect(() => {
    const init = async () => {
      const { GraftConfig, HelloWorld } =
        await import("@graft/pypi-hello-world");
      GraftConfig.host = "ws://localhost/ws";
      const instance = new HelloWorld();
      helloInstanceRef.current = instance;
      instance.say_hello().then((res) => setData(res));
      instance.greet(initName).then(setGreet);
    };
    init();
  }, []);

  const handleBlur = () => {
    helloInstanceRef.current?.greet(name).then(setGreet);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Tekst z graftcode</h1>
      <h2 className="text-xl">{data}</h2>
      <input
        className="border-2 border-gray-300 rounded-md p-2"
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        onBlur={handleBlur}
      />
      <h2 className="text-xl">{greet}</h2>
    </div>
  );
}
