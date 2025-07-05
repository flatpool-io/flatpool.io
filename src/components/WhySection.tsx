import { Section } from "./common/section";

export default function WhySection() {
  const withoutPoints = [
    "🚨 scroll endlessly",
    "❌ irelevant posts",
    "❌ missed opportunities",
    "😓 high frustration",
  ];

  const withPoints = [
    "✅ get notified instantly",
    "🎯 filtered, precise results",
    "🔔 real-time alerts",
    "😌 eace of mind",
  ];

  return (
    <Section className="bg-muted">
      <div className="shadow-xl py-10 sm:px-14 w-full sm:w-auto sm:rounded-2xl mx-auto bg-white border-x-0 sm:border-x-2 border-y-2 border-black">
        <h2 className="text-3xl font-bold text-center mb-12">
          🚀 <span className="underline">Why</span> FlatPool?
        </h2>
        <ul className="max-w-3xl mx-auto grid grid-cols-2 w-fit">
          <li className="text-lg text-center font-semibold p-2">
            Without FlatPool
          </li>
          <li className="text-lg text-center font-semibold p-2 border-l-2 border-black">
            With FlatPool
          </li>
          {withoutPoints.map((feature, index) => (
            <>
              <li
                key={index}
                className="text-sm sm:text-lg text-right p-2 border-t-2 border-black"
              >
                {feature}
              </li>
              <li
                key={index}
                className="text-sm sm:text-lg text-left p-2 border-t-2 border-l-2 border-black"
              >
                {withPoints[index]}
              </li>
            </>
          ))}
        </ul>
      </div>
    </Section>
  );
}
