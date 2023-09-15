import { imgUrls } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="gallery">
      {imgUrls.map((imageUrl, index) => (
        <Link key={index} href={`/photo/${index}`} scroll={false}>
          <Suspense fallback={'load mostafa 0000000000'}>
            <Image
              src={imageUrl}
              alt={imageUrl}
              width={100}
              height={100}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              sizes="60vw"
              priority
            />
          </Suspense>
        </Link>
      ))}
    </div>
  );
}
