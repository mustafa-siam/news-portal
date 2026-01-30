export interface News {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  img:string
}

const news: News[] = [
  {
    id: 1,
    img:"/banner.jpg",
    slug: "global-market-hits-record-high",
    title: "Global Market Hits Record High",
    category: "Business",
    date: "Jan 20, 2026",
    description:
      "Global stock markets reached a new all-time high today as investors showed strong confidence in the tech and energy sectors.",
  },
  {
    id: 2,
    img:"/img1.jpg",
    slug: "new-ai-technology-changing-web-development",
    title: "New AI Technology Changing Web Development",
    category: "Technology",
    date: "Jan 21, 2026",
    description:
      "Developers are rapidly adopting AI-powered tools to improve productivity and reduce development time.",
  },
  {
    id: 3,
    img:"/img2.jpg",
    slug: "bangladesh-wins-thrilling-final-match",
    title: "Bangladesh Wins Thrilling Final Match",
    category: "Sports",
    date: "Jan 22, 2026",
    description:
      "A dramatic final over secured Bangladesh a historic victory in the international cricket tournament.",
  },{
    id: 4,
    img:"/img3.jpg",
    slug: "renewable-energy-surpasses-coal",
    title: "Renewable Energy Surpasses Coal in Power Generation",
    category: "Environment",
    date: "Jan 24, 2026",
    description:
      "For the first time in history, wind and solar combined have generated more electricity than coal-fired plants across the continent.",
  },
  {
    id: 5,
    img:"/img4.jpg",
    slug: "space-tourism-reaches-new-milestone",
    title: "Space Tourism Reaches New Milestone with Lunar Orbit",
    category: "Science",
    date: "Jan 26, 2026",
    description:
      "A private spacecraft successfully completed a lunar orbit mission today, carrying civilian passengers further into space than ever before.",
  },
  {
    id: 6,
    img:"/img5.jpg",
    slug: "local-startup-wins-innovation-award",
    title: "Local Startup Wins Global Innovation Award for Health-Tech",
    category: "Business",
    date: "Jan 28, 2026",
    description:
      "A homegrown startup has been recognized for its revolutionary AI-driven diagnostics tool, set to transform affordable healthcare in rural areas.",
  },
];

export default news;