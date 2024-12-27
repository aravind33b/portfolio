import { MenuIcon, Share2Icon, MoreHorizontalIcon, MessageSquareIcon, StarIcon, LayoutGridIcon, CloudIcon, Blocks, NewspaperIcon, MonitorIcon, Trophy, ChevronRight, Award } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
  children?: NavItem[]
}

interface Project {
  title: string
  company: string
  companyUrl: string
  image: string
  duration: string
  tags: string[]
  category: string
}

interface Blog {
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
}

interface Achievement {
  title: string
  description: string
  date: string
  category: 'Hackathons' | 'Awards'
}

const projects: Project[] = [
  {
    title: "DSC eDemo - Virtual Stock Trading Platform",
    company: "DSC Securities",
    companyUrl: "https://www.dsc.com.vn",
    image: "/placeholder.svg?height=400&width=800",
    duration: "10 weeks (April 2024 - Jun 2024)",
    tags: ["NextJS", "AntDesign"],
    category: "Cloud"
  },
  {
    title: "HaThanhMansion",
    company: "HaThanhMansion",
    companyUrl: "#",
    image: "/placeholder.svg?height=400&width=800",
    duration: "2 weeks (March 2024)",
    tags: ["NextJS", "MaterialUI", "SEO"],
    category: "Others"
  },
  {
    title: "Crypto Trading Bot",
    company: "Personal Project",
    companyUrl: "#",
    image: "/placeholder.svg?height=400&width=800",
    duration: "6 weeks (Jan 2024)",
    tags: ["Solidity", "Web3.js"],
    category: "Blockchain"
  },
  {
    title: "Fitness Tracking App",
    company: "FitTech",
    companyUrl: "#",
    image: "/placeholder.svg?height=400&width=800",
    duration: "12 weeks (Oct 2023 - Dec 2023)",
    tags: ["Swift", "HealthKit"],
    category: "iOS"
  }
]

const views = [
  { label: "Gallery View", value: "all", icon: <LayoutGridIcon className="h-4 w-4" /> },
  { label: "Cloud", value: "Cloud", icon: <CloudIcon className="h-4 w-4" /> },
  { label: "Blockchain", value: "Blockchain", icon: <Blocks className="h-4 w-4" /> },
  { label: "iOS", value: "iOS", icon: "📱" },
  { label: "Others", value: "Others", icon: "✨" }
]

const navItems: NavItem[] = [
  {
    title: "About",
    href: "#about",
    icon: "👤"
  },
  {
    title: "Projects",
    href: "#projects",
    icon: "💼"
  },
  {
    title: "Blogs",
    href: "#blogs",
    icon: "📝"
  },
  {
    title: "Achievements",
    href: "#achievements",
    icon: <Trophy className="h-4 w-4" />,
    children: [
      {
        title: "Hackathons",
        href: "#achievements-hackathons",
        icon: <Award className="h-4 w-4" />
      },
      {
        title: "Awards",
        href: "#achievements-awards",
        icon: "🏆"
      }
    ]
  }
]

const blogs: Blog[] = [
  {
    title: "Understanding React Server Components",
    excerpt: "A deep dive into the next generation of React components...",
    date: "Dec 20, 2023",
    readTime: "5 min read",
    category: "Tech",
    tags: ["React", "Web Development"],
    image: "/placeholder.svg?height=400&width=800"
  },
  {
    title: "The Rise of Formula 1 in Asia",
    excerpt: "How F1 is gaining popularity in Asian markets...",
    date: "Dec 15, 2023",
    readTime: "4 min read",
    category: "Sports",
    tags: ["F1", "Motorsport"],
    image: "/placeholder.svg?height=400&width=800"
  },
  {
    title: "My Journey as a Digital Nomad",
    excerpt: "Experiences and lessons learned while working remotely...",
    date: "Dec 10, 2023",
    readTime: "6 min read",
    category: "Others",
    tags: ["Lifestyle", "Remote Work"],
    image: "/placeholder.svg?height=400&width=800"
  }
]

const blogViews = [
  { label: "All Blogs", value: "all", icon: <NewspaperIcon className="h-4 w-4" /> },
  { label: "Tech", value: "Tech", icon: <MonitorIcon className="h-4 w-4" /> },
  { label: "Sports", value: "Sports", icon: <Trophy className="h-4 w-4" /> },
  { label: "Others", value: "Others", icon: "✨" }
]

