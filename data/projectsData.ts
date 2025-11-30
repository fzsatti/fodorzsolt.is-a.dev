interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Home Temperature Monitor',
    description: `A DIY project that monitors the temperatures of the water in my home's heating system, and the exterior temperature, using a NodeMCU microcontroller and DS18B20 temperature sensors.xc`,
    imgSrc: '/static/images/home-temp/home_temp.png',
    href: '/blog/home-temperature-monitor',
  },
]

export default projectsData
