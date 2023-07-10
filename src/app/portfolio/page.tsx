import Image from "next/image"

type portfolioItem = {
  id: number
  imageUrl: string
  title: string
  description: string
}

const portfolioItems: portfolioItem[] = [
  {
    id: 1,
    imageUrl: '/dummy.png',
    title: 'Todo',
    description: 'A common todo list app created by React and Django.\nIncluding CURD and searching function.',
  },
  {
    id: 2,
    imageUrl: '/dummy.png',
    title: 'Todo',
    description: 'A common todo list app created by React and Django.\nIncluding CURD and searching function.',
  },
]

const Portfolio = () => {
  return (
    <div className='flex flex-col gap-4 pt-24 pb-12'>
      {portfolioItems.map((item) => (
        <div key={item.id} className='flex gap-8'>
          <div>
            <Image src={item.imageUrl} width={400} height={400} alt="" />
          </div>
          <div>
            <div>{item.title}</div>
            <div className="whitespace-pre-line">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Portfolio