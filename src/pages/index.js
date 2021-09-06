import React from "react";
import CardTest from "./components/CardTest/CardTest";
import DesignTemplete from "./components/DesignTemplete/DesignTemplete";
import Header from "./components/header/Header";

import Layout from "./components/Layout/Layout";
import ModernTemplete from "./components/ModernTemplete/ModernTemplete";
import NewsCard from "./components/NewCard/NewsCard";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ServiceT from "./components/serviceTemplete/ServiceT";



export default function Home() {
  return (
    <Layout>
      <Header/>
      <DesignTemplete/>
      <ModernTemplete/>
      <ServiceT/>
      <ProjectCard/>
      <CardTest/>
      <NewsCard/>
      

    
    </Layout>
  )
    
 
  
}
