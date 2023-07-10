import { mdiGithub, mdiLinkedin } from "@mdi/js"
import Icon from "@mdi/react"
import Image from "next/image"

const intro = "Hi! I'm Willy \n A Web Front-End Developer"

const socialMedias = [
  {
    id: 1,
    title: 'Github',
    iconPath: mdiGithub,
    link: 'https://github.com/ZiWeiWilly',
  },
  {
    id: 2,
    title: 'LinkedIn',
    iconPath: mdiLinkedin,
    link: 'https://www.linkedin.com/in/willy-wang-2407081a1/',
  },
]

export default function Home() {
  return (
    <>
      <div className="flex justify-around items-center gap-8 h-screen">
        <div>
          <div className="text-4xl whitespace-pre-line mb-4 font-semibold dark:text-slate-200">{intro}</div>
          <div className="social-media flex gap-1">
            {socialMedias.map((item) => (
              <a className="border inline-flex gap-2 p-2 rounded-lg text-slate-700 border-slate-700 dark:text-slate-200 dark:border-slate-200" href={item.link} key={item.id}>
                <Icon path={item.iconPath} size={1} />
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div>
          <Image src={"/mimikyu.png"} width={300} height={300} alt={""} />
        </div>
      </div>
    </>
  )
}
