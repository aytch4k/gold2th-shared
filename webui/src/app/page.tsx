import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <div className="relative w-full max-w-4xl aspect-[16/9]">
        <Image
          src="/logo.png"
          alt="Gold2th Logo"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  )
}