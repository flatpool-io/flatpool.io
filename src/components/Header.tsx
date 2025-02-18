import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b-black border-b-2">
      <div className="mx-auto p-2 max-w-screen-lg w-full flex justify-between">
        <p className="text-center font-bold text-lg">FlatPool</p>
        <div className="flex items-center divide-x-2 divide-black">
          <a className="px-2">
            <Button size="sm" variant="ghost">
              About us
            </Button>
          </a>
          <a className="px-2">
            <Button size="sm" variant="ghost">
              Sign In
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
