export default function Billing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for individuals getting started",
      features: [
        "1 workspace",
        "Up to 5 members",
        "Basic integrations",
        "10GB storage",
        "Email support",
      ],
      buttonText: "Current Plan",
      popular: false,
    },
    {
      name: "Pro",
      price: "$29",
      description: "Best for growing teams",
      features: [
        "Unlimited workspaces",
        "Up to 50 members per workspace",
        "Advanced integrations",
        "100GB storage",
        "Priority email support",
        "Custom branding",
        "Advanced analytics",
      ],
      buttonText: "Upgrade to Pro",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For large organizations",
      features: [
        "Unlimited everything",
        "Unlimited members",
        "All Pro features",
        "SAML/SSO authentication",
        "Dedicated support",
        "Custom integrations",
        "Advanced security",
        "Compliance features",
      ],
      buttonText: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Select the perfect plan for your team's needs</p>
          <div className="flex justify-center space-x-4">
            <label className="flex items-center">
              <input type="radio" name="billing" className="mr-2" defaultChecked />
              <span className="text-sm text-gray-700 dark:text-gray-300">Monthly</span>
            </label>
            <label className="flex items-center">
              <input type="radio" name="billing" className="mr-2" />
              <span className="text-sm text-gray-700 dark:text-gray-300">Yearly (Save 20%)</span>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border ${
                plan.popular ? 'border-blue-500 ring-2 ring-blue-500/20 transform scale-105' : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-500 dark:text-gray-400">/month</span>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : plan.name === 'Free'
                      ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                      : 'bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Current Usage */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Current Usage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">3</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Active Workspaces</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">24</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Team Members</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">12.5 GB</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Storage Used</p>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-700 dark:text-gray-300">Storage Usage</span>
              <div className="w-64 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">75% of 20GB</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Payment Methods</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-md">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-8 bg-gray-300 dark:bg-gray-600 rounded flex items-center justify-center">
                  <span className="text-sm">Visa</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">**** **** **** 1234</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Expires 12/2026</p>
                </div>
              </div>
              <div className="space-x-2">
                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 text-sm">
                  Edit
                </button>
                <button className="text-red-600 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 text-sm">
                  Remove
                </button>
              </div>
            </div>
            <button className="w-full py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Add Payment Method
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}