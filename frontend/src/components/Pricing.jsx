import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: "$10",
    period: "/month",
    tagline: "Perfect for getting started",
    features: [
      "3 full AI interviews",
      "Auto agent for 21 days",
      "3 referral requests",
      "Basic AI matching",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$30",
    period: "/month",
    tagline: "Most popular for job seekers",
    features: [
      "10 full AI interviews",
      "Auto agent for 60 days",
      "10 referral requests",
      "Pro AI intelligence",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    tagline: "For serious professionals",
    features: [
      "Unlimited AI interviews",
      "Unlimited auto agent",
      "Unlimited referrals",
      "Advanced AI + priority",
      "1-on-1 career coaching",
      "Resume optimization",
    ],
    highlighted: false,
  },
]

const Pricing = () => {
    const navigate = useNavigate()
  return (
    <section id="pricing" className="py-24 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-[0.25em] mb-4">
          <span className="w-2 h-2 rounded-full bg-cyan-300" />
          Simple, Transparent Pricing
        </div>
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-200 to-blue-400 text-transparent bg-clip-text heading-dual">Choose the plan that fits</h2>
        <p className="text-white/75 max-w-2xl mx-auto mb-12">All plans include core AI features. Upgrade anytime as you scale your search.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`plan-card relative rounded-3xl p-8 flex flex-col bg-white/12 backdrop-blur-xl border border-white/20 ${
                plan.highlighted ? "plan-card--featured" : ""
              }`}
            >
              <div className="plan-card__glow" aria-hidden="true" />
              <div className="plan-card__shine" aria-hidden="true" />

              {/* Plan Name */}
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {plan.name}
              </h3>
              {plan.tagline && (
                <p className="text-sm text-white/70 mb-4">{plan.tagline}</p>
              )}

              {/* Price */}
              <div className="mb-6 flex items-baseline justify-center gap-2">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
                <span className="text-blue-100 ml-1">
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 text-left flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-green-300 font-bold">✔</span>
                    <span className="text-blue-100">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-3 rounded-xl font-semibold transition
                  ${
                    plan.highlighted
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "border border-white text-white hover:bg-white hover:text-gray-900"
                  }`}
                  onClick={()=>{
                    navigate("/signup")
                  }}
              >
                Get Started
              </button>

              {/* Glass glow */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

