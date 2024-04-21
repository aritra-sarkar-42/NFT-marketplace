import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { Glow,GlowCapture } from '@codaworks/react-glow';
import { Button } from "@nextui-org/button";
const Mynfts = () => {
  return (
    <>
        <section className={`relative w-full h-screen mx-auto px-4`}>
            <p className='mt-36 text-[50px] ml-10 text-white font-bold cursor-pointer flex'>MY NFT's</p>
            <GlowCapture>
            <Glow color='indigo'>
                <span className='text-black glow:text-glow/50 glow:bg-red-100'>
                <Card className="py-4 border-4 w-[300px] rounded-xl h-96">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start text-white">
                        <p className="text-tiny uppercase font-bold">Spidey NFT</p>
                        <small className="text-default-500">only for $50000</small>
                        <h4 className="font-bold text-large">For noob traders</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2 px-4 bg-gradient-to-tr from-blue-700 to-orange-500">
                        <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://cdn.shopify.com/s/files/1/0822/1983/articles/spiderman-pixel-art-pixel-art-spiderman-fictional-superhero-marvel-pixel-8bit.png?v=1468377856"
                        width={270}
                        />
                    </CardBody>
                    <Button radius="full" className="pt-2 p-3 bg-gradient-to-tr from-cyan-700 to-pink-600 text-white shadow-lg  rounded-xl m-8">Sell</Button>
                </Card>
                </span>
                </Glow>
                </GlowCapture>
        </section>
        
    </>
    
  )
}

export default Mynfts
