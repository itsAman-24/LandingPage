import { Users, Award, Clock, Target, Heart, Lightbulb } from "lucide-react";

export const stats = [
  { icon: <Users className="h-8 w-8" />, number: "150+", label: "Happy Clients" },
  { icon: <Award className="h-8 w-8" />, number: "300+", label: "Projects Delivered" },
  { icon: <Clock className="h-8 w-8" />, number: "5+", label: "Years Experience" },
  { icon: <Target className="h-8 w-8" />, number: "98%", label: "Success Rate" },
];

export const values = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Client-Centric",
    description: "We put our clients at the center of every solution we create.",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Innovative Solutions",
    description: "We blend creativity with the latest tech to deliver impactful results.",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Collaborative Culture",
    description: "We work closely with our clients to bring ideas to life together.",
  },
];
