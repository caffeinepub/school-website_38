import { LucideIcon, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface DepartmentCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  courses: string[];
  color: string;
  iconColor: string;
  iconBg: string;
}

export default function DepartmentCard({
  icon: Icon,
  title,
  description,
  courses,
  iconColor,
  iconBg,
}: DepartmentCardProps) {
  return (
    <Card className="card-hover border border-border shadow-card bg-white group overflow-hidden">
      <div className="h-1 bg-school-blue group-hover:bg-school-red transition-colors duration-300" />
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center mb-4`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <h3 className="font-serif text-xl font-semibold text-school-blue mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-5">{description}</p>
        <div>
          <p className="text-xs font-semibold text-school-blue uppercase tracking-wider mb-3">
            Key Courses
          </p>
          <ul className="space-y-1.5">
            {courses.map((course) => (
              <li key={course} className="flex items-center gap-2 text-sm text-muted-foreground">
                <ChevronRight className="w-3.5 h-3.5 text-school-red flex-shrink-0" />
                {course}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