const achievements: Achievement[] = [
  {
    title: "First Place in AI Hackathon",
    description: "Developed an AI-powered solution for sustainable energy management",
    date: "November 2023",
    category: "Hackathons"
  },
  {
    title: "Best Mobile App Award",
    description: "Received recognition for innovative fitness tracking application",
    date: "September 2023",
    category: "Awards"
  },
  {
    title: "Runner-up in Blockchain Challenge",
    description: "Created a decentralized voting system using smart contracts",
    date: "July 2023",
    category: "Hackathons"
  },
  {
    title: "Outstanding Contributor Award",
    description: "Recognized for significant contributions to open-source projects",
    date: "May 2023",
    category: "Awards"
  }
]

function Sidebar({ className }: { className?: string }) {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

  const toggleExpand = (title: string) => {
    setExpandedItems(prev =>
      prev.includes(title)
        ? prev.filter(item => item !== title)
        : [...prev, title]
    )
  }

  const renderNavItem = (item: NavItem, depth = 0) => (
    <div key={item.title}>
      <Button
        variant="ghost"
        className={cn(
          "w-full justify-start h-7 px-2 text-sm font-normal hover:bg-zinc-800",
          depth > 0 && "pl-6"
        )}
        onClick={() => item.children && toggleExpand(item.title)}
      >
        <span className="mr-2">{typeof item.icon === 'string' ? item.icon : item.icon}</span>
        <span className="text-zinc-300">{item.title}</span>
        {item.children && (
          <ChevronRight
            className={cn(
              "ml-auto h-4 w-4 transition-transform",
              expandedItems.includes(item.title) && "transform rotate-90"
            )}
          />
        )}
      </Button>
      {item.children && expandedItems.includes(item.title) && (
        <div className="ml-4">
          {item.children.map(child => renderNavItem(child, depth + 1))}
        </div>
      )}
    </div>
  )

  return (
    <div className={cn("pb-12 w-64", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {navItems.map(item => renderNavItem(item))}
          </div>
        </div>
      </div>
    </div>
  )
}

function TopBar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400">
          <MenuIcon className="h-4 w-4" />
        </Button>
        <div className="flex items-center space-x-1 text-sm text-zinc-400">
          <span>/</span>
          <span>Hi, I'm Henry Vu</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm" className="text-xs text-zinc-400">
          Share
          <Share2Icon className="ml-1 h-3 w-3" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400">
          <MessageSquareIcon className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400">
          <StarIcon className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400">
          <MoreHorizontalIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

function ProjectSection() {
  const [selectedView, setSelectedView] = useState("all")
  const [viewType, setViewType] = useState<"list" | "gallery">("gallery")

  const filteredProjects = selectedView === "all"
    ? projects
    : projects.filter(project => project.category === selectedView)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-zinc-100">Projects</h2>
        <Button
          variant="outline"
          size="sm"
          className="h-8 border-zinc-800 bg-transparent text-zinc-400"
          onClick={() => setViewType(viewType === "list" ? "gallery" : "list")}
        >
          <LayoutGridIcon className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-2 border-b border-zinc-800 mb-6">
        {views.map((view) => (
          <Button
            key={view.value}
            variant="ghost"
            size="sm"
            onClick={() => setSelectedView(view.value)}
            className={cn(
              "h-9 px-4 text-sm font-medium rounded-none border-b-2",
              selectedView === view.value
                ? "border-zinc-200 text-zinc-200"
                : "border-transparent text-zinc-400 hover:text-zinc-300"
            )}
          >
            <span className="mr-2">{typeof view.icon === 'string' ? view.icon : view.icon}</span>
            {view.label}
          </Button>
        ))}
      </div>

      <div className={cn(
        "grid gap-4",
        viewType === "gallery" ? "md:grid-cols-2" : "grid-cols-1"
      )}>
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="group rounded-lg border border-zinc-800 bg-zinc-950/50 overflow-hidden"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
              <a
                href={project.companyUrl}
                className="text-sm text-zinc-400 hover:text-zinc-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.company}
              </a>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="mt-2 text-sm text-zinc-500">{project.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BlogSection() {
  const [selectedView, setSelectedView] = useState("all")
  const [viewType, setViewType] = useState<"list" | "gallery">("gallery")

  const filteredBlogs = selectedView === "all"
    ? blogs
    : blogs.filter(blog => blog.category === selectedView)

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-zinc-100">Blogs</h2>
        <Button
          variant="outline"
          size="sm"
          className="h-8 border-zinc-800 bg-transparent text-zinc-400"
          onClick={() => setViewType(viewType === "list" ? "gallery" : "list")}
        >
          <LayoutGridIcon className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center gap-2 border-b border-zinc-800 mb-6">
        {blogViews.map((view) => (
          <Button
            key={view.value}
            variant="ghost"
            size="sm"
            onClick={() => setSelectedView(view.value)}
            className={cn(
              "h-9 px-4 text-sm font-medium rounded-none border-b-2",
              selectedView === view.value
                ? "border-zinc-200 text-zinc-200"
                : "border-transparent text-zinc-400 hover:text-zinc-300"
            )}
          >
            <span className="mr-2">{typeof view.icon === 'string' ? view.icon : view.icon}</span>
            {view.label}
          </Button>
        ))}
      </div>

      <div className={cn(
        "grid gap-4",
        viewType === "gallery" ? "md:grid-cols-2" : "grid-cols-1"
      )}>
        {filteredBlogs.map((blog) => (
          <div
            key={blog.title}
            className="group rounded-lg border border-zinc-800 bg-zinc-950/50 overflow-hidden"
          >
            <div className="aspect-video overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="object-cover w-full h-full transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-zinc-100">{blog.title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{blog.excerpt}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {blog.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
                <span>{blog.date}</span>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AchievementsSection() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-zinc-100">Achievements</h2>
      
      <div id="achievements-hackathons" className="space-y-4">
        <h3 className="text-xl font-semibold text-zinc-200">Hackathons</h3>
        {achievements
          .filter(achievement => achievement.category === 'Hackathons')
          .map((achievement) => (
            <div
              key={achievement.title}
              className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-4"
            >
              <h4 className="text-lg font-semibold text-zinc-100">{achievement.title}</h4>
              <p className="mt-2 text-sm text-zinc-400">{achievement.description}</p>
              <p className="mt-2 text-sm text-zinc-500">{achievement.date}</p>
            </div>
          ))}
      </div>

      <div id="achievements-awards" className="space-y-4">
        <h3 className="text-xl font-semibold text-zinc-200">Awards</h3>
        {achievements
          .filter(achievement => achievement.category === 'Awards')
          .map((achievement) => (
            <div
              key={achievement.title}
              className="rounded-lg border border-zinc-800 bg-zinc-950/50 p-4"
            >
              <h4 className="text-lg font-semibold text-zinc-100">{achievement.title}</h4>
              <p className="mt-2 text-sm text-zinc-400">{achievement.description}</p>
              <p className="mt-2 text-sm text-zinc-500">{achievement.date}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Mobile nav */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="fixed right-4 top-4 z-50 md:hidden"
            size="icon"
          >
            <MenuIcon className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0 bg-zinc-950 border-zinc-800">
          <Sidebar />
        </SheetContent>
      </Sheet>

      <div className="flex">
        {/* Desktop sidebar */}
        <div className="hidden border-r border-zinc-800 md:block">
          <div className="fixed h-screen">
            <Sidebar className="border-r-0" />
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 md:ml-64">
          <TopBar />
          <main className="px-4 py-12 md:px-8">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12">
                <div className="mb-6 flex justify-center">
                  <div className="h-32 w-32 overflow-hidden rounded-full bg-zinc-800">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-full w-full p-4 text-zinc-400"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
                      />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                </div>
                <h1 className="mb-2 text-4xl font-bold text-zinc-100 text-center">Hi, I'm Henry Vu</h1>
                <div className="mb-6">
                  <p className="text-xl text-zinc-400 text-center">
                    I'm a{" "}
                    <span className="text-emerald-400">
                      Senior Frontend Engineer
                    </span>{" "}
                    from Hanoi, Vietnam 🇻🇳
                  </p>
                </div>
                <p className="text-lg text-zinc-500 text-center">
                  I have <span className="text-orange-400">3+ years</span> of
                  experience to create value for others through software products.
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-16">
                <ProjectSection />
                <BlogSection />
                <AchievementsSection />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

