import Image from 'next/image'
import Link from 'next/link'
import React from "react";

export default function Gallery({ images }) {
    const GalleryImg = React.forwardRef(({ image, onClick }, ref) => (
        <Image
            className="rounded-md overflow-hidden"
            src={image.src.medium}
            alt={image.alt}
            height={330}
            width={330}
            loading='lazy'
            onClick={ onClick }
        />
    ))

    return (                
        <div className="md:columns-2 lg:columns-3">
            {
                images.map(image => (
                    <div 
                        className="w-full rounded flex justify-center mb-4 cursor-pointer rounded overflow-hidden"
                        key={image.id}
                    >
                        <Link
                            passHref
                            href={`/image/${image.id}`}
                        >
                            <GalleryImg
                                image={image}
                            />
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}