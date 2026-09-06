'use client'
import Image from "next/image"
import { useState } from "react";
import {Button} from "@/components/ui/button";
export default function ImageTab(){
const[activeTab,setActiveTab]=useState("organize");

return(
  
        <section className="border-t bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              {/*Tabs*/}
              <div className="flex gap-2 justify-center mb-8">
                <Button onClick={()=>setActiveTab("organize")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors${ activeTab === 'organize' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>organize application</Button>
                <Button onClick={()=>setActiveTab("get hired")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors${ activeTab === 'get hired' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>get hired</Button>
                <Button onClick={()=>setActiveTab("Manage bords")} className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors${ activeTab === 'Manage bords' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>Manage bords</Button>
              </div>
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                {activeTab==="organize" && (
                  <Image src="/hero-images/hero1.png" alt="organize application" width={1200} height={800}/>
                )}
                {activeTab==="get hired" && (
                  <Image src="/hero-images/hero2.png" alt="get hired" width={1200} height={800}/>
                )}
                {activeTab==="Manage bords" && (
                  <Image src="/hero-images/hero3.png" alt="Manage bords" width={1200} height={800}/>
                )}
              </div>
            </div>
          </div>
        </section>
)
}