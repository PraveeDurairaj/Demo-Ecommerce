import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Header from "@/Components/Header/Header";
import ExploreProduct from "@/Components/ExploreProduct/ExploreProduct";
import Product from "@/Components/Product/Product";
import 'bootstrap/dist/css/bootstrap.min.css';
import FestivalSale from "@/Components/FestivalSale/FestivalSale";
import Admin from "@/Components/Admin/Admin";
import weekly from '../Helper/WeeklyPlan.json';
import FoodPlan from "@/Components/FoodPlan.js/FoodPlan";
import AdminHeader from "@/Components/AdminHeader/AdminHeader";

export default function Home() {
  const [week1,week2] = weekly ;
  // const myRef = useRef();
  // const [visible, setVisble] = useState(false)

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0]
  //      setVisble(entry.isIntersecting);
  //      console.log(entry.isIntersecting)
  //   },
  //   {threshold:1}
  // )
  //   observer.observe(myRef.current)
  // }, [])
  return (
    <>
      <Head>
        <title>Demo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <Header />
        <ExploreProduct />
        <FestivalSale/>
        <Product /> */}
        <div>
          <AdminHeader />
          
        {/* <FoodPlan/> */}
        </div>
      </main>
    </>
  );
}
