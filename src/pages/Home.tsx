import React from "react";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
export function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-wrap items-start w-8/12 m-auto">
        <Card />
      </div>
    </>
  );
}
