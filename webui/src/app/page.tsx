import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex justify-center">
          <div className="relative w-full max-w-full h-auto">
            <Image
              src="/logo.png"
              alt="Gold2th Logo"
              width={1200}
              height={1200}
              priority
              className="w-full h-auto object-contain"
              sizes="(max-width: 1024px) 90vw"
              style={{ maxHeight: 'calc(100vh - 10rem)', width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}