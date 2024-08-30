"use client";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { language: "HTML", experience: 6 },
  { language: "CSS", experience: 6 },
  { language: "JavaScript", experience: 5 },
  { language: "TypeScript", experience: 3 },
  { language: "SQL", experience: 2 },
  { language: "C", experience: 1 },
  { language: "React", experience: 3 },
  { language: "Next.js", experience: 2.5 },
  { language: "Node.js", experience: 3 },
];

const chartConfig = {
  experience: {
    label: "Experience",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function RadarChartComponent() {
  return (
    <ChartContainer
      config={chartConfig}
      className="flex-1 mx-auto aspect-square max-h-[200px] min-h-[200px]"
    >
      <RadarChart data={chartData}>
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <PolarAngleAxis dataKey="language" />
        <PolarGrid />
        <Radar
          dataKey="experience"
          fill="var(--color-experience)"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ChartContainer>
  );
}
