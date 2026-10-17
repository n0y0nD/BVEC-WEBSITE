import { CircuitBoard, Code, Cog, Landmark } from "lucide-react";

const icons = { CircuitBoard, Code, Cog, Landmark };

export default function DeptIcon({ name, className }) {
  const Icon = icons[name] ?? Code;
  return <Icon className={className} aria-hidden />;
}
