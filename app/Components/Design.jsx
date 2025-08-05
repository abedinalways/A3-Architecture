'use client';

import Image from "next/image";


export default function Design() {
  const images = [
    '/images/design/image01.png',
    '/images/design/image02.png',
    '/images/design/image03.png',
    '/images/design/image04.png',
    '/images/design/image5.png',
    '/images/design/image06.png',
  ];

  
  return (
    <section className="flex flex-col justify-center items-center relative">
      <div className="flex  justify-center">
         <Image src='/images/design/image01.png' alt="" width='300' height='100' className="rounded-md z-100 left-40 relative overflow-auto"/>
       <Image src='/images/design/image5.png' alt="" width='300' height='300' className="rounded-md z-110 right-40 relative overflow-auto"/>
       <Image src='/images/design/image03.png' alt="" width='300' height='300' className="rounded-md z-120 right-60 relative overflow-auto"/>
      </div>
      <div className="flex justify-center">
         <Image src='/images/design/image04.png' alt="" width='300' height='300' className="rounded-md bottom-20 z-130 left-40 relative overflow-auto"/>
       <Image src='/images/design/image02.png' alt="" width='300' height='300' className="rounded-md z-140 right-80 bottom-10 relative overflow-auto"/>
       <Image src='/images/design/image06.png' alt="" width='300' height='100' className="rounded-md z-150 right-20 bottom-30 relative overflow-auto"/>
      </div>
      </section>
  )
} 