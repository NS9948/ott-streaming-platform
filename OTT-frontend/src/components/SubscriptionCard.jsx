import React from "react";
import { HiOutlineCheck } from "react-icons/hi2";
import { subscribeToPlan } from "../services/subscriptionService";

const SubscriptionCard = ({
    plan,
    selected,
    setSelected
}) => {

    const handleSubscribe = async () => {
        try {
            const data = await subscribeToPlan(plan.name);

            console.log(data);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div
            onClick={() => setSelected(plan.name)}
            className={`relative rounded-3xl p-7 border transition-all duration-300 cursor-pointer ${
                selected
                    ? "border-[#3DEEE9] bg-[#15191D]"
                    : "border-white/10 bg-[#0D0F11] hover:border-white/30"
            }`}
        >

            {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div className="bg-[#3DEEE9] text-black text-xs font-bold px-4 py-1.5 rounded-full">
                        MOST POPULAR
                    </div>
                </div>
            )}

            <div className="mb-8">

                <h2 className="text-2xl font-semibold mb-2">
                    {plan.name}
                </h2>

                <p className="text-gray-400 text-sm min-h-10">
                    {plan.description}
                </p>

            </div>

            <div className="mb-8">

                <div className="flex items-end gap-1">

                    <span className="text-5xl font-bold">
                        ₹{plan.price}
                    </span>

                    {plan.price !== "0" && (
                        <span className="text-gray-400 mb-2">
                            /month
                        </span>
                    )}

                </div>

            </div>

            <div className="space-y-4 mb-10">

                {plan.features.map((feature) => (
                    <div
                        key={feature}
                        className="flex items-center gap-3"
                    >
                        <div className="h-5 w-5 rounded-full bg-[#3DEEE9]/10 flex items-center justify-center">
                            <HiOutlineCheck
                                size={13}
                                className="text-[#3DEEE9]"
                            />
                        </div>

                        <span className="text-sm text-gray-300">
                            {feature}
                        </span>
                    </div>
                ))}

            </div>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    handleSubscribe();
                }}
                className={`w-full py-3.5 rounded-full font-semibold transition-all duration-300 ${
                    selected
                        ? "bg-[#3DEEE9] text-black"
                        : "bg-white/10 text-white hover:bg-white/20"
                }`}
            >
                {plan.name === "Free"
                    ? "Current Plan"
                    : selected
                    ? "Selected"
                    : "Choose Plan"}
            </button>

        </div>
    );
};

export default SubscriptionCard;