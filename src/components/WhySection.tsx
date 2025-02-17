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
    <Section>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          🚀 Why FlatPool?
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-2 divide-x-2">
          <ul className="flex flex-col divide-y-2 max-w-fit ml-auto">
            <li className="text-lg text-center font-semibold p-2">
              Without FlatPool
            </li>
            {withoutPoints.map((feature, index) => (
              <li key={index} className="text-lg text-right p-2">
                {feature}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col divide-y-2 max-w-fit">
            <li className="text-lg text-center font-semibold p-2">
              With FlatPool
            </li>
            {withPoints.map((feature, index) => (
              <li key={index} className="text-lg text-left p-2">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
