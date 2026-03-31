import type { TeamMember } from "@/data/nosotros-content";

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src={member.photo}
        alt={member.name}
        className="mb-4 h-40 w-40 rounded-full object-cover"
        loading="lazy"
      />
      <h4 className="text-sm font-bold text-foreground">{member.name}</h4>
      {member.lines?.map((line, i) => (
        <p key={i} className={`text-xs ${i === 0 ? 'font-semibold text-primary' : 'text-muted-foreground'}`}>{line}</p>
      ))}
    </div>
  );
};

export default TeamMemberCard;
