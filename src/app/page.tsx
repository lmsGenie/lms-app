import Icon from "@/components/icon/Icon";
import { ModeToggle } from "@/components/toggle/ModeToggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      {/* Header */}
      {/* Hero */}
      Welcome to LMS-GENIE
      <ModeToggle></ModeToggle>
      <div className="grid grid-cols-6 items-center gap-8 pt-5">
        <Icon id="XCircle"></Icon>
        <Icon id="XCircle"></Icon>
        <Icon id="XCircle"></Icon>
        <Icon id="XCircle"></Icon>
        <Icon id="XCircle"></Icon>
        <Icon id="XCircle"></Icon>

        <Icon id="Pen" className="stroke-primary"></Icon>
        <Icon id="Pen" className="stroke-primary"></Icon>
        <Icon id="Pen" className="stroke-primary"></Icon>
        <Icon id="Pen" className="stroke-primary"></Icon>
        <Icon id="Pen" className="stroke-primary"></Icon>
        <Icon id="Pen" className="stroke-primary"></Icon>

        <Icon id="ThumbsUp" className="fill-primary stroke-none"></Icon>
        <Icon id="ThumbsUp" className="fill-primary stroke-none"></Icon>
        <Icon id="ThumbsUp" className="fill-primary stroke-none"></Icon>
        <Icon id="ThumbsUp" className="fill-primary stroke-none"></Icon>
        <Icon id="ThumbsUp" className="fill-primary stroke-none"></Icon>
        <Icon id="ThumbsUp" className="fill-primary stroke-none"></Icon>

        <Icon id="CheckSquare" className="stroke-success-600  "></Icon>
        <Icon id="CheckSquare" className="stroke-success-600  "></Icon>
        <Icon id="CheckSquare" className="stroke-success-600  "></Icon>
        <Icon id="CheckSquare" className="stroke-success-600  "></Icon>
        <Icon id="CheckSquare" className="stroke-success-600  "></Icon>
        <Icon id="CheckSquare" className="stroke-success-600  "></Icon>

        <Icon id="Prohibit" className="stroke-warning-600"></Icon>
        <Icon id="Prohibit" className="stroke-warning-600"></Icon>
        <Icon id="Prohibit" className="stroke-warning-600"></Icon>
        <Icon id="Prohibit" className="stroke-warning-600"></Icon>
        <Icon id="Prohibit" className="stroke-warning-600"></Icon>
        <Icon id="Prohibit" className="stroke-warning-600"></Icon>

        <Icon id="MapPin" className="hover:stroke-primary"></Icon>
        <Icon id="MapPin" className="h-12 w-12 hover:stroke-primary"></Icon>
        <Icon id="MapPin" className="h-14 w-14 hover:stroke-primary"></Icon>
        <Icon id="MapPin" className="h-16 w-16 hover:stroke-primary"></Icon>
        <Icon id="MapPin" className="h-20 w-20 hover:stroke-primary"></Icon>
        <Icon id="MapPin" className="h-24 w-24 hover:stroke-primary"></Icon>
      </div>
    </main>
  );
}
