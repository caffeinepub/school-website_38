import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface StaffCardProps {
  name: string;
  role: string;
  department: string;
  bio: string;
}

export default function StaffCard({ name, role, department, bio }: StaffCardProps) {
  const initials = name
    .split(' ')
    .filter((_, i) => i === 0 || i === name.split(' ').length - 1)
    .map((n) => n[0])
    .join('');

  return (
    <Card className="card-hover border-0 shadow-card overflow-hidden group">
      <div className="h-2 bg-school-blue group-hover:bg-school-red transition-colors duration-300" />
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-14 h-14 rounded-full bg-school-blue flex items-center justify-center flex-shrink-0 group-hover:bg-school-red transition-colors duration-300">
            <span className="font-serif text-lg font-bold text-white">
              {initials}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-base font-semibold text-school-blue leading-tight">
              {name}
            </h3>
            <p className="text-school-red text-sm font-medium mt-0.5">{role}</p>
            <Badge
              variant="secondary"
              className="mt-1.5 text-xs bg-school-blue/10 text-school-blue border-0 font-normal"
            >
              {department}
            </Badge>
          </div>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
      </CardContent>
    </Card>
  );
}
