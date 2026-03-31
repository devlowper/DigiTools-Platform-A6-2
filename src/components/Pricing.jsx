import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
    return (
        <div className="py-24 px-4 max-w-7xl mx-auto relative bg-[#fafafa]">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
                <p className="text-gray-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
                {/* Starter */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-fit">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
                    <p className="text-gray-500 text-sm mb-6">Perfect for getting started</p>
                    <div className="mb-6">
                        <span className="text-4xl font-bold text-gray-900">$0</span>
                        <span className="text-gray-500">/Month</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                        {["Access to 2 free tools", "Basic templates", "Community support", "1 project per month"].map((f, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                <Check className="w-4 h-4 text-green-500 shrink-0" /> {f}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full btn bg-purple-50 text-primary border-none hover:bg-purple-100 rounded-full">Get Started Free</button>
                </div>

                {/* Pro */}
                <div className="bg-primary text-white rounded-[2rem] p-8 shadow-2xl relative transform md:-translate-y-4 z-10 border border-purple-500">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Most Popular
                    </div>
                    <h3 className="text-xl font-bold mb-2">Pro</h3>
                    <p className="text-purple-200 text-sm mb-6">Best for professionals</p>
                    <div className="mb-6">
                        <span className="text-5xl font-bold">$29</span>
                        <span className="text-purple-200">/Month</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                        {["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"].map((f, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-purple-50">
                                <Check className="w-4 h-4 text-green-300 shrink-0" /> {f}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full btn bg-white text-primary border-none hover:bg-gray-50 rounded-full">Start Free Trial</button>
                </div>

                {/* Enterprise */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 h-fit">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
                    <p className="text-gray-500 text-sm mb-6">For teams and businesses</p>
                    <div className="mb-6">
                        <span className="text-4xl font-bold text-gray-900">$99</span>
                        <span className="text-gray-500">/Month</span>
                    </div>
                    <ul className="space-y-4 mb-8">
                        {["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"].map((f, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                <Check className="w-4 h-4 text-green-500 shrink-0" /> {f}
                            </li>
                        ))}
                    </ul>
                    <button className="w-full btn border-gray-200 text-primary bg-transparent hover:border-primary hover:bg-purple-50 rounded-full">Contact Sales</button>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
