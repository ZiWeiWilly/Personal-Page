import Image from "next/image"

const intro = "I'm Willy Wang. I have 3 years of frontend developing experience."

type experience = {
  id: number
  companyName: string
  companyLogo: string
  jobTitle: string
  jobDateBegin: string
  jobDateEnd: string | null
}

const experiences: experience[] = [
  {
    id: 1,
    companyName: 'GoFreight',
    companyLogo: '/gofreight.png',
    jobTitle: 'Web Crawler Intern',
    jobDateBegin: '2019/07',
    jobDateEnd: '2020/08',
  },
  {
    id: 2,
    companyName: 'GoFreight',
    companyLogo: '/gofreight.png',
    jobTitle: 'Web Front-End Developer',
    jobDateBegin: '2020/08',
    jobDateEnd: '2022/11',
  },
  {
    id: 3,
    companyName: 'dotBrand',
    companyLogo: '/dotbrand.png',
    jobTitle: 'Web Front-End Developer',
    jobDateBegin: '2023/03',
    jobDateEnd: null,
  },
]

type skill = {
  id: number
  title: string
  proficiency: 'Average' | 'Competent' | 'Proficient'
  descriptions: string[]
}

const skills: skill[] = [
  {
    id: 1,
    title: 'HTML / CSS / Javascript',
    proficiency: 'Proficient',
    descriptions: [],
  },
  {
    id: 2,
    title: 'HTML / CSS / Javascript',
    proficiency: 'Proficient',
    descriptions: [],
  },
]

const Resume = () => {
  return (
    <div className="flex flex-col gap-8 pt-24 pb-12">
      <div>{intro}</div>
      <div>
        <div>Work Experience</div>
        <div className="flex justify-around gap-4">
          {experiences.map((item) => (
            <>
              <div className="flex flex-col items-center">
                <Image src={item.companyLogo} width={200} height={200} alt="" />
                <div>{item.companyName}</div>
                <div>{item.jobTitle}</div>
                <div>{item.jobDateBegin} - {item.jobDateEnd ?? 'Now'}</div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div>
        <div>Skill</div>
        <div className="grid grid-cols-3 gap-4">
          {skills.map((item) => (
            <div className="flex flex-col gap-3 p-4 rounded border border-slate-300" key={item.id}>
              <div>{item.title}</div>
              <div>Proficiency: {item.proficiency}</div>
              <ul>
                {item.descriptions.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resume