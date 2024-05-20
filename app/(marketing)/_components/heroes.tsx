import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image 
            src="/taking-note.png"
            fill
            className="object-contain dark:hidden"
            alt="Vector by macrovector"
          />
          <Image
            src="/taking-note-dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="Vector by macrovector"
          />
        </div>
        <div className="relative h-[400px] w-[400px] hidden md:block">
          <Image 
            src="/searching.png"
            fill
            className="object-contain dark:hidden"
            alt="Vector by macrovector"
          />
          <Image
            src="/searching-dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="Vector by macrovector"
          />
        </div>
      </div>
    </div>
  )
}

