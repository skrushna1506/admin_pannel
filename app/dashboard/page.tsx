import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AppCard } from "@/components/app-card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

export default function Dashboard() {
  // Sample reference applications
  const apps = [
    {
      id: 1,
      name: "Spark App",
      description: "Electric vehicle charging application",
      logo: "/placeholder.svg?height=80&width=80",
      lastModified: "2 days ago",
    },
    {
      id: 2,
      name: "EB Charging",
      description: "Energy management platform",
      logo: "/placeholder.svg?height=80&width=80",
      lastModified: "5 days ago",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add New App
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Total Apps</CardTitle>
            <CardDescription>Your reference applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{apps.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Active Users</CardTitle>
            <CardDescription>Across all applications</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,284</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Configurations</CardTitle>
            <CardDescription>Changes made this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">24</div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mt-6 mb-4">Your Applications</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  )
}
