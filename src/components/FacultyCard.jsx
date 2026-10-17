import { ExternalLink, Mail } from "lucide-react";
import { Portrait } from "./ui";

export default function FacultyCard({ person, showDept = false }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
      <Portrait src={person.photo} name={person.name} className="aspect-[4/5] w-full" sizes="(min-width: 1024px) 240px, 50vw" />
      <div className="flex flex-1 flex-col border-t-[3px] border-accent-600 p-4">
        <h3 className="text-base font-bold leading-snug">{person.name}</h3>
        <p className="text-sm font-medium text-accent-700">{person.role}</p>
        {showDept && (
          <p className="text-xs text-slate-500">
            {person.dept === "BSH" ? person.area : person.deptName ?? person.dept}
          </p>
        )}
        {person.research && (
          <p className="mt-2 line-clamp-3 text-sm text-slate-600">
            <span className="font-semibold text-slate-700">Research: </span>
            {person.research}
          </p>
        )}
        <div className="mt-auto space-y-1 pt-3 text-sm">
          {person.email && (
            <a href={`mailto:${person.email}`} className="flex items-center gap-1.5 break-all text-brand-700 hover:underline">
              <Mail className="size-3.5 shrink-0" aria-hidden /> {person.email}
            </a>
          )}
          {person.profile && (
            <a href={person.profile} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-brand-700 hover:underline">
              <ExternalLink className="size-3.5 shrink-0" aria-hidden /> Profile
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
