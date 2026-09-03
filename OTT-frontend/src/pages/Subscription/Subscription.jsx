import React, { useEffect, useState } from "react";
import SubscriptionCard from "../../components/SubscriptionCard";
import { getSubscription } from "../../services/subscriptionService";

const Subscription = () => {
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        const fetchSubscription = async () => {
            try {
                const data = await getSubscription();

                setSubscription(data.subscription);

                if (data.subscription) {
                    setSelectedPlan(data.subscription.plan);
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchSubscription();
    }, []);

    const plans = [
        {
            name: "Free",
            price: "0",
            description: "A simple way to start watching.",
            features: [
                "Limited movies & series",
                "720p video quality",
                "1 device",
                "With ads"
            ]
        },
        {
            name: "Basic",
            price: "199",
            description: "Everything you need for everyday streaming.",
            features: [
                "Full movies & series library",
                "1080p video quality",
                "2 devices",
                "Ad-free streaming",
                "Downloads"
            ],
            popular: true
        },
        {
            name: "Premium",
            price: "299",
            description: "The ultimate experience for your screen.",
            features: [
                "Full movies & series library",
                "4K Ultra HD",
                "4 devices",
                "Ad-free streaming",
                "Downloads",
                "Premium content"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white px-10 py-16">

            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-14">

                    <p className="text-[#3DEEE9] text-sm font-semibold tracking-[0.3em] uppercase mb-4">
                        Membership
                    </p>

                    <h1 className="text-5xl font-bold mb-5">
                        Choose your plan
                    </h1>

                    <p className="text-gray-400 text-lg">
                        Watch what you love. Upgrade when you're ready.
                    </p>

                </div>

                <div className="grid grid-cols-3 gap-6">

                    {plans.map((plan) => (
                        <SubscriptionCard
                            key={plan.name}
                            plan={plan}
                            selected={selectedPlan === plan.name}
                            setSelected={setSelectedPlan}
                        />
                    ))}

                </div>

            </div>

        </div>
    );
};

export default Subscription;