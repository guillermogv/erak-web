import type { CourseItem } from "@/data/site-content";

interface CourseCardProps {
  course: CourseItem;
}

const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <div className="aspect-video overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-sm font-bold text-foreground">{course.title}</h3>
        <p className="text-xs leading-relaxed text-muted-foreground">{course.description}</p>
      </div>
    </div>
  );
};

export default CourseCard;
