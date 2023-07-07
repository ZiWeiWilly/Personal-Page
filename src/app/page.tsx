import { mdiGithub, mdiLinkedin } from "@mdi/js"
import Icon from "@mdi/react"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <div className="flex justify-around items-center">
        <div>
          <div>
            Hi! I'm Willy<br />
            A 3<sup>+</sup> years Web Front-End Developer
          </div>
          <div className="social-media flex gap-1">
            <a href="https://github.com/ZiWeiWilly">
              <Icon path={mdiGithub} size={1} />
            </a>
            <a href="https://www.linkedin.com/in/willy-wang-2407081a1/">
              <Icon path={mdiLinkedin} size={1} />
            </a>
          </div>
        </div>
        <div>
          <Image src={"/mimikyu.png"} width={200} height={200} alt={""} />
        </div>
      </div>
    </>
  )
}
